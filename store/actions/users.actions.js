import { auth, provider } from "../../firebase";
import { ADD_AUTH_ERROR } from "./error.actions";
import store from "..";

export const LOGIN = (email, password) => {
  return async (dispatch) => {
    let user;
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        user = userCredential.user;
      })
      .catch((error) => {
        store.dispatch(ADD_AUTH_ERROR(error.message));
      });
    dispatch({
      type: "LOGIN",
      payload: user,
    });
  };
};

export const SIGN_UP = (email, password, username) => {
  let user;
  return async (dispatch) => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        user = userCredential.user;
        await auth.currentUser
          .updateProfile({
            displayName: username,
          })
          .then((suc) => { })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        store.dispatch(ADD_AUTH_ERROR(error.message));
      });
    dispatch({
      type: "LOGIN",
      payload: user,
    });
  };
};

export const SIGN_UP_GOOGLE = () => {
  let user;
  return async (dispatch) => {
    await auth
      .signInWithPopup(provider)
      .then((userCredential) => {
        user = userCredential.user;
      })
      .catch((error) => {
        store.dispatch(ADD_AUTH_ERROR(error.message));
      });

    dispatch({
      type: "LOGIN",
      payload: user,
    });
  };
};

export const SIGN_OUT = () => {
  return (dispatch) => {
    auth.signOut();
    dispatch({ type: "SIGN_OUT" });
  };
};
