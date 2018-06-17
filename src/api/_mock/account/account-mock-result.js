/**
 * Account Mock Result
 * For Mock API Calls and Unit Tests
 */

export const CREATE_ACCOUNT = {};

export const GET_ACCOUNT = {};

export const UPDATE_ACCOUNT = {};

export const DELETE_ACCOUNT = {};

export const FIND_ACCOUNT_LIST = {
    total_rows: 10,
    data: [
        {
            _id: '1',
            type: 'Asset',
            name: 'OCBC Bank',
            description: 'Bank Account'
        },
        {
            _id: '2',
            type: 'Asset',
            name: 'DBS Bank',
            description: null
        },
        {
            _id: '3',
            type: 'Equity',
            name: 'Share Capital',
            description: null
        },
        {
            _id: '4',
            type: 'Liability',
            name: 'Lim Jun Hue',
            description: null
        },
        {
            _id: '5',
            type: 'Income',
            name: 'Dividend',
            description: null
        },
        {
            _id: '6',
            type: 'Expense',
            name: 'Commission',
            description: null
        },
        {
            _id: '7',
            type: 'Income',
            name: 'Investment Income',
            description: 'From stock sale'
        },
        {
            _id: '8',
            type: 'Liability',
            name: 'Lim Hui Boon',
            description: null
        },
        {
            _id: '9',
            type: 'Expense',
            name: 'Interest Expense',
            description: null
        },
        {
            _id: '10',
            type: 'Asset',
            name: 'Maybank KE',
            description: 'Brokerage Account'
        }
    ]
};