import React from "react";
import "./index.css";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import LoginForm from "./LoginForm";



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