import classes from '../assets/styles/Button.module.css';

const Button = ({ className, children }) => (
  <div className={`${classes.button} ${className}`}>{children}</div>
);

export default Button;
