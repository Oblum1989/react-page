import { useState } from "react";
import "./styles.css";

const Transfer = ({ transfer }) => {
  const [userName, setUserName] = useState();
  const [amount, setAmount] = useState();

  const handleTransfer = (e)=>{
    e.preventDefault();
    transfer(userName, amount)
    setAmount("")
    setUserName("")
  }


  return (
    <div className="operation operation--transfer">
      <h2>Transfer money</h2>
      <form className="form form--transfer" onSubmit={handleTransfer}>
        <input
          type="text"
          className="form__input form__input--to"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="number"
          className="form__input form__input--amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="form__btn form__btn--transfer">&rarr;</button>
        <label className="form__label">Transfer to</label>
        <label className="form__label">Amount</label>
      </form>
    </div>
  );
};

export default Transfer;
