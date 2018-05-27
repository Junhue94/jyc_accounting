/**
 * Contact Store Test
 */
import _ from 'lodash';
import store from 'src/store/modules/contact/contact';
import { actionHelper } from '../../utils/actionHelper';
import ContactMockResult from 'src/api/_mock/contact/contact-mock-result';

const {
    createContact,
    getContactDetails,
    updateContactDetails,
    deleteContact,
    setContactId,
    getContactList,
    clearState
} = store.actions;

const contactMockResult = new ContactMockResult();

describe('Contact Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('getContactDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = contactMockResult.getContact();
                actionHelper(getContactDetails, payload, state, [
                    { type: 'SET_CONTACT_DETAILS', payload }
                ], done);
            });
        });
        
        describe('updateContactDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = contactMockResult.updateContact();
                actionHelper(updateContactDetails, payload, state, [
                    { type: 'SET_CONTACT_DETAILS', payload }
                ], done);
            });
        });
        
        describe('deleteContact action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(deleteContact, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('setContactId action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(setContactId, payload, state, [
                    { type: 'SET_CONTACT_ID', payload }
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
    
        describe('getContactList action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = contactMockResult.getContactList();
                actionHelper(getContactList, payload, state, [
                    { type: 'SET_CONTACT_LIST', payload }
                ], done);
            });
        });
    });
});