import React from "react";

import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>Sign In Page</div>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </>
  );
}

export default SignIn;
