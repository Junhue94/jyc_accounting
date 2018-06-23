import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import cloneDeep from 'lodash/cloneDeep';
import StockList from 'src/components/stock/StockList';
import stockStore from 'src/store/modules/stock';

const localVue = createLocalVue();
localVue.use(Vuex);

let state;
let actions;
let store;

describe('StockList.vue', () => {
    beforeEach(() => {
        state = cloneDeep(stockStore.initialState);
        
        actions = {
            findStockList: sinon.spy()
        };
        
        store = new Vuex.Store({
            modules: {
                stock: {
                    namespaced: true,
                    state,
                    actions,
                    getters: stockStore.getters
                }
            }
        });
    });
    
    describe('Methods', () => {
        it('loadStockList - should trigger findStockList action', () => {
            const wrapper = shallowMount(StockList, {
                localVue,
                store
            });
            wrapper.vm.loadStockList();
            assert.isTrue(actions.findStockList.called);
        });
    
        it('routeToStockEdit - should re-direct to correct route', () => {
            const wrapper = shallowMount(StockList, {
                localVue,
                store,
                mocks: {
                    $router: {
                        push(route) {
                            assert.equal(route.name, 'stockEdit');
                        }
                    }
                }
            });
            wrapper.vm.routeToStockEdit(1);
        });
    });
});