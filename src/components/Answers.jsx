import { Fragment } from 'react';
import classes from '../assets/styles/Answers.module.css';
import Checkbox from './Checkbox';

const Answers = ({ options = [], handleChange, input }) => (
  <div className={classes.answers}>
    {options.map((option, index) => (
      <Fragment key={index}>
        {input ? (
          <Checkbox key={index} className={classes.answer} text={option.title} value={index} checked={option.checked} onChange={(e) => handleChange(e, index)} />
        ) : (
          <Checkbox key={index} className={`${classes.answer} ${option.correct ? classes.correct : option.checked ? classes.wrong : null}`} text={option.title} defaultChecked={option.checked} disabled />
        )}
      </Fragment>
    ))}
  </div>
);

export default Answers;
