import { Link } from 'react-router-dom';
import loginImage from '../assets/images/login.svg';
import classes from '../assets/styles/Login.module.css';
import Button from '../components/Button';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';

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
          Don&apos;t have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </div>
  </>
);

export default Signup;
