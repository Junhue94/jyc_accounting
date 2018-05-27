/**
 * System Setup - Users Store - Getter Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/users';

const { user, usersDetails, usersList, roleList } = store.getters;

describe('System Setup - Users Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return user', () => {
            const result = user(state);
            assert.equal(result, state.user);
        });
        
        it('should return usersDetails', () => {
            const result = usersDetails(state);
            assert.equal(result, state.usersDetails);
        });
        
        it('should return usersList', () => {
            const result = usersList(state);
            assert.equal(result, state.usersList);
        });
    
        it('should return roleList', () => {
            const result = roleList(state);
            assert.equal(result, state.roleList);
        });
    });
});