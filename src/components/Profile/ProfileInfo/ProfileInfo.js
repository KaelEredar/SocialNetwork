import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-png.png"

const ProfileInfo = (props) => {

    if(!props.profile)
    {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
         if(e.target.files[0]){
             props.savePhoto(e.target.files[0])
         }
    }

  return(
      <div>
    <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt={'ProfilePhoto'} />
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>
      </div>
  );
}
export default ProfileInfo;