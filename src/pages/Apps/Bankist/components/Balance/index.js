import "./styles.css";
const Balance = ({account}) => {
  account.balance = account.movements.reduce((prev, curr) => prev + curr, 0);

  return (
    <div className="balance">
      <div>
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of <span className="date">05/03/2037</span>
        </p>
      </div>
      <p className="balance__value">{`${account.balance.toFixed(2)}$`}</p>
    </div>
  );
};

export default Balance;
