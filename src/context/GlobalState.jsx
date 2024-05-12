
import react ,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer';
// initial state
export const initialState = {
    transactions :[]
}


// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);
    // action 
    function deleteTransactions (id){
        dispatch({
            type:"delete_transactions",
            payload:id
        });

    }
    function addTransactions (id){
        dispatch({
            type:"add_transations",
            payload:id
        });

    }
    return(<GlobalContext.Provider value={{transactions:state.transactions,deleteTransactions,addTransactions}}>
        {children}
    </GlobalContext.Provider>

    );

}

