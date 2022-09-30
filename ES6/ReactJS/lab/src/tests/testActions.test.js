import { buyCake, buyIcecream } from "../reduxActions/Actions";
import {BUY_CAKE, BUY_ICECREAM} from "../reduxActions/ActionTypes";

test('Should return type as BUY_CAKE', () => {
    //Arrange
    var expectedResult = 'BUY_CAKE';
    var actualResult = buyCake().type;

    //Assert
    expect(expectedResult).toEqual(actualResult);
});

test('Should return type as BUY_ICECREAM', () => {
    //Arrange
    var expectedResult = 'BUY_ICECREAM';
    var actualResult = buyIcecream().type;

    //Assert
    expect(expectedResult).toEqual(actualResult);
});