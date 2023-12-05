import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="w-3/4 mx-auto divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn mb-4 btn-circle btn-outline"
        >
          G
        </button>
        <button className="btn mx-2 mb-4 btn-circle btn-outline">F</button>
        <button className="btn mb-4 btn-circle btn-outline">T</button>
      </div>
    </div>
  );
};

export default SocialLogin;
