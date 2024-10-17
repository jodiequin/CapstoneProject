import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/storeState";


// Function to validate user inputs
const validate = (values) => {
    const errors = {};

    // Checking username has been entered
    if (!values.username) {
        errors.username = "Required";
    }
    // Checking username is registered
    else if (values.state.registeredUsernames.indexOf(values.username) == -1) {
        errors.username = "Username not found";
    }

    // Checking password has been entered
    if (!values.password) {
        errors.password = "Required";
    }
    else if (values.state.registeredPasswords[values.state.registeredUsernames.indexOf(values.username)] !== values.password) {
        errors.password = "Incorrect password";
    }
    

    return errors;
};

// Creating register form using Formik
export default function LoginPage() {

    const nav = useNavigate();
    const state = useSelector((state) => state.shop);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            state,
        },

        validate,

        onSubmit: values => {
        
            dispatch(login(values.username))
            nav("/");

        },
    });

    return (

        <form onSubmit={formik.handleSubmit} className="home_background">

            <label htmlFor="username"> Username </label>
            <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div> {formik.errors.username} </div> 
            ): null}

            <label htmlFor="password"> Password </label>
            <input
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div> {formik.errors.password} </div> 
            ): null}

            <button type="submit"> LOGIN </button>

        </form>
    );

}