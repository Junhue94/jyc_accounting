/**
 * Date Picker
 */

import moment from 'moment';

export const dateTimeFormat = () => {
    return {
        // Refer to https://momentjs.com/docs/#/parsing/string-format/
        format: 'DD MMM YYYY  hh:mm A'
    };
};

export const dateFormat = () => {
    return {
        // Refer to https://momentjs.com/docs/#/parsing/string-format/
        format: 'DD MMM YYYY'
    };
};

export const minDateDay = () => {
    return {
        format: 'DD MMM YYYY',
        minDate: moment().endOf('day')
    };
};
