import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIcecream } from './reduxActions/Actions';

//Everithing in redux is converted to a prop in react component
function ActionComponent(props) {
    return (
        <>
            <h2>Stock for cakes: {props.propCakeCount}</h2>
            <button onClick={()=>props.propBuyCake()}>Buy Cake</button>

            <hr />
            <h2>Stock for icecreams: {props.propIcecreamCount}</h2>
            <button onClick={()=>props.propBuyIcecream()}>Buy Icecream</button>
        </>
    );
}

const mapStateToProps = (state) => {

    return {
        propCakeCount: state.cakeStock,
        propIcecreamCount: state.icecreamStock
    }
}

const mapDispatchToProps = (dispatch) => {

    return{
        propBuyCake:()=>dispatch(buyCake()),
        propBuyIcecream:()=>dispatch(buyIcecream())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ActionComponent);
