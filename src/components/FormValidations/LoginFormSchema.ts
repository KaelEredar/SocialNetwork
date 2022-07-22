import * as Yup from 'yup'

const loginFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
});

export default loginFormSchema;