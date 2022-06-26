import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if(!props.profile)
    {
        return <Preloader />
    }

  return(
      <div>
      {/*<div>*/}
      {/*    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jtzLV8nbTiaPVkbonKgPJAHaDk%26pid%3DApi&f=1" />*/}
      {/*</div>*/}
    <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>
      </div>
  );
}
export default ProfileInfo;