import { buyCake, buyIcecream } from "../reduxActions/Actions";
import { BUY_CAKE, BUY_ICECREAM } from "../reduxActions/ActionTypes";

//Create an initial state object

const initialState = {
    cakeStock: 10,
    icecreamStock: 50
}

export const appReducer = (prevState = initialState, action) => {

    switch (action.type) {
        case BUY_CAKE:
            return{
                ...prevState,
                cakeStock: prevState.cakeStock - 1
            };    
        

        case BUY_ICECREAM:
            return{
                ...prevState,
                icecreamStock: prevState.icecreamStock - 1
            };
            
           
        default:
            return {...prevState};
    }
}