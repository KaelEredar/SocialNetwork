import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import * as PropTypes from "prop-types";

const MyPosts = React.memo(props => {
    const {updateNewPostText, addPost, posts, newPostText} = props;

    const postsElements = posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef();

    const onAddPost = () => {
        addPost(newPostText);
    }
    const onPostChange = () => {
        const text = newPostElement.current.value;
        updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                        <textarea
                            onChange={onPostChange}
                            ref={newPostElement}
                            value={newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

MyPosts.propTypes = {
    updateNewPostText: PropTypes.any,
    addPost: PropTypes.any,
    posts: PropTypes.any,
    newPostText: PropTypes.any
}

export default MyPosts;
