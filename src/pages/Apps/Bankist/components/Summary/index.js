import "./styles.css";
const Summary = ({ account }) => {
  const { movements, interestRate } = account;

  const sumaryIn = movements
    .filter((movement) => movement > 0)
    .reduce((prev, curr) => prev + curr, 0);
  const sumaryOut = movements
    .filter((movement) => movement < 0)
    .reduce((prev, curr) => prev + curr, 0);
  const interest = movements
    .filter((movement) => movement > 0)
    .map((mov) => (mov * interestRate) / 100)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">{`${sumaryIn.toFixed(
        2
      )}$`}</p>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">{`${Math.abs(
        sumaryOut
      ).toFixed(2)}$`}</p>
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">{`${interest.toFixed(
        2
      )}$`}</p>
      <button className="btn--sort">&downarrow; SORT</button>
    </div>
  );
};

export default Summary;
