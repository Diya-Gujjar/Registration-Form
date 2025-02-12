import React from "react";
import { useFormik } from "formik"
import '../App.css';
import { useNavigate } from "react-router-dom"; 
import { registerSchema } from "../schemas";

const initialValues = {
    name: '',
    email: '',
    contactno: '',
    password: '',
    confirmpswd: '',
};

const Registration = ( { setIsRegistered, setTableData } ) => {
    const navigate = useNavigate();
    const pswd = "123456";
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: initialValues, 
        validationSchema: registerSchema, //validating
        onSubmit: (values, action) => { 
            if (values.password === pswd) {
                action.resetForm();
                setTableData((tableData) => [...tableData, values]);
                setIsRegistered(true);
                navigate("/Home"); // Navigate to the Home page on success
            } else {
                alert("Passwords do not match!");
            } },
    });
    // Clear the form fields
    const handleClear = () => {
        resetForm();
    };
    return (
        <div>
            <h1>REGISTRATION FORM</h1>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="inputlbl">
                        <div><label htmlFor="name">Name</label></div>
                        <div><input
                            id="name"
                            name="name"
                            type="name"
                            placeholder="Enter your Name"
                            onChange={handleChange}
                            value={values.name}
                            onBlur={handleBlur}
                        /> </div>
                        {errors.name && touched.name ? (<p className="form-error">{errors.name}</p>) : null}
                    </div>

                    <div className="inputlbl">
                        <div><label htmlFor="email">Email Address</label></div>
                        <div><input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your Email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                        /></div>
                        {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>) : null}
                    </div>

                    <div className="inputlbl">
                        <div><label htmlFor="contactno">Contact No</label></div>
                        <div><input
                            id="contactno"
                            name="contactno"
                            type="contactno"
                            placeholder="Enter your Contact No"
                            onChange={handleChange}
                            value={values.contactno}
                            onBlur={handleBlur}
                        /></div>
                        {errors.contactno && touched.contactno ? (<p className="form-error">{errors.contactno}</p>) : null}
                    </div>

                    <div className="inputlbl">
                        <div><label htmlFor="password">Enter Password</label></div>
                        <div><input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter a Strong Password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                        /></div>
                        {errors.password && touched.password ? (<p className="form-error">{errors.password}</p>) : null}
                    </div>

                    <div className="inputlbl">
                        <div><label htmlFor="confirmpswd">Confirm Password</label></div>
                        <div><input
                            id="confirmpswd"
                            name="confirmpswd"
                            type="password"
                            placeholder="Confirm your password"
                            onChange={handleChange}
                            value={values.confirmpswd}
                            onBlur={handleBlur}
                        /></div>
                        {errors.confirmpswd && touched.confirmpswd ? (<p className="form-error">{errors.confirmpswd}</p>) : null}
                    </div>

                    <div className="btn-container"><button type="submit">Submit</button>
                        <button type="button" onClick={handleClear}>Clear Form</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Registration;