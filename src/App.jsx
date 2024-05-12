import { useState } from 'react'
import './App.css'
import { Header } from './component/Header'
import { Balance } from './component/Balance'
import { IncomeExpense } from './component/IncomeExpense'
import { History } from './component/History'
import { NexExpense } from './component/NexExpense'
import { GlobalProvider } from './context/GlobalState'


function App() {

  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpense/>
        <History/>
        <NexExpense/>
      </div>
    </GlobalProvider>
  )
}

export default App
