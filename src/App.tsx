import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { RootState } from "./app/store";
import TranscationCard from "./components/TransactionCard";
import { addBalance, deduceBalance } from "./features/balanceSlice";
import {addTransaction} from "./features/transactionSlice"
import "./App.css";

function App() {
  const [balanceInput, setBalanceInput] = useState(0);
  const dispatch = useDispatch();

  const balance = useSelector(
    (state: RootState) => state.balance
  );

  const transactions = useSelector((state: RootState) =>state.transactions.value );

  console.log(transactions)

  const handleAddReservations = () => {
    if (!balanceInput) return;
    dispatch(addBalance(balanceInput));
    setBalanceInput(0);
    dispatch(addTransaction({id: uuidv4(), balance: balanceInput.toString(), state: "ADD"}))
  };

  const handleRemoveReservations = () => {
    if (!balanceInput) return;
    dispatch(deduceBalance(balanceInput));
    setBalanceInput(0);
    dispatch(addTransaction({id: uuidv4(), balance: balanceInput.toString(), state: "REMOVE"}))
  };

  return (
    <div className="App">
      <h1>Expense Tracker - Basic</h1>
      <div className="container">
        <div className="balance-container">
          <div>
            <h5 className="balance-header">Balance : {balance || 0}</h5>
          </div>
          <div className="balance-input-container">
            <input
              type="number"
              value={balanceInput}
              onChange={(e) => {
                setBalanceInput(() => parseInt(e.target.value));
              }}
            />
            <br />
            <button onClick={handleAddReservations}>Add</button>
            <button onClick={handleRemoveReservations}>Remove</button>
          </div>
        </div>
        <div className="transaction-container">
          <div className="h5header">
            <h5>Transcations:</h5>
              {transactions.map((transaction) => (
              <TranscationCard {...transaction} key={transaction.id} />
            ))}  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
