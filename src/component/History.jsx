import React, { useContext, } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Item } from './Item';

export const History = () => {
  const {transactions}  = useContext(GlobalContext);
  

  return (
    <div>
      <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map(data => 
               <Item data={data} key={data.id}/>
        )}
         
      </ul>
    </div>
  )
}
