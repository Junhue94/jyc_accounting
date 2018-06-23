import {
    countDecimals,
    number,
    price,
    money
} from 'src/filters/number';

describe('Filters - Number', () => {
    describe('countDecimals', () => {
        it('should return correct decimal places', () => {
            const actualResult = countDecimals(1.894);
            const expectedResult = 3;
            assert.equal(actualResult, expectedResult);
        });
    
        it('should return no decimal place if input is integer', () => {
            const actualResult = countDecimals(1);
            const expectedResult = 0;
            assert.equal(actualResult, expectedResult);
        });
    });
    
    describe('number', () => {
        it('should return correct format', () => {
            const actualResult = number(5700);
            const expectedResult = '5,700';
            assert.equal(actualResult, expectedResult);
        });
    });
    
    describe('money', () => {
        it('should return correct format', () => {
            const actualResult = money(8800.5040, 'S$');
            const expectedResult = 'S$ 8,800.50';
            assert.equal(actualResult, expectedResult);
        });
    });
    
    describe('price', () => {
        it('should round to two decimal places if input has less than three decimal places', () => {
            const actualResult = price(10.1, 'S$');
            const expectedResult = 'S$ 10.10';
            assert.equal(actualResult, expectedResult);
        });
    
        it('should maintain decimal places if input is at least three decimal places', () => {
            const actualResult = price(0.56767, 'S$');
            const expectedResult = 'S$ 0.56767';
            assert.equal(actualResult, expectedResult);
        });
    });
});