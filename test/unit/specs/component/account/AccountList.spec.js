import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import cloneDeep from 'lodash/cloneDeep';
import AccountList from 'src/components/account/AccountList';
import accountStore from 'src/store/modules/account';

const localVue = createLocalVue();
localVue.use(Vuex);

let state;
let actions;
let store;

describe('AccountList.vue', () => {
    beforeEach(() => {
        state = cloneDeep(accountStore.initialState);
        
        actions = {
            findAccountList: sinon.spy()
        };
        
        store = new Vuex.Store({
            modules: {
                account: {
                    namespaced: true,
                    state,
                    actions,
                    getters: accountStore.getters
                }
            }
        });
    });
    
    describe('Methods', () => {
        it('loadAccountList - should trigger findAccountList action', () => {
            const wrapper = shallowMount(AccountList, {
                localVue,
                store
            });
            wrapper.vm.loadAccountList();
            assert.isTrue(actions.findAccountList.called);
        });
        
        it('routeToAccountEdit - should re-direct to correct route', () => {
            const wrapper = shallowMount(AccountList, {
                localVue,
                store,
                mocks: {
                    $router: {
                        push(route) {
                            assert.equal(route.name, 'accountEdit');
                        }
                    }
                }
            });
            wrapper.vm.routeToAccountEdit(1);
        });
    });
});