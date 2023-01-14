import PropTypes from "prop-types";

import styles from './transactionHistory.module.css';

const TransactionHistory = ({items}) => {
  const elements = items.map(transaction => <tr key={transaction.id}>
    <td>{transaction.type}</td>
    <td>{transaction.amount}</td>
    <td>{transaction.currency}</td>
  </tr>);
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {elements}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.defaultProps = {
  transactions: []
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
  })),
}