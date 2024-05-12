import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Item = ({data}) => {
    const sign = data.amount < 0 ? '-' : '+';
    const {deleteTransactions} = useContext(GlobalContext)
  return (
    <div>
        <li className={data.amount<0 ? "minus":"plus"}>
              {data.text} <span>{sign}${Math.abs(data.amount)}</span><button class="delete-btn" onClick={()=>deleteTransactions(data.id)}>x</button>
            </li>
    </div>
  )
}
