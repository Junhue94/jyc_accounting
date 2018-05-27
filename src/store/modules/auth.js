
import _ from 'lodash';
import AuthService from '../../api/auth-service';

const authService = new AuthService();

const initialState = {
    credentials: {
        serverkey: null,
        serverpass: null,
        database: null,
        username: null,
        password: null,
        accessToken: null
    },
    invalidLogin: false
};

const state = _.cloneDeep(initialState);

const mutations = {
    'CLEAR_ALL_STATE' (state) {
        state.credentials = _.cloneDeep(initialState.credentials);
        state.invalidLogin = _.cloneDeep(initialState.invalidLogin);
    },
    'CLEAR_INVALID_LOGIN' (state) {
        state.invalidLogin = _.cloneDeep(initialState.invalidLogin);
    },
    'SET_INVALID_LOGIN' (state) {
        state.invalidLogin = true;
    }
};

const actions = {
    login({ commit }, credentials) {
        commit('CLEAR_INVALID_LOGIN');
        return authService.login(credentials)
            .then((res) => {
                // Store 'credentials' to localStorage
                localStorage.setItem('credentials', JSON.stringify(res));
                commit('CLEAR_ALL_STATE');
            });
    },
    invalidLogin({ commit }) {
        commit('SET_INVALID_LOGIN');
    }
};

const getters = {
    credentials: (state) => {
        return state.credentials;
    },
    invalidLogin: (state) => {
        return state.invalidLogin;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};