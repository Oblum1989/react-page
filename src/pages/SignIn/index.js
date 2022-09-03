import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () =>{
    const response = await signInWithGooglePopup()
    console.log(response)
  }
  return(
    <div>
      <h1>Este es el SingIn</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
