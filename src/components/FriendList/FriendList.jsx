import PropTypes from 'prop-types';

import styles from './friendList.module.css';

import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({friends}) => {
  const elements = friends.map(friend => (
    <FriendListItem key={friend.id} {...friend} />
  ));
  return <ul className={styles.friendList}>{elements}</ul>;
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
  avatar:
    'https://www.pngitem.com/middle/hbomhxw_transparent-default-avatar-png-default-avatar-images-png/',
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
