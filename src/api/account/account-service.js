/**
 * API Account Service
 */
import { ACCOUNT_SERVICE } from '..';
import { AccountMockHook } from '../_mock/account/account-mock-hook';

class AccountService {
    constructor() {
        this.service = ACCOUNT_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(AccountMockHook);
        }
    }
    /**
     * Create Account
     * @param accountDetails
     */
    createAccount(accountDetails) {
        return this.service.create(accountDetails);
    }
    /**
     * Get Account
     * @param accountId
     */
    getAccountDetails(accountId) {
        return this.service.get(accountId);
    }
    /**
     * Update Account
     * @param accountDetails
     */
    updateAccountDetails(accountDetails) {
        return this.service.update(accountDetails._id, accountDetails);
    }
    /**
     * Delete Account
     * @param accountId
     */
    deleteAccount(accountId) {
        return this.service.remove(accountId);
    }
    /**
     * Find Account List
     */
    findAccountList(options) {
        return this.service.find(options);
    }
}

export default AccountService;
