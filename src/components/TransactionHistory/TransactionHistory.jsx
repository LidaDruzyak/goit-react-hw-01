import s from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={s.trHistory}>
      <thead>
        <tr className={s.trItem}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={s.tdItem}>{type}</td>
            <td className={s.tdItem}>{amount}</td>
            <td className={s.tdItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
