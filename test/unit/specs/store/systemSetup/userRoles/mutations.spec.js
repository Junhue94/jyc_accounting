/**
 * System Setup - User Roles Store - Mutation Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/userRoles';
import UserRolesMockResult from 'src/api/_mock/systemSetup/user-roles-mock-result';

const userRolesMockResult = new UserRolesMockResult();

const { CLEAR_ALL_STATE, SET_ROLE, SET_USER_ROLES, SET_USER_ROLES_LIST } = store.mutations;

describe('System Setup - User Roles Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('reset state using CLEAR_ALL_STATE', () => {
            state.role = 'admin';
            state.userRoles = userRolesMockResult.getUserRoles();
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
        
        it('store role using SET_ROLE', () => {
            const role = 'admin';
            const mutation = SET_ROLE(state, role);
            assert.equal(state.role, role);
        });
        
        it('store user roles using SET_USER_ROLES', () => {
            const userRoles = userRolesMockResult.getUserRoles();
            const mutation = SET_USER_ROLES(state, userRoles);
            assert.deepEqual(state.userRoles, userRoles);
        });
        
        it('store user roles list using SET_USER_ROLES_LIST', () => {
            const userRolesList = userRolesMockResult.getUserRolesList();
            const mutation = SET_USER_ROLES_LIST(state, userRolesList);
            assert.deepEqual(state.userRolesList, userRolesList);
        });
    });
});