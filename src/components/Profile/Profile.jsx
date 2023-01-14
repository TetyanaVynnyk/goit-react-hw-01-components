import PropTypes from "prop-types";

import styles from './profile.module.css';

const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src= {avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.defaultProps = {
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};