/**
 * Date Picker
 */

import moment from 'moment';

class DatePicker {
    constructor() {
    
    }
    dateTimeFormat() {
        return {
            // Refer to https://momentjs.com/docs/#/parsing/string-format/
            format: 'DD MMM YYYY  hh:mm A'
        };
    }
    dateFormat() {
        return {
            // Refer to https://momentjs.com/docs/#/parsing/string-format/
            format: 'DD MMM YYYY'
        };
    }
    minDateDay() {
        return {
            format: 'DD MMM YYYY',
            minDate: moment().endOf('day')
        };
    }
}

export default DatePicker;
