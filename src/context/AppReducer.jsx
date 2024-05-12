

export default (state,action)=>{
    switch(action.type){
        case 'delete_transactions':
           return{
            ...state,
            transactions:state.transactions.filter(transaction => transaction.id !== action.payload)
           }
           case 'add_transations':
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }

        default:
        return state;
    }
}