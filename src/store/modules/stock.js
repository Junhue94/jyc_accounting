/**
 * Stock Store
 */

import _ from 'lodash';
import StockService from '../../api/stock-service';
import { getPaginationDetails } from '../../utils/helper';

const stockService = new StockService();

const initialState = {
    stockId: null,
    stockDetails: {
        _id: null,
        type: null,
        entryDate: null,
        exitDate: null,
        name: null,
        sector: null,
        country: null,
        currency: null,
        priceBuy: null,
        priceSell: null,
        priceProfitTarget: null,
        priceStopLoss: null,
        quantityBuy: null,
        quantitySell: null,
        totalDividend: null,
        totalCapital: null,
        capitalReturn: null,
        createdAt: null,
        updatedAt: null,
        deleted: false
    },
    stockList: [],
    stockPagination: {
        offset: 50,
        totalRows: null,
        currentPage: 1,
        totalPage: null
    }
};


const state = _.cloneDeep(initialState);

const mutations = {
    'SET_STOCK_ID' (state, stockId) {
        state.stockId = stockId;
    },
    'SET_STOCK_DETAILS' (state, stockDetails) {
        state.stockDetails = { ...stockDetails };
    },
    'SET_STOCK_LIST' (state, stockList) {
        state.stockList = stockList;
    },
    'SET_STOCK_PAGINATION' (state, stockPagination) {
        state.stockPagination = { ...stockPagination };
    },
    'CLEAR_ALL_STATE' (state) {
        state.stockId = _.cloneDeep(initialState.stockId);
        state.stockDetails = _.cloneDeep(initialState.stockDetails);
        state.stockList = _.cloneDeep(initialState.stockList);
        state.stockPagination = _.cloneDeep(initialState.stockPagination);
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
        console.log('options', options);
        return stockService.findStockList(options)
            .then((res) => {
                commit('SET_STOCK_PAGINATION', getPaginationDetails(res));
                commit('SET_STOCK_LIST', res.data);
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
            .then(() => {
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
    },
    stockPagination: (state) => {
        return state.stockPagination;
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