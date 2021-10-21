import classes from '../assets/styles/Button.module.css';

const Button = ({ className, children, ...rest }) => (
  <button className={`${classes.button} ${className}`} {...rest}>
    {children}
  </button>
);

export default Button;
