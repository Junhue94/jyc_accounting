/**
 * Contact Store - Getter Test
 */
import _ from 'lodash';
import store from 'src/store/modules/contact/contact';

const { contactId, contactDetails, contactList } = store.getters;

describe('Contact Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return contactId', () => {
            const result = contactId(state);
            assert.equal(result, state.contactId);
        });
        
        it('contactDetails', () => {
            const result = contactDetails(state);
            assert.equal(result, state.contactDetails);
        });
    
        it('contactList', () => {
            const result = contactList(state);
            assert.equal(result, state.contactList);
        });
    });
});