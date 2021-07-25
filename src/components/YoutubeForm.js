import React from 'react';
import {useFormik} from "formik";

const initialValues = {
    name: "",
    email: "",
    channel: ""
};
const onSubmit = (values) => {
    console.log('values', values);
};
const validate = values => {
    let errors = {};
    if (!values.name) {
        errors.name = "Required";
    }
    if (!values.email) {
        errors.email = "Required";
    } else if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(values.email).toLowerCase())) {
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
        onSubmit

    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id={"name"} name={"name"} onChange={formik.handleChange} value={formik.values.name}/>

                <label htmlFor="email">Email</label>
                <input type="email" name={"email"} id={"email"} onChange={formik.handleChange}
                       value={formik.values.email}/>

                <label htmlFor="channel">Channel</label>
                <input type="text" id={"channel"} name={"channel"} onChange={formik.handleChange}
                       value={formik.values.channel}/>

                <button type={"submit"}>Submit</button>
            </form>
        </div>
    );
};

export default YouTubeForm;
