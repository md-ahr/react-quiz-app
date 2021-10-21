import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from '../assets/styles/Signup.module.css';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

const SignupForm = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: ''
  });

	const [loading, setLoading] = useState(false);

	const [error, setError] = useState('');

	const history = useHistory();

	const { signup } = useAuth();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (user.password !== user.confirmPassword) {
			return setError('Password does not match!');
		}
		try {
			setLoading(true);
			setError('');
			await signup(user.email, user.password, user.username);
			history.push('/');
		} catch (error) {
			setLoading(false);
			setError('User registration failed!');
			console.log(error);
		}
	};

  return (
    <Form className={`${classes.signup}`} onSubmit={handleSubmit}>
			{error && <div className="error">{error}</div>}
      <TextInput type="text" name="username" placeholder="Enter username" icon="person" onChange={handleInputs} required />
      <TextInput type="email" name="email" placeholder="Enter email" icon="alternate_email" onChange={handleInputs} required />
      <TextInput type="password" name="password" placeholder="Enter password" icon="lock" onChange={handleInputs} required />
      <TextInput type="password" name="confirmPassword" placeholder="Confirm password" icon="lock_clock" onChange={handleInputs} required />
      <Checkbox text="I agree to the Terms &amp; Conditions" name="agree" onChange={handleInputs} required />
      <Button disabled={loading} type="submit">
        <span>Submit now {loading ? '...' : '' }</span>
      </Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
