import classes from '../assets/styles/Answers.module.css';
import Checkbox from './Checkbox';

const Answers = () => (
  <div className={classes.answers}>
    <Checkbox className={classes.answer} text="Test answer" />
  </div>
);

export default Answers;
