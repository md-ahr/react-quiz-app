import { Link } from 'react-router-dom';
import thumbnail from '../assets/images/3.jpg';
import classes from '../assets/styles/Video.module.css';

const Video = () => (
  <Link to="/quiz">
    <div className={classes.video}>
      <img src={thumbnail} alt="thumbnail" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      <div className={classes.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  </Link>
);

export default Video;
