import * as Yup from 'yup'

const loginFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(5,'Must be longer than 5 symbols').required('Required')
});

export default loginFormSchema;