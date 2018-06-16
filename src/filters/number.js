import accounting from 'accounting';

// accounting.js settings
accounting.settings = {
    currency: {
        symbol: '', // default currency
        format: { // controls output: %s = symbol, %v = value/number
            pos: '%s %v', // for positive values
            neg: '%s(%v)', // for negative values
            zero: '%s -' // for zero values
        },
        decimal: '.', // decimal point separator
        thousand: ',', // thousands separator
        precision: 2 // decimal places
    },
    number: {
        precision: 0, // default precision
        thousand: ',',
        decimal: '.'
    }
};

const countDecimals = (value) => {
    if(Math.floor(value) === value) {
        return 0;
    }
    return value.toString().split('.')[1].length || 0;
};

// formatted with separated thousands
export function formatNumber(number) {
    return accounting.formatNumber(number);
}

// formatted with separated thousands, two decimal places and currency
export function formatMoney(amount, currency) {
    return accounting.formatMoney(amount, currency);
}

export function formatPrice(price, currency) {
    const priceDecimalPlace = countDecimals(price || 0);
    if (priceDecimalPlace > 2) {
        return accounting.formatMoney(price, currency, priceDecimalPlace);
    }
    return accounting.formatMoney(price, currency);
}