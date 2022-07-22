import React from "react";
import {Field, ErrorMessage} from "formik";
import s from "./FormikControl.module.css"



// TODO fix TextError props: any type
const TextError = (props: any) => {
    return (
        <div className={s.error}>
            {props.children}
        </div>)
}

type InputPropsType = {
    label: string
    name: string
    type: string
    id?: string
    key?: string
}

const Input: React.FC<InputPropsType> = ({label, name, id, key, type}) => {
    return <div key={key}>
        <label htmlFor={name}>{label}</label>
        <Field id={id} name={name} placeholder={name} type={type}/>
        <ErrorMessage name={name} component={TextError}/>
    </div>
}

type FormikControlPropsType = { control: string } & InputPropsType;

const FormikControl: React.FC<FormikControlPropsType> = ({control, label, name, key, id, type}) => {
    switch (control) {
        case 'input':
            return <Input label={label} name={name} id={id} type={type} key={key} />
        case 'textarea':
        case 'select':
        case 'radio':
        case 'checkbox':
        case 'date':
        default:
            return null
    }
}

export default FormikControl;