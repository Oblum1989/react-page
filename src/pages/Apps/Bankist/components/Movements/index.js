import "./styles.css";

const Movements = ({ movements }) => {
  return (
    <div className="movements">
      {
        movements.map((movement, index) => {
          const movType = movement > 0 ? "deposit" : "withdrawal"
          return(
            <div className="movements__row">
              <div className={`movements__type movements__type--${movType}`}>
                {`${index + 1} ${movType}`}
              </div>
              <div className="movements__date">3 days ago</div>
              <div className="movements__value">{movement + '$'}</div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Movements;