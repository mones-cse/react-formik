import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextError from "./TextError";

const initialValues = {
    name: "",
    email: "",
    channel: "",
    description: "",
    address: "",
    social:{
        facebook:"",
        twitter:""
    },
    phoneNumbers:['','']
};
const onSubmit = values => {
    console.log("values", values);
};

const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    // email: yup.string().email("invalid email format").required("Required"),
    email: yup.string().email("invalid email format").optional(),
    channel: yup.string().required("Required"),
    description: yup.string().optional(),
    address: yup.string().required("Required"),
    social:yup.object({
        facebook:yup.string().required("Required"),
        twitter:yup.string().required("Required"),
    }),

});
const YouTubeForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className={"form-control"}>
                    <label htmlFor="name">Name</label>
                    <Field type="text" id={"name"} name={"name"} />
                    <ErrorMessage name={"name"} component={TextError} />
                </div>
                <div className={"form-control"}>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name={"email"} id={"email"} />
                    <ErrorMessage name={"email"}>
                        {error => <div style={{ color: "red" }}> {error}</div>}
                    </ErrorMessage>
                </div>
                <div className={"form-control"}>
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id={"channel"} name={"channel"} />
                    <ErrorMessage name={"channel"} component={TextError} />
                </div>
                <div className={"form-control"}>
                    <label htmlFor="channel">Description</label>
                    <Field
                        type="text"
                        id={"description"}
                        name={"description"}
                        as={"textarea"}
                        style={{ height: "100px" }}
                    />
                    <ErrorMessage name={"description"} component={TextError} />
                </div>
                <div className={"form-control"}>
                    <label htmlFor="address">Address</label>
                    <Field name={"address"}>
                        {props => {
                            const { field, from, meta } = props;
                            // console.log(props);
                            return (
                                <div>
                                    <textarea
                                        type="text"
                                        id={"address"}
                                        {...field}
                                    />
                                    {meta.touched && meta.error && (
                                        <div style={{color:'red'}}>{meta.error}</div>
                                    )}
                                </div>
                            );
                        }}
                    </Field>
                    {/*<ErrorMessage name={"address"}  component={TextError}/>*/}
                </div>

                <div className={"form-control"}>
                    <label htmlFor="facebook">Facebook</label>
                    <Field type="text" id={"facebook"} name={"social.facebook"} />
                    <ErrorMessage name={"social.facebook"} component={TextError} />
                </div>

                <div className={"form-control"}>
                    <label htmlFor="twitter">Twitter</label>
                    <Field type="text" id={"twitter"} name={"social.twitter"} />
                    <ErrorMessage name={"social.twitter"} component={TextError} />
                </div>

                <div className={"form-control"}>
                    <label htmlFor="PrimaryPhoneNumber">Primary Phone Number</label>
                    <Field type="text" id={"PrimaryPhoneNumber"} name={"phoneNumbers[0]"} />
                    <ErrorMessage name={"phoneNumbers[0]"} component={TextError} />
                </div>


                <div className={"form-control"}>
                    <label htmlFor="SecondaryPhoneNumber">Secondary Phone Number</label>
                    <Field type="text" id={"SecondaryPhoneNumber"} name={"phoneNumbers[1]"} />
                    <ErrorMessage name={"phoneNumbers[1]"} component={TextError} />
                </div>



                <button type={"submit"}>Submit</button>
            </Form>
        </Formik>
    );
};

export default YouTubeForm;
