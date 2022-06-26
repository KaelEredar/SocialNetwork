import React from "react";
import "./index.css";
import {Form, Formik, Field, ErrorMessage} from "formik";
import loginFormSchema from "../FormValidations/LoginFormSchema";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{
                email: "",
                password: '',
                isRemembered: false
            }}
            validationSchema={loginFormSchema}
            onSubmit={props.onSubmit}
            validateOnChange={false}
        >
            {formik => {
                return (<Form>
                    {formik.status}
                    <div>
                        <Field type={'text'} name={'email'} placeholder={'email'}/>
                        <ErrorMessage name={'email'}/>
                    </div>
                    <div>
                        <Field type={'password'} name={'password'} placeholder={'password'}/>
                        <ErrorMessage name={'password'}/>
                    </div>
                    <div>
                        <Field type={'checkbox'} name={'isRemembered'} placeholder={'email'}/>
                        <label htmlFor={'isRemembered'}>remember me</label>
                    </div>
                    <button type={'submit'} disabled={!formik.isValid || formik.isSubmitting}>Log In</button>
                </Form>)
            }
            }
        </Formik>
    )
}


const Login = (props) => {
    const onSubmit = (values, onSubmitProps) => {
        props.login(values.email, values.password, values.isRemembered, onSubmitProps.setStatus);
        onSubmitProps.setSubmitting(false);
    }
    if(props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div className={"login-container"}>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);