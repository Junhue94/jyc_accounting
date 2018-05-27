/**
 * Contact Store
 */

import _ from 'lodash';
import ContactService from '../../../api/contact/contact-service';
import { DOCTYPE_CONTACTS } from '../../../api/index';

const contactService = new ContactService();

const initialState = {
    contactId: null,
    contactDetails: {
        type: DOCTYPE_CONTACTS,
        name: null,
        contact: null,
        category: null,
        handphone: null,
        telephone: null,
        fax: null,
        email: null,
        address: null,
        notes: null
    },
    contactList: []
};


const state = _.cloneDeep(initialState);

const mutations = {
    'SET_CONTACT_ID' (state, contactId) {
        state.contactId = contactId;
    },
    'SET_CONTACT_DETAILS' (state, contactDetails) {
        state.contactDetails = Object.assign({}, state.contactDetails, contactDetails);
    },
    'SET_CONTACT_LIST' (state, contactList) {
        state.contactList = contactList;
    },
    'CLEAR_ALL_STATE' (state) {
        state.contactId = _.cloneDeep(initialState.contactId);
        state.contactDetails = _.cloneDeep(initialState.contactDetails);
        state.contactList = _.cloneDeep(initialState.contactList);
    }
};

const actions = {
    createContact({ commit }, contactDetails) {
        return contactService.createContact(contactDetails);
    },
    getContactDetails({ commit }, contactId) {
        return contactService.getContactDetails(contactId)
            .then((res) => {
                commit('SET_CONTACT_DETAILS', res);
            });
    },
    getContactList({ commit }, view) {
        return contactService.getContactList(view)
            .then((res) => {
                commit('SET_CONTACT_LIST', res.rows);
                return res;
            });
    },
    updateContactDetails({ commit }, contactDetails) {
        return contactService.updateContactDetails(contactDetails)
            .then((res) => {
                commit('SET_CONTACT_DETAILS', res);
            });
    },
    deleteContact({ commit }, contactId) {
        return contactService.deleteContact(contactId)
            .then((res) => {
                commit('CLEAR_ALL_STATE');
            });
    },
    setContactId({ commit }, contactId) {
        commit('SET_CONTACT_ID', contactId);
    },
    clearState({ commit }) {
        commit('CLEAR_ALL_STATE');
    }
};

const getters = {
    contactId(state) {
        return state.contactId;
    },
    contactDetails(state) {
        return state.contactDetails;
    },
    contactList: (state) => {
        return state.contactList;
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