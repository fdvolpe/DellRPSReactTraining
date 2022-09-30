import { buyCake, buyIcecream, buyGame } from "../reduxActions/Actions";
import { appReducer } from "../reduxReducer/Reducer";


//TEST DATA
//#1 INPUT: prevState=undefined, action=undefined
// OUTPUT:      cakeStock: 10,
//          icecreamStock: 50,
//          gameStock: 1

it('Should thrown an error for input (undefined, undefined)', () => {

    //Assert
    expect(() => appReducer(undefined, undefined)).toThrow();
});

it('Should return the initial state', () => {
    //Arrange
    var expectedResult = {
        cakeStock: 10,
        icecreamStock: 50,
        gameStock: 1
    };

    var input = {
        type: undefined
    }
    //Act
    var actualResult = appReducer(undefined, input)

    //Assert
    expect(expectedResult).toEqual(actualResult);
});

it('Should return cakeStock = 9 when passed with action buyCake()', () => {
    //Arrange
    var inputAction = buyCake;
    var expectedResult = {
        cakeStock: 9,
        icecreamStock: 50,
        gameStock: 1
    }

    //Act
    var actualResult = appReducer(undefined,inputAction());

    //Assert
    expect(actualResult).toEqual(expectedResult);
});

it('Should return icecreamStock = 49 when passed with action buyIcecream()', () => {
    //Arrange
    var inputAction = buyIcecream;
    var expectedResult = {
        cakeStock: 10,
        icecreamStock: 49,
        gameStock: 1
    }

    //Act
    var actualResult = appReducer(undefined,inputAction());

    //Assert
    expect(actualResult).toEqual(expectedResult);
});

it('Should return gameStock = 2 when passed with action buyGame()', () => {
    //Arrange
    var inputAction = buyGame;
    var expectedResult = {
        cakeStock: 10,
        icecreamStock: 50,
        gameStock: 2
    }

    //Act
    var actualResult = appReducer(undefined,inputAction());

    //Assert
    expect(actualResult).toEqual(expectedResult);
});
