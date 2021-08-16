import React, { useEffect } from "react";
import { auth, db, registerUserFb } from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AppNavigation from "./app.navigation";
import { setCurrentUser, signOut, logOut } from "../../redux/user/user.action";

import Register from "../../features/login-register/login-register.component";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        const { uid } = user;
        const userRef = await db.collection("users").doc(uid).get();
        const userData = userRef.data();
        if (userData) {
          console.log("got user in db, only dispatch");
          dispatch(setCurrentUser(userData));
        }
        if (!userData) {
          console.log("no user in db");
          if (user.displayName === null) {
            return;
          } else {
            console.log("no user, creating");
            // nema usera u db. vjerovatno login putem googla
            console.log(user);
            await registerUserFb(user, user.displayName);
            const newUserRef = await db.collection("users").doc(uid).get();
            const newUserData = newUserRef.data();
            console.log(userData);
            dispatch(setCurrentUser(newUserData));
          }
        }
      } else {
        console.log("no user");
        dispatch(signOut());
        dispatch(logOut());
      }
    });
  }, []);

  return <>{currentUser ? <AppNavigation /> : <Register />}</>;
};

export default Navigation;
