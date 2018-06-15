/**
 * Account Mock Result
 * For Mock API Calls and Unit Tests
 */

export const CREATE_ACCOUNT = {
    _id: '1'
};

export const GET_ACCOUNT = {
    _id: '1',
    name: 'Lim and Tan Family Clinic',
    contact: 'Ms Siew Ling Ling',
    category: 'Staff',
    handphone: '90892020',
    telephone: '67324932',
    fax: '67493993',
    email: 'lingling@ltfc.com',
    address: '#10-90 Mount Elizabeth Specialist Center',
    notes: 'Please follow up'
};

export const UPDATE_ACCOUNT = {
    _id: '33',
    _rev: '2131-43242-23',
    name: 'ENT Specialist Center',
    contact: 'Mr Lai',
    category: 'Doctor',
    handphone: '94322320',
    telephone: '68349030',
    fax: '68684940',
    email: 'ent@lent.com',
    address: '#10-90 Mount Novena Specialist Center',
    notes: ''
};

export const DELETE_ACCOUNT = {
    _id: '4'
};

export const FIND_ACCOUNT_LIST = {
    total_rows: 10,
    rows: [
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