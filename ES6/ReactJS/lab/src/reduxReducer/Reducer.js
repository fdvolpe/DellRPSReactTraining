import { buyCake, buyIcecream } from "../reduxActions/Actions";
import { BUY_CAKE, BUY_GAME, BUY_ICECREAM } from "../reduxActions/ActionTypes";

//Create an initial state object

const initialState = {
    cakeStock: 10,
    icecreamStock: 50,
    gameStock: 1
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
        
        case BUY_GAME:
            return{
                ...prevState,
                gameStock: prevState.gameStock * 2
            };
            
           
        default:
            return {...prevState};
    }
}