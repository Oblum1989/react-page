import Balance from "./components/Balance";
import Close from "./components/Close";
import Loan from "./components/Loan";
import Movements from "./components/Movements";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";
import Transfer from "./components/Transfer";
import "./styles.css";
import { accounts as dataAccounts } from "./accounts";
import { useState } from "react";

const Bankist = () => {
  const [currentAccount, setCurrentAccount] = useState();
  const [accounts, setAccounts] = useState(dataAccounts);
  const [balance, setBalance] = useState()

  const handleLogin = (userName, userPin) => {
    const accountLogged = accounts.find((account) => userName === account.userName)
    if (accountLogged?.pin === Number(userPin)) {
      setCurrentAccount(accountLogged)
    }
  };

  const handleTransfer = (inputUserName, inputAmount) => {
    const amount = Number(inputAmount)
    const receiverAcc = accounts.find(
      (account) => inputUserName === account.userName
    );
    if (
      receiverAcc?.userName !== currentAccount.userName &&
      amount > 0 &&
      currentAccount.balance >= amount
    ) {
      // setCurrentAccount(...currentAccount, currentAccount.movements.push(-amount))
      // setAccounts(...accounts, currentAccount, receiverAcc)
    }
  };

  const calcPrintBalance = (account) => {
    account.balance = account.movements.reduce((prev, curr) => prev + curr, 0);
    setBalance(account.balance.toFixed(2))
  };

  return (
    <>
      <NavBar login={handleLogin} />
      {
        currentAccount ?
          <main className="app">
            <Balance account={currentAccount} />

            <Movements movements={currentAccount.movements} />

            <Summary account={currentAccount} />

            <Transfer transfer={handleTransfer}/>

            <Loan />

            <Close />

            <p className="logout-timer">
              You will be logged out in <span className="timer">05:00</span>
            </p>
          </main> : "hi"
      }
    </>
  );
};

export default Bankist;
