import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import React, {Component, Suspense} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
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
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path="/dialogs/*" element={
                                <DialogsContainer/>}
                            />
                            <Route path="/users" element={
                                <UsersContainer/>}
                            />
                            <Route path="/login" element={
                                <LoginPage/>}
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