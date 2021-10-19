import { Link } from 'react-router-dom';
import signupImage from '../assets/images/signup.svg';
import classes from '../assets/styles/Signup.module.css';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';

const Signup = () => (
  <>
    <h1>Create an account</h1>

    <div className="column">
      <Illustration image={signupImage} />

      <Form className={`${classes.signup}`}>
        <TextInput type="text" placeholder="Enter name" icon="person" />

        <TextInput type="email" placeholder="Enter email" icon="alternate_email" />

        <TextInput type="password" placeholder="Enter password" icon="lock" />

        <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />

        <Checkbox text="I agree to the Terms &amp; Conditions" />

        <Button>
          <span>Submit now</span>
        </Button>

        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </Form>
    </div>
  </>
);

export default Signup;
