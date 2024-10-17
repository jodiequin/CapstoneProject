import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUser, login } from "../store/storeState";


// Function to validate user inputs
const validate = values => {
    const errors = {};

    // Checking first name has been entered and has max length of 15 chars
    if (!values.firstName) {
        errors.firstName = "Required";
    }
    else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less";
    }

    // Checking surname has been entered and has max length of 20 chars
    if (!values.surname) {
        errors.surname = "Required";
    }
    else if (values.surname.length > 20) {
        errors.surname = "Must be 20 characters or less";
    }

    // Checking username has been entered and has max length of 20 chars
    if (!values.username) {
        errors.username = "Required";
    }
    else if (values.username.length > 20) {
        errors.username = "Must be 20 characters or less";
    }

    // Checking email has been entered and is valid
    if (!values.email) {
        errors.email = "Required";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    // Checking both email entries match
    if (!values.email) {
        errors.checkEmail = "Required";
    }
    else if (values.email !== values.checkEmail) {
        errors.checkEmail = "Emails do not match";
    }

    // Checking if valid password has been entered
    if (!values.password) {
        errors.password = "Required";
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)) {
        errors.password = "Password must contain minimum 8 characters, at least 1 uppercase and lowercase letter, a number, and a special character";
    }

    // Checking both password entries match
    if (!values.checkPassword) {
        errors.checkPassword = "Required";
    }
    else if (values.password !== values.checkPassword) {
        errors.checkPassword = "Passwords do not match";
    }


    return errors;
};


// Creating register form using Formik
export default function RegisterPage() {

    const nav = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            surname: "",
            username: "",
            email: "",
            checkEmail: "",
            password: "",
            checkPassword: "",
        },

        validate,

        onSubmit: values => {

            dispatch(addUser({
                username: values.username,
                password: values.password
                }));
            dispatch(login(values.username))
            nav("/")

        },
    });

    return (

        <form 
          onSubmit={formik.handleSubmit} 
          className="login_page">

            <label htmlFor="firstName"> First Name </label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div> {formik.errors.firstName} </div> 
            ): null}

            <label htmlFor="surname"> Surname </label>
            <input
                id="surname"
                name="surname"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.surname}
            />
            {formik.touched.surname && formik.errors.surname ? (
              <div> {formik.errors.surname} </div> 
            ): null}

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

            <label htmlFor="email"> Email </label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div> {formik.errors.email} </div> 
            ): null}

            <label htmlFor="checkEmail"> Re-enter email </label>
            <input
                id="checkEmail"
                name="checkEmail"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.checkEmail}
            />
            {formik.touched.checkEmail && formik.errors.checkEmail ? (
              <div> {formik.errors.checkEmail} </div> 
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

            <label htmlFor="checkPassword"> Re-enter password </label>
            <input
                id="checkPassword"
                name="checkPassword"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.checkPassword}
            />
            {formik.touched.checkPassword && formik.errors.checkPassword ? (
              <div> {formik.errors.checkPassword} </div> 
            ): null}

            <button 
              className="home_page_buttons"
              type="submit"> 
              REGISTER 
            </button>

        </form>
    );
}