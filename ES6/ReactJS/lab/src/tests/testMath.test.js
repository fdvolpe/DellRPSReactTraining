function sum(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function multiplicate(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

//testing sum
it('Should add 10, 20 to 30', () => {
    //Arrange
    let n1 = 10;
    let n2 = 20;
    let expected = 30;

    //Act
    let actual = sum(n1, n2);

    //Assert
    expect(actual).toEqual(expected)
})

it('Should substract 10, 20 to -10', () => {
    //Arrange
    let n1 = 10;
    let n2 = 20;
    let expected = -10;

    //Act
    let actual = difference(n1, n2);

    //Assert
    expect(actual).toEqual(expected)
})

it('Should multiplicate 100, 5 to 500', () => {
    //Arrange
    let n1 = 100;
    let n2 = 5;
    let expected = 500;

    //Act
    let actual = multiplicate(n1, n2);

    //Assert
    expect(actual).toEqual(expected)
})

it('Should divide 100, 5 to 20', () => {
    //Arrange
    let n1 = 100;
    let n2 = 5;
    let expected = 20;

    //Act
    let actual = division(n1, n2);

    //Assert
    expect(actual).toEqual(expected)
})

it('100 should be less than 200', () => {
    //Arrange
    let n1 = 100;
    let n2 = 200;
     
    //Assert
    expect(n1).toBeLessThan(n2)
})