import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const initialValues = {
    name: "",
    email: "",
    channel: "",
    description: "",
    address: "",
};
const onSubmit = values => {
    console.log("values", values);
};

const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("invalid email format").required("Required"),
    channel: yup.string().required("Required"),
    description: yup.string().optional(),
    address:yup.string().required("Required")
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
                    <ErrorMessage name={"name"} />
                </div>
                <div className={"form-control"}>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name={"email"} id={"email"} />
                    <ErrorMessage name={"email"} />
                </div>
                <div className={"form-control"}>
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id={"channel"} name={"channel"} />
                    <ErrorMessage name={"channel"} />
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
                    <ErrorMessage name={"description"} />
                </div>
                <div className={"form-control"}>
                    <label htmlFor="address">Address</label>
                    <Field name={"address"}>
                        {props => {
                            const { field, from, meta } = props;
                            console.log(props);
                            return (
                                <div>
                                    <input
                                        type="text"
                                        id={"address"}
                                        {...field}
                                    />
                                    {meta.touched && meta.error && <div>{meta.error}</div>}
                                </div>
                            );
                        }}
                    </Field>
                    <ErrorMessage name={"description"} />
                </div>

                <button type={"submit"}>Submit</button>
            </Form>
        </Formik>
    );
};

export default YouTubeForm;
