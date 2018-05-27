/**
 * System Setup - User Roles Store - Getter Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/userRoles';

const { role, userRoles, userRolesList } = store.getters;

describe('System Setup - User Roles Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return role', () => {
            const result = role(state);
            assert.equal(result, state.role);
        });
        
        it('should return userRoles', () => {
            const result = userRoles(state);
            assert.equal(result, state.userRoles);
        });
    
        it('should return userRolesList', () => {
            const result = userRolesList(state);
            assert.equal(result, state.userRolesList);
        });
    });
});