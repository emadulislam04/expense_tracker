import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const NexExpense = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(' ');
    const {addTransactions} = useContext(GlobalContext);

    const handleSubmit= (e) =>{
      e.preventDefault()
      const trans = {
        id:Math.floor(Math.random()*1000),
        text,
        amount:+amount
      };
      setText('');
      setAmount(' ')
      addTransactions(trans);
    };
  return (
    <div>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        </div>
        <button class="btn">Add transaction</button>
      </form>
     
    </div>

  )
}
