import * as Yup from 'yup'

const ProfileDataFormSchema = Yup.object().shape({
    fullName: Yup.string().required('Required')
});

export default ProfileDataFormSchema;