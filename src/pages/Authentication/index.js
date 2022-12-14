import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import './styles.css'

const Authentication = () => {
  return (
    <div className='auth-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
