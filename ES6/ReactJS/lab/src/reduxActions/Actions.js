import { BUY_CAKE, BUY_GAME, BUY_ICECREAM } from "./ActionTypes";

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

export const buyGame = () => {
    return{
        type: BUY_GAME
        }
}