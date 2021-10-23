import classes from '../assets/styles/Video.module.css';

const Video = ({ title, id, noq }) => (
  <div className={classes.video}>
    <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
    <p>{title}</p>
    <div className={classes.qmeta}>
      <p>{noq} Questions</p>
      <p>Total Points : {noq * 5}</p>
    </div>
  </div>
);

export default Video;
