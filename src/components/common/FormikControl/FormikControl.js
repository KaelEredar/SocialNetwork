import React from "react";
import {Field, ErrorMessage} from "formik";

const TextError = (props) => {
    return (
        <div className={'error'}>
            {props.children}
        </div>)
}

const Input = (props) => {
    const {label, name, ...rest} = props
    return <div className={'form-control'}>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest} placeholder={name}/>
        <ErrorMessage name={name} component={TextError}/>
    </div>
}

const TextArea = (props) => {
    const {label, name, ...rest} = props
    return <div className={'form-control'}>
        <label htmlFor={name}>{label}</label>
        <Field as={'textarea'} id={name} name={name} {...rest}/>
        <ErrorMessage name={name} component={TextError}/>
    </div>
}

const RadioButtons = (props) => {
    const {label, name, options, ...rest} = props;
    return <div className={'form-control'}>
        <label htmlFor={name}>{label}</label>
        <Field name={name} {...rest}>
            {
                ({field}) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type={'radio'}
                                    id={option.value}
                                    {...field}
                                    value={option.value}
                                    checked={field.value === option.value}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }
            }
        </Field>
        <ErrorMessage name={name} component={TextError}/>
    </div>
}

const FormikControl = (props) => {
    const {control, ...rest} = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <TextArea {...rest}/>
        case 'select':
        case 'radio':
            return <RadioButtons {...rest}/>
        case 'checkbox':
        case 'date':
        default:
            return null
    }
}

export default FormikControl;