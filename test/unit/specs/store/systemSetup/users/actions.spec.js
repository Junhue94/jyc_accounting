/**
 * System Setup - Users Store - Action Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/users';
import { actionHelper } from '../../../utils/actionHelper';
import UsersMockResult from 'src/api/_mock/systemSetup/users-mock-result';
import UserRolesMockResult from 'src/api/_mock/systemSetup/user-roles-mock-result';

const {
    createUsers,
    getUsersDetails,
    getUsersList,
    updateUsersDetails,
    deleteUsers,
    setUser,
    findRoleList,
    clearState
} = store.actions;

const usersMockResult = new UsersMockResult();
const userRolesMockResult = new UserRolesMockResult();

describe('System Setup - Users Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('getUsersDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = usersMockResult.getUsersDetails();
                actionHelper(getUsersDetails, payload, state,  [
                    { type: 'SET_USERS_DETAILS', payload }
                ], done);
            });
        });
    
        describe('getUsersList action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = usersMockResult.getUsersList();
                actionHelper(getUsersList, payload, state,  [
                    { type: 'SET_USERS_LIST', payload }
                ], done);
            });
        });
        
        describe('updateUsersDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = usersMockResult.updateUsersDetails();
                actionHelper(updateUsersDetails, payload, state, [
                    { type: 'SET_USERS_DETAILS', payload }
                ], done);
            });
        });
        
        describe('deleteUsers action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { user: 'doctor' };
                actionHelper(deleteUsers, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('setUser action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { user: 'doctor' };
                actionHelper(setUser, payload, state, [
                    { type: 'SET_USER', payload }
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
    
        describe('findRoleList action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { queryView: 'view' };
                actionHelper(findRoleList, payload, state,  [
                    { type: 'SET_ROLE_LIST', payload }
                ], done);
            });
        });
    });
});