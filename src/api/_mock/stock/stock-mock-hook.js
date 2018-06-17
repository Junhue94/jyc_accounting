/**
 * Stock Mock Hook
 */
import { STOCK_TABLE } from '../..';
import {
    CREATE_STOCK,
    GET_STOCK,
    UPDATE_STOCK,
    DELETE_STOCK,
    FIND_STOCK_LIST
} from './stock-mock-result';

export const StockMockHook = {
    before: {
        all(hook) {
            hook.table = STOCK_TABLE;
        },
        create(hook) {
            hook.result = CREATE_STOCK;
        },
        get(hook) {
            hook.result = GET_STOCK;
        },
        update(hook) {
            hook.result = UPDATE_STOCK;
        },
        remove(hook) {
            hook.result = DELETE_STOCK;
        },
        find(hook) {
            hook.result = FIND_STOCK_LIST(hook.params);
        }
    }
};