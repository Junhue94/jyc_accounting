import _ from 'lodash';
import store from 'src/store/modules/stock';
import { actionHelper } from '../../utils/actionHelper';
import {
    mockQueryParam,
    getQueryData,
    getQueryParams
} from '../../utils/genericHelper';
import {
    CREATE_STOCK,
    GET_STOCK,
    UPDATE_STOCK,
    FIND_STOCK_LIST
} from 'src/api/_mock/stock/stock-mock-result';

const {
    createStock,
    getStockDetails,
    updateStockDetails,
    deleteStock,
    findStockList,
    setStockId,
    clearState
} = store.actions;

describe('Stock Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('createStock action', () => {
            it('should not dispatch mutations', (done) => {
                actionHelper(createStock, CREATE_STOCK, state, [], done);
            });
        });
        
        describe('getStockDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                actionHelper(getStockDetails, GET_STOCK, state, [
                    { type: 'SET_STOCK_DETAILS', payload: GET_STOCK }
                ], done);
            });
        });
        
        describe('updateStockDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                actionHelper(updateStockDetails, UPDATE_STOCK, state, [
                    { type: 'SET_STOCK_DETAILS', payload: UPDATE_STOCK }
                ], done);
            });
        });

        describe('deleteStock action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(deleteStock, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('findStockList action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = FIND_STOCK_LIST(mockQueryParam);
                actionHelper(findStockList, payload, state, [
                    { type: 'SET_STOCK_LIST', payload: getQueryData(payload) },
                    { type: 'SET_STOCK_LIST_PARAMS', payload: getQueryParams(payload) }
                ], done);
            });
        });

        describe('setStockId action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(setStockId, payload, state, [
                    { type: 'SET_STOCK_ID', payload }
                ], done);
            });
        });

        describe('clearState action', () => {
            it('should dispatch the correct mutations', (done) => {
                actionHelper(clearState, null, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
    });
});