import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIcecream, buyGame } from './reduxActions/Actions';

//Everithing in redux is converted to a prop in react component
function ActionComponent(props) {
    return (
        <>
            <h3>Menu</h3>
            <h2>Stock for cakes: {props.propCakeCount}</h2>
            <button aria-label='button-name' onClick={()=>props.propBuyCake()}>Buy Cake</button>

            <hr />
            <h2>Stock for icecreams: {props.propIcecreamCount}</h2>
            <button onClick={()=>props.propBuyIcecream()}>Buy Icecream</button>

            <hr />
            <h2>Stock for games: {props.propGameCount}</h2>
            <button onClick={()=>props.propBuyGame()}>Buy Game</button>
        </>
    );
}

const mapStateToProps = (state) => {

    return {
        propCakeCount: state.cakeStock,
        propIcecreamCount: state.icecreamStock,
        propGameCount: state.gameStock
    }
}

const mapDispatchToProps = (dispatch) => {

    return{
        propBuyCake:()=>dispatch(buyCake()),
        propBuyIcecream:()=>dispatch(buyIcecream()),
        propBuyGame:()=>dispatch(buyGame())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ActionComponent);
