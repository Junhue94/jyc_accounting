import { fullDate } from 'src/filters/date';

describe('Filters - Date', () => {
    describe('fullDate', () => {
        it('should return correct date format if date is valid', () => {
            const validDate = new Date(2018, 11, 11);
            const result = fullDate(validDate);
            assert.equal(result, '11 Dec 18');
        });
    
        it('should return "-" if date is invalid', () => {
            const invalidDate = '2011-10-10T10:20:90';
            const result = fullDate(invalidDate);
            assert.equal(result, '-');
        });
    });
});