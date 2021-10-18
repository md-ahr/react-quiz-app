import classes from '../assets/styles/Form.module.css';

const Form = ({ children, className, ...rest }) => (
  <form className={`${className} ${classes.form}`} action="#" {...rest}>
    {children}
  </form>
);

export default Form;
