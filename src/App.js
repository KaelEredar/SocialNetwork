import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import React, {Component, Suspense} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {

    catchAllUnhandedErrors = (promiseRejectionEvent) => {
        alert('Some error occurred');
        console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandedErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandedErrors);
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/profile/:userId" element={
                                <ProfileContainer/>}
                            />
                            <Route path="/" element={
                                <Navigate to='/profile'/>}
                            />
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path="/dialogs/*" element={
                                <DialogsContainer/>}
                            />
                            <Route path="/users" element={
                                <UsersContainer pageTitle={"Samurais"}/>}
                            />
                            <Route path="/login" element={
                                <LoginPage/>}
                            />
                            <Route path='*' element={
                                <div>404 NOT FOUND</div>}
                            />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SocialNetworkApp = (props) => {
    return <React.StrictMode>
        <HashRouter basename={process.env.PUBLIC}>
            <Provider store={store}>
                <AppContainer
                />
            </Provider>
        </HashRouter>
    </React.StrictMode>
}

export default SocialNetworkApp;