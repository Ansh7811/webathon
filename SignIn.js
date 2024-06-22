
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
const auth = getAuth();
signInWithCustomToken(auth, token)
  .then((userCredential) => {
    
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });