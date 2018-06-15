/**
 * Account Mock Hook
 */
import { ACCOUNT_TABLE } from '../..';
import {
    CREATE_ACCOUNT,
    GET_ACCOUNT,
    UPDATE_ACCOUNT,
    DELETE_ACCOUNT,
    FIND_ACCOUNT_LIST
} from './account-mock-result';

export const AccountMockHook = {
    before: {
        all(hook) {
            hook.table = ACCOUNT_TABLE;
        },
        create(hook) {
            hook.result = CREATE_ACCOUNT;
        },
        get(hook) {
            hook.result = GET_ACCOUNT;
        },
        update(hook) {
            hook.result = UPDATE_ACCOUNT;
        },
        remove(hook) {
            hook.result = DELETE_ACCOUNT;
        },
        find(hook) {
            hook.result = FIND_ACCOUNT_LIST;
        }
    }
};