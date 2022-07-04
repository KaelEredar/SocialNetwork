import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-png.png"
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files[0]) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.saveProfileData(formData)
        setEditMode(false);
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt={'ProfilePhoto'}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {editMode ?
                    <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> :
                    <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={props.profile} isOwner={props.isOwner}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>Skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}
export default ProfileInfo;