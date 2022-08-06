import Balance from "./components/Balance";
import Close from "./components/Close";
import Loan from "./components/Loan";
import Movements from "./components/Movements";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";
import Transfer from "./components/Transfer";
import "./styles.css";
import {accounts, account1} from "./accounts"

const Bankist = () => {
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  return (
    <>
      <NavBar />
      <main className="app">
        <Balance account={account1}/>

        <Movements movements={movements} />

        <Summary account={account1} />

        <Transfer />

        <Loan />

        <Close />

        <p className="logout-timer">
          You will be logged out in <span className="timer">05:00</span>
        </p>
      </main>
    </>
  );
};

export default Bankist;
