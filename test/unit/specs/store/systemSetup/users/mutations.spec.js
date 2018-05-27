/**
 * System Setup - Users Store - Mutation Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/users';
import UsersMockResult from 'src/api/_mock/systemSetup/users-mock-result';
import UserRolesMockResult from 'src/api/_mock/systemSetup/user-roles-mock-result';

const usersMockResult = new UsersMockResult();
const userRolesMockResult = new UserRolesMockResult();

const { CLEAR_ALL_STATE, SET_USER, SET_USERS_DETAILS, SET_USERS_LIST, SET_ROLE_LIST } = store.mutations;

describe('System Setup - Users Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('reset state using CLEAR_ALL_STATE', () => {
            state.user = 'admin';
            state.usersDetails = usersMockResult.getUsersDetails();
            state.usersList = usersMockResult.getUsersList();
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
        
        it('store user using SET_USER', () => {
            const user = 'doctor';
            const mutation = SET_USER(state, user);
            assert.equal(state.user, user);
        });
    
        it('store user details using SET_USERS_DETAILS', () => {
            const updatedUsers = usersMockResult.getUsersDetails();
            const mutation = SET_USERS_DETAILS(state, updatedUsers);
            assert.deepEqual(state.usersDetails, updatedUsers);
        });
    
        it('store user list using SET_USERS_LIST', () => {
            const updatedUsersList = usersMockResult.getUsersList();
            const mutation = SET_USERS_LIST(state, updatedUsersList);
            assert.deepEqual(state.usersList, updatedUsersList);
        });
    
        it('store user roles list using SET_ROLE_LIST', () => {
            const updatedUsersRolesList = userRolesMockResult.getUserRolesList();
            const mutation = SET_ROLE_LIST(state, updatedUsersRolesList);
            assert.deepEqual(state.roleList, updatedUsersRolesList);
        });
    });
});