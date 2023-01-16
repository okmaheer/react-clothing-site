import { signInWithGooglePopup ,createUserDocumentFromAuth} from "../../utlis/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user} = await signInWithGooglePopup();
    console.log(user)
   const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>signs in page</h1>
      <button onClick={logGoogleUser}>Sign with Google</button>
    </div>
  );
};

export default SignIn;
