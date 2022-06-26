import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are u?', likesCount: 12},
        {id: 2, message: 'What re u doing?', likesCount: 212},
    ]
};

test('length of posts should be incremented', () => {
    // test data
    const action = addPostActionCreator("It's a test post");
    // action
    const newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(3);
});

test('message of new posts should be correct', () => {
    // test data
    const action = addPostActionCreator("It's a test post");
    // action
    const newState = profileReducer(state, action);
    // expectation
    expect(newState.posts[2].message).toBe("It's a test post");
});

test('after deleting length of posts should be decremented', () => {
    // test data
    const action = deletePost(1);
    // action
    const newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(1);
});

test("after deleting length of posts shouldn't be decremented if id is incorrect", () => {
    // test data
    const action = deletePost(1000);
    // action
    const newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(2);
});


