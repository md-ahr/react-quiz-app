import loginImage from '../assets/images/login.svg';
import Illustration from '../components/Illustration';
import LoginForm from '../components/LoginForm';

const Signup = () => (
  <>
    <h1>Login to your account</h1>
    <div className="column">
      <Illustration image={loginImage} />
      <LoginForm />
    </div>
  </>
);

export default Signup;
