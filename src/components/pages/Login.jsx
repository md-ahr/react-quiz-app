import loginImage from '../../assets/images/login.svg';
import classes from '../../assets/styles/Login.module.css';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

const Signup = () => (
  <>
    <h1>Login to your account</h1>

    <div className="column">
      <Illustration image={loginImage} />

      <Form className={`${classes.login}`}>
        <TextInput type="email" placeholder="Enter email" icon="alternate_email" />

        <TextInput type="password" placeholder="Enter password" icon="lock" />

        <Button>
          <span>Submit now</span>
        </Button>

        <div className="info">
          Don&apos;t have an account? <a href="signup.html">Signup</a> instead.
        </div>
      </Form>
    </div>
  </>
);

export default Signup;
