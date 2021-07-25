import React from "react";
import { useFormik } from "formik";

const initialValues = {
    name: "",
    email: "",
    channel: "",
};
const onSubmit = values => {
    console.log("values", values);
};
const validate = values => {
    let errors = {};
    if (!values.name) {
        errors.name = "Required";
    }
    if (!values.email) {
        errors.email = "Required";
    } else if (
        !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            values.email
        )
    ) {
        errors.email = "Invalid email";
    }

    if (!values.channel) {
        errors.channel = "Required";
    }
    return errors;
};
const YouTubeForm = () => {
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    });
    console.log("errors", formik.errors);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className={"form-control"}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id={"name"}
                        name={"name"}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.errors.name && (
                        <div className={"error"}>{formik.errors.name}</div>
                    )}
                </div>
                <div className={"form-control"}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name={"email"}
                        id={"email"}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email && (
                        <div className={"error"}>{formik.errors.email}</div>
                    )}
                </div>
                <div className={"form-control"}>
                    <label htmlFor="channel">Channel</label>
                    <input
                        type="text"
                        id={"channel"}
                        name={"channel"}
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                    />
                    {formik.errors.channel && (
                        <div className={"error"}>{formik.errors.channel}</div>
                    )}
                </div>

                <button type={"submit"}>Submit</button>
            </form>
        </div>
    );
};

export default YouTubeForm;
