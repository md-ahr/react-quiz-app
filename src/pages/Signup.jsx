import signupImage from '../assets/images/signup.svg';
import Illustration from '../components/Illustration';
import SignupForm from '../components/SignupForm';

const Signup = () => (
  <>
    <h1>Create an account</h1>

    <div className="column">
      <Illustration image={signupImage} />
      <SignupForm />
    </div>
  </>
);

export default Signup;
