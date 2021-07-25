import React from "react";
import { Form, Formik , Field,ErrorMessage} from "formik";
import * as yup from "yup";

const initialValues = {
    name: "",
    email: "",
    channel: "",
};
const onSubmit = values => {
    console.log("values", values);
};
// const validate = values => {
//     let errors = {};
//     if (!values.name) {
//         errors.name = "Required";
//     }
//     if (!values.email) {
//         errors.email = "Required";
//     } else if (
//         !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
//             values.email
//         )
//     ) {
//         errors.email = "Invalid email";
//     }
//
//     if (!values.channel) {
//         errors.channel = "Required";
//     }
//     return errors;
// };

const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("invalid email format").required("Required"),
    channel: yup.string().required("Required"),
});
const YouTubeForm = () => {
    // const formik = useFormik({
    //     initialValues,
    //     validationSchema,
    //     onSubmit,
    // });
    // console.log("errors", formik.errors, formik.touched);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className={"form-control"}>
                    <label htmlFor="name">Name</label>
                    <Field
                        type="text"
                        id={"name"}
                        name={"name"}
                        // onChange={formik.handleChange}
                        // value={formik.values.name}
                        // onBlur={formik.handleBlur}

                    />
                    <ErrorMessage name={"name"}/>
                    {/*{formik.errors.name && formik.touched.name && (*/}
                    {/*    <div className={"error"}>{formik.errors.name}</div>*/}
                    {/*)}*/}
                </div>
                <div className={"form-control"}>
                    <label htmlFor="email">Email</label>
                    <Field
                        type="email"
                        name={"email"}
                        id={"email"}
                        // onChange={formik.handleChange}
                        // value={formik.values.email}
                        // onBlur={formik.handleBlur}

                    />
                    {/*{formik.errors.email && formik.touched.email && (*/}
                    {/*    <div className={"error"}>{formik.errors.email}</div>*/}
                    {/*)}*/}
                    <ErrorMessage name={"email"}/>
                </div>
                <div className={"form-control"}>
                    <label htmlFor="channel">Channel</label>
                    <Field
                        type="text"
                        id={"channel"}
                        name={"channel"}
                        // onChange={formik.handleChange}
                        // value={formik.values.channel}
                        // onBlur={formik.handleBlur}

                    />
                    {/*{formik.errors.channel && formik.touched.channel && (*/}
                    {/*    <div className={"error"}>{formik.errors.channel}</div>*/}
                    {/*)}*/}
                    <ErrorMessage name={"channel"}/>
                </div>

                <button type={"submit"}>Submit</button>
            </Form>
        </Formik>
    );
};

export default YouTubeForm;
