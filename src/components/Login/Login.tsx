import React from "react";
import "./index.css";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import LoginForm, {InitialFormValuesType} from "./LoginForm";
import {AppStateType} from "../../redux/redux-store";
import {FormikHelpers} from "formik";


type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean,
            setStatus: (messages: Array<string>) => void, captcha: null | string) => void
}

type OwnPropsType ={
    captcha: null | string
    captchaUrl: null | string
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean,
            setStatus: (messages: Array<string>) => void, captcha: null | string) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const Login: React.FC<PropsType> = ({captcha, captchaUrl, isAuth, login}) => {
    const onSubmit = (values: InitialFormValuesType, onSubmitProps: FormikHelpers<InitialFormValuesType>) => {
        login(values.email, values.password, values.isRemembered, onSubmitProps.setStatus, captcha);
        onSubmitProps.setSubmitting(false);
    }
    if(isAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div className={"login-container"}>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>

    </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {login})(Login);