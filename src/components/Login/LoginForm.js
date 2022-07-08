import loginFormSchema from "../FormValidations/LoginFormSchema";
import {Field, Form, Formik} from "formik";
import FormikControl from "../common/FormikControl/FormikControl";
import React from "react";

const LoginForm = ({onSubmit, captchaUrl}) => {
    const initialValues = {
        email: '',
        password: '',
        isRemembered: false,
        captcha: ''
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginFormSchema}
            onSubmit={onSubmit}
            validateOnChange={false}
        >
            {
                formik => {
                    return <Form>
                        {formik.status}
                        {captchaUrl && <img src={captchaUrl} alt={'Captcha'}/>}
                        {captchaUrl &&
                        <FormikControl
                            control={'input'}
                            type={'captcha'}
                            label={'Symbols from image: '}
                            name={'captcha'}
                        />}
                        <FormikControl
                            control={'input'}
                            type={'email'}
                            label={'Email: '}
                            name={'email'}
                        />
                        <FormikControl
                            control={'input'}
                            type={'password'}
                            label={'Password: '}
                            name={'password'}
                        />
                        <div>
                            <Field type={'checkbox'} name={'isRemembered'}/>
                            <label htmlFor={'isRemembered'}>remember me</label>
                        </div>
                        <button type={'submit'} disabled={!formik.isValid || formik.isSubmitting}>Log In</button>
                    </Form>
                }
            }
        </Formik>
    )
}
export default LoginForm;