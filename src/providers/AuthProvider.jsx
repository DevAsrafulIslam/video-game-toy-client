import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = async (email, password) => {
    try {
      setLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
    // setLoading(false);
  };

  const logOut = async () => {
    try {
      setLoading(true);
      const result = await signOut(auth);
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("current user in auth Provider", currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = { user, loading, createUser, signIn, logOut, googleSignIn };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
