import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from '../assets/styles/Login.module.css';
import Button from '../components/Button';
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import { useAuth } from '../contexts/AuthContext';

const LoginForm = () => {
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

	const [error, setError] = useState('');

	const history = useHistory();

	const { login } = useAuth();

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
		try {
			setLoading(true);
			setError('');
			await login(loginUser.email, loginUser.password);
			history.push('/');
		} catch (error) {
			setLoading(false);
			setError('User login failed!');
			console.log(error);
		}
    };

    return (
        <Form className={`${classes.login}`} onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            <TextInput type="email" name="email" placeholder="Enter email" icon="alternate_email" onChange={handleInputs} required />
            <TextInput type="password" name="password" placeholder="Enter password" icon="lock" onChange={handleInputs} required />
            <Button disabled={loading} type="submit">
                <span>Submit now {loading ? '...' : '' }</span>
            </Button>
            <div className="info">
                Don&apos;t have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    );
}

export default LoginForm;
