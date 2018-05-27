/**
 * Contact Store - Mutation Test
 */
import _ from 'lodash';
import store from 'src/store/modules/contact/contact';
import ContactMockResult from 'src/api/_mock/contact/contact-mock-result';

const contactMockResult = new ContactMockResult();

const { CLEAR_ALL_STATE, SET_CONTACT_ID, SET_CONTACT_DETAILS, SET_CONTACT_LIST } = store.mutations;

describe('Contact Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('reset the state using CLEAR_ALL_STATE', () => {
            state.contactId = '1';
            state.contactDetails = contactMockResult.getContact();
            state.contactList = contactMockResult.getContactList();
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
        
        it('store contact Id using SET_CONTACT_ID', () => {
            const id = '1';
            const mutation = SET_CONTACT_ID(state, id);
            assert.equal(state.contactId, id);
        });
        
        it('store contact details using SET_CONTACT_DETAILS', () => {
            const updatedContactDetails = contactMockResult.getContact();
            const mutation = SET_CONTACT_DETAILS(state, updatedContactDetails);
            assert.deepEqual(state.contactDetails, updatedContactDetails);
        });
    
        it('store contact list using SET_CONTACT_LIST', () => {
            const updatedContactList = contactMockResult.getContactList();
            const mutation = SET_CONTACT_LIST(state, updatedContactList);
            assert.deepEqual(state.contactList, updatedContactList);
        });
    });
});