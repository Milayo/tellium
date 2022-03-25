import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import SignUpPage from "./pages/signup-page/signup.page";
import SignInPage from "./pages/signin-page/signin-page";
import ChatPage from "./pages/chatpage/chatpage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import { setCurrentUser } from "./redux/users/user.actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch()
  const user =  useSelector(state => state.user.currentUser)

  let unSubscribeFromAuth = null;

  useEffect(() => {
    unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }
        dispatch(setCurrentUser(userAuth))
    });    

    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  console.log(user)
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (user ? <Redirect to="/chat" /> : <HomePage />)}
      />
      <Route
        path="/signup"
        render={() => (user ? <Redirect to="/chat" /> : <SignUpPage />)}
      />
      <Route
        path="/signin"
        render={() => (user ? <Redirect to="/chat" /> : <SignInPage />)}
      />
      <Route path="/chat" component={ChatPage} />
     
    </Switch>
  );
};

export default App;
