import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import cloneDeep from 'lodash/cloneDeep';
import StockForm from 'src/components/stock/StockForm';
import stockStore from 'src/store/modules/stock';
import { returnTrue } from '../../utils/genericHelper';

const localVue = createLocalVue();
localVue.use(Vuex);

let state;
let actions;
let store;
let $router;

// rewire dependency with stub
StockForm.__Rewire__('validateForm', returnTrue);

describe('StockForm.vue', () => {
    beforeEach(() => {
        state = cloneDeep(stockStore.initialState);
        
        actions = {
            createStock: sinon.spy(),
            getStockDetails: sinon.spy(),
            updateStockDetails: sinon.spy(),
            deleteStock: sinon.spy(),
            setStockId: sinon.spy(),
            clearState: sinon.spy()
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
        
        // fake router push to handle $router.push
        $router = {
            push: sinon.fake.returns()
        };
    });
    
    describe('Methods', () => {
        it('loadStock - should trigger clearState action', () => {
            const wrapper = shallowMount(StockForm, {
                localVue,
                store
            });
            wrapper.vm.loadStock();
            assert.isTrue(actions.clearState.called);
        });
    
        it('loadStock - should trigger setStockId action if route has params id', () => {
            const $route = { params: { id: 1 } };
            const wrapper = shallowMount(StockForm, {
                localVue,
                store,
                mocks: {
                    $route
                }
            });
            wrapper.vm.loadStock();
            assert.isTrue(actions.setStockId.called);
        });
    
        it('loadStock - should trigger getStockDetails action if route has params id', () => {
            const $route = { params: { id: 1 } };
            const wrapper = shallowMount(StockForm, {
                localVue,
                store,
                mocks: {
                    $route
                }
            });
            wrapper.vm.loadStock();
            assert.isTrue(actions.getStockDetails.called);
        });
        
        it('createStock - should trigger createStock action', () => {
            const wrapper = shallowMount(StockForm, {
                localVue,
                store,
                mocks: {
                    $router
                }
            });
            wrapper.vm.createStock();
            assert.isTrue(actions.createStock.calledOnce);
        });
    
        it('updateStockDetails - should trigger updateStockDetails action', () => {
            const wrapper = shallowMount(StockForm, {
                localVue,
                store
            });
            wrapper.vm.updateStockDetails();
            assert.isTrue(actions.updateStockDetails.calledOnce);
        });
    
        it('deleteStock - should trigger deleteStock action', () => {
            const wrapper = shallowMount(StockForm, {
                localVue,
                store,
                mocks: {
                    $router
                }
            });
            wrapper.vm.deleteStock();
            assert.isTrue(actions.deleteStock.calledOnce);
        });
    });
});