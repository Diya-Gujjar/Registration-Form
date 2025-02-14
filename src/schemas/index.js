import * as Yup from "yup"

export const registerSchema = Yup.object ({
    name: Yup.string().min(3).max(25).matches(/^[A-Za-z]+([ ]?[A-Za-z]+)*$/,"Name should be alphabet !!").required("** Please Enter Name !!"),
    email: Yup.string().email().required("** Please Enter Email !!"),
    contactno: Yup.string().matches(/^[0-9]{10}$/, "Contact number must be a 10-digit number !!").required("** Please Enter Contact Number !!"),
    password: Yup.string().min(6).required("** Please Enter Password !!"),
    confirmpswd: Yup.string().required("** Please Confirm Your Password !!").oneOf([Yup.ref('password'),null], "Password must Match!!"),
})