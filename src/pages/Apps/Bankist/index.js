import Balance from "./components/Balance";
import Close from "./components/Close";
import Loan from "./components/Loan";
import Movements from "./components/Movements";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";
import Transfer from "./components/Transfer";
import "./styles.css"

const Bankist = () => {
  return (
    <>
      <NavBar />
      <main className="app">
        <Balance />

        <Movements />

        <Summary />

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
