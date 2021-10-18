import thumbnail from '../assets/images/3.jpg';
import classes from '../assets/styles/Video.module.css';

const Video = () => (
  <a href="quiz.html">
    <div className={classes.video}>
      <img src={thumbnail} alt="thumbnail" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      <div className={classes.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  </a>
);

export default Video;
