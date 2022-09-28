import { BUY_CAKE, BUY_ICECREAM } from "./ActionTypes";

export const buyCake = () => {
    return {
        type: BUY_CAKE,
        variety: ['creamy','dry','cupcakes']
    }
}

export const buyIcecream = () => {
    return{
        type: BUY_ICECREAM
    }
}