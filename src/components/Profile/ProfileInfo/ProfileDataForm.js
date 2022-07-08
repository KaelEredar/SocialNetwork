import FormikControl from "../../common/FormikControl/FormikControl";
import React from "react";
import {Field, Form, Formik} from "formik";
import ProfileDataFormSchema from "../../FormValidations/ProfileDataFormSchema";

const ProfileDataForm = ({profile, onSubmit, initialValues}) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ProfileDataFormSchema}
            onSubmit={onSubmit}
            validateOnChange={false}
        >
            {
                formik => {
                    return <Form>
                        {formik.status}
                        <button type={'submit'} disabled={!formik.isValid || formik.isSubmitting}>Save</button>
                        <FormikControl
                            control={'input'}
                            type={'fullName'}
                            label={'Full name: '}
                            name={'fullName'}
                        />
                        <div>
                            <label htmlFor={'lookingForAJob'}>Looking for a job: </label>
                            <Field type={'checkbox'} name={'lookingForAJob'} />
                        </div>
                            <FormikControl
                                control={'textarea'}
                                type={'lookingForAJobDescription'}
                                label={'Skills: '}
                                name={'lookingForAJobDescription'}
                            />
                        <FormikControl
                            control={'textarea'}
                            type={'aboutMe'}
                            label={'About me: '}
                            name={'aboutMe'}
                        />
                        <div>
                            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                            return (
                                <FormikControl
                                    control={'input'}
                                    type={'contacts.' + key}
                                    label={key + ': '}
                                    name={'contacts.' + key}
                                    key={key}
                                />
                            )
                        })}
                        </div>
                    </Form>
                }
            }
        </Formik>
    )
}

export default ProfileDataForm;