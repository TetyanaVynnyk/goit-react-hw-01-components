import PropTypes from "prop-types"

import  styles from './friendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={styles.item}>
      <span className={styles.status}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.defaultProps = {
  avatar: "https://www.pngitem.com/middle/hbomhxw_transparent-default-avatar-png-default-avatar-images-png/",
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}