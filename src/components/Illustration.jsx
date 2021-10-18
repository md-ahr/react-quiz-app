import classes from '../assets/styles/Illustration.module.css';

const Illustration = ({ image }) => (
  <div className={classes.illustration}>
    <img src={image} alt="Signup" />
  </div>
);

export default Illustration;
