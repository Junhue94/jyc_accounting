import moment from 'moment';

export const fullDate = (date) => {
    const isValidDate = moment(date).isValid();
    if (isValidDate) {
        return moment(date).format('DD MMM YY');
    }
    return '-';
};
