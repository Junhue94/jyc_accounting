/**
 * Stock Store
 */

import _ from 'lodash';
import StockService from '../../api/stock-service';

const stockService = new StockService();

const initialState = {
    stockId: null,
    stockDetails: {},
    stockList: []
};


const state = _.cloneDeep(initialState);

const mutations = {
    'SET_STOCK_ID' (state, stockId) {
        state.stockId = stockId;
    },
    'SET_STOCK_DETAILS' (state, stockDetails) {
        state.stockDetails = Object.assign({}, state.stockDetails, stockDetails);
    },
    'SET_STOCK_LIST' (state, stockList) {
        state.stockList = stockList;
    },
    'CLEAR_ALL_STATE' (state) {
        state.stockId = _.cloneDeep(initialState.stockId);
        state.stockDetails = _.cloneDeep(initialState.stockDetails);
        state.stockList = _.cloneDeep(initialState.stockList);
    }
};

const actions = {
    createStock({ commit }, stockDetails) {
        return stockService.createStock(stockDetails);
    },
    getStockDetails({ commit }, stockId) {
        return stockService.getStockDetails(stockId)
            .then((res) => {
                commit('SET_STOCK_DETAILS', res);
            });
    },
    findStockList({ commit }, options) {
        return stockService.findStockList(options)
            .then((res) => {
                commit('SET_STOCK_LIST', res.rows);
                return res;
            });
    },
    updateStockDetails({ commit }, stockDetails) {
        return stockService.updateStockDetails(stockDetails)
            .then((res) => {
                commit('SET_STOCK_DETAILS', res);
            });
    },
    deleteStock({ commit }, stockId) {
        return stockService.deleteStock(stockId)
            .then((res) => {
                commit('CLEAR_ALL_STATE');
            });
    },
    setStockId({ commit }, stockId) {
        commit('SET_STOCK_ID', stockId);
    },
    clearState({ commit }) {
        commit('CLEAR_ALL_STATE');
    }
};

const getters = {
    stockId(state) {
        return state.stockId;
    },
    stockDetails(state) {
        return state.stockDetails;
    },
    stockList: (state) => {
        return state.stockList;
    }
};

export default {
    namespaced: true,
    initialState,
    state,
    mutations,
    actions,
    getters
};