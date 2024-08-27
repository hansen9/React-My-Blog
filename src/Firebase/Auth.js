import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithPopup,
  updatePassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./FireBase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { setDoc, doc } from "firebase/firestore";

export const doCreateUserWithEmailAndPassword = async (
  email,
  username,
  password
) => {
  const createdSuccessfully = await createUserWithEmailAndPassword(auth, email, password)
  const user = auth.currentUser;
  console.log(user)
  if (user) {
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      username: username,
    });
  }
  return createdSuccessfully;
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const res = await signInWithPopup(auth, provider);
  return res;
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
