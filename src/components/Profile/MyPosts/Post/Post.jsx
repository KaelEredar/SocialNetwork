import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshapka-youtube.ru%2Fwp-content%2Fuploads%2F2021%2F02%2Fprikolnaya-avatarka-dlya-devushek-768x768.jpg&f=1&nofb=1" />
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
