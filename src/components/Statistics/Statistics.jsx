import PropTypes from 'prop-types';

import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(item => (
    <li key={item.id} className={styles.item}>
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  ));
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>{elements}</ul>
    </section>
  );
};

export default Statistics;

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
