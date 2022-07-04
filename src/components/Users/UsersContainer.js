import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            if (pages.length < 10) {
                pages.push(i);
            }
        }

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    // withAuthRedirect,
    connect(mapStateToProps,  {
            follow,
            unfollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers: requestUsers
        }
    )
)(UsersContainer)