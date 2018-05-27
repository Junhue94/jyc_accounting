/**
 * System Setup - User Roles Store - Action Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/userRoles';
import { actionHelper } from '../../../utils/actionHelper';
import UserRolesMockResult from 'src/api/_mock/systemSetup/user-roles-mock-result';

const {
    createUserRoles,
    getUserRoles,
    getUserRolesList,
    updateUserRoles,
    deleteUserRoles,
    setRole,
    clearState
} = store.actions;

const userRolesMockResult = new UserRolesMockResult();

describe('System Setup - User Roles Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('getUserRoles action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = userRolesMockResult.getUserRoles();
                actionHelper(getUserRoles, payload, state,  [
                    { type: 'SET_USER_ROLES', payload }
                ], done);
            });
        });
    
        describe('getUserRolesList action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = userRolesMockResult.getUserRolesList();
                actionHelper(getUserRolesList, payload, state,  [
                    { type: 'SET_USER_ROLES_LIST', payload }
                ], done);
            });
        });
        
        describe('updateUserRoles action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = userRolesMockResult.updateUserRoles();
                actionHelper(updateUserRoles, payload, state, [
                    { type: 'SET_USER_ROLES', payload }
                ], done);
            });
        });
        
        describe('deleteUserRoles action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { role: 'admin' };
                actionHelper(deleteUserRoles, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('setRole action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { role: 'admin' };
                actionHelper(setRole, payload, state, [
                    { type: 'SET_ROLE', payload }
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
    });
});