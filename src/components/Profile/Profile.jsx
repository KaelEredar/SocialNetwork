import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
  return (
    <div>
        <ProfileInfo
            savePhoto={props.savePhoto}
            isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            saveProfileData={props.saveProfileData}
        />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
