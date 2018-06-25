import { shallowMount, createLocalVue } from '@vue/test-utils';
import ListTable from 'src/components/common/ListTable';
import { FIND_STOCK_LIST } from 'src/api/_mock/stock/stock-mock-result';
import filters from 'src/filters';
import {
    getQueryData,
    getQueryParams,
    mockQueryParam
} from '../../../helpers/genericHelper';

const localVue = createLocalVue();
localVue.use(filters);

let propsData;

// stub Vue to localVue to access filter function
ListTable.__Rewire__('Vue', localVue);

describe('ListTable.vue', () => {
    beforeEach(() => {
        const stockList = FIND_STOCK_LIST(mockQueryParam);
        
        propsData = {
            headerList: [
                {
                    field: 'type',
                    name: 'Type'
                },
                {
                    field: 'name',
                    name: 'Stock'
                }
            ],
            dataList: getQueryData(stockList),
            onDataListClick: sinon.spy(),
            findList: sinon.spy(),
            queryParams: getQueryParams(stockList)
        };
    });
    
    describe('Props', () => {
        it('should trigger "findList" when "header" is clicked', () => {
            const wrapper = shallowMount(ListTable, {
                localVue,
                propsData
            });
            wrapper.find('.header').trigger('click');
            assert.isTrue(wrapper.props().findList.called);
        });
        
        it('should trigger "onDataListClick" when "data" is clicked', () => {
            const wrapper = shallowMount(ListTable, {
                localVue,
                propsData
            });
            wrapper.find('.data').trigger('click');
            assert.isTrue(wrapper.props().onDataListClick.calledOnce);
        });
    });
    
    describe('Watch', () => {
        it('queryParams.offset - should trigger findList', () => {
            const wrapper = shallowMount(ListTable, {
                localVue,
                propsData
            });
            wrapper.setProps({ queryParams: { offset: 19 } });
            assert.isTrue(wrapper.props().findList.called);
        });
    
        it('queryParams.currentPage - should set isFirstPage correctly', () => {
            const wrapper = shallowMount(ListTable, {
                localVue,
                propsData
            });
            wrapper.setProps({ queryParams: { currentPage: 1 } });
            const firstPage = wrapper.vm.$data.isFirstPage;
            assert.isTrue(firstPage);
    
            wrapper.setData({ isFirstPage: true });
            wrapper.setProps({ queryParams: { currentPage: 4 } });
            const notFirstPage = wrapper.vm.$data.isFirstPage;
            assert.isFalse(notFirstPage);
        });
    
        it('queryParams.currentPage - should set isLastPage correctly', () => {
            const wrapper = shallowMount(ListTable, {
                localVue,
                propsData
            });
            wrapper.setProps({ queryParams: { currentPage: 10, totalPage: 10 } });
            const lastPage = wrapper.vm.$data.isLastPage;
            assert.isTrue(lastPage);
    
            wrapper.setData({ isLastPage: true });
            wrapper.setProps({ queryParams: { currentPage: 5, totalPage: 10 } });
            const notLastPage = wrapper.vm.$data.isLastPage;
            assert.isFalse(notLastPage);
        });
    });
    
    describe('Methods', () => {
        it('dateFilter - should trigger "Vue.filter" if filter exists', () => {
            const wrapper = shallowMount(ListTable, {
                localVue,
                propsData
            });
            
            const result = wrapper.vm.dataFilter('number', 10);
            assert.equal(result, '10');
        });
    
        it('dateFilter - should return value if filter does not exist', () => {
            const wrapper = shallowMount(ListTable, {
                localVue,
                propsData
            });
            const value = 10;
            const result = wrapper.vm.dataFilter(null, value);
            assert.equal(result, value);
        });
    
        it('setSortSeq - should set alternating sort sequence if same sort field is clicked', () => {
            const wrapper = shallowMount(ListTable, {
                localVue,
                propsData
            });
            wrapper.setData({ sortField: 'name', sortSeq: 'asc' });
            wrapper.vm.setSortSeq('name');
            const caseAsc = wrapper.vm.$data.sortSeq;
            assert.equal(caseAsc, 'desc');
    
            wrapper.setData({ sortField: 'name', sortSeq: 'desc' });
            wrapper.vm.setSortSeq('name');
            const caseDesc = wrapper.vm.$data.sortSeq;
            assert.equal(caseDesc, 'asc');
    
            wrapper.setData({ sortField: 'name', sortSeq: '' });
            wrapper.vm.setSortSeq('name');
            const caseDefault = wrapper.vm.$data.sortSeq;
            assert.equal(caseDefault, 'asc');
        });
    
        it('setSortSeq - should set sortField and ascending sortSeq when sortField is different', () => {
            const wrapper = shallowMount(ListTable, {
                localVue,
                propsData
            });
            wrapper.setData({ sortField: 'name', sortSeq: 'desc' });
            wrapper.vm.setSortSeq('header');
            const sortFieldResult = wrapper.vm.$data.sortField;
            assert.equal(sortFieldResult, 'header');
    
            const sortSeqResult = wrapper.vm.$data.sortSeq;
            assert.equal(sortSeqResult, 'asc');
        });
    
        it('setNewPage - should set current page correctly', () => {
            const wrapper = shallowMount(ListTable, {
                localVue,
                propsData
            });
            
            wrapper.setProps({ queryParams: { currentPage: 3 } });
            const previousPage = wrapper.vm.setNewPage('previous');
            assert.equal(previousPage, 2);
    
            wrapper.setProps({ queryParams: { currentPage: 3 } });
            const nextPage = wrapper.vm.setNewPage('next');
            assert.equal(nextPage, 4);
    
            wrapper.setProps({ queryParams: { currentPage: 3 } });
            const page = 5;
            const selectPage = wrapper.vm.setNewPage(page);
            assert.equal(selectPage, page);
        });
    
        it('changePage - should set page range correctly', () => {
            const wrapper = shallowMount(ListTable, {
                localVue,
                propsData
            });
    
            wrapper.setData({ pageRange: [] });
            wrapper.setProps({ queryParams: { offset: 10, currentPage: 1, totalPage: 3 } });
            wrapper.vm.changePage('next');
            const maxFivePage = wrapper.vm.$data.pageRange;
            assert.deepEqual(maxFivePage, [1, 2, 3]);
    
            wrapper.setData({ pageRange: [] });
            wrapper.setProps({ queryParams: { offset: 10, currentPage: 8, totalPage: 10 } });
            wrapper.vm.changePage('next');
            const lastTwoPages = wrapper.vm.$data.pageRange;
            assert.deepEqual(lastTwoPages, [6, 7, 8, 9, 10]);
    
            wrapper.setData({ pageRange: [] });
            wrapper.setProps({ queryParams: { offset: 10, currentPage: 1, totalPage: 10 } });
            wrapper.vm.changePage('next');
            const firstTwoPages = wrapper.vm.$data.pageRange;
            assert.deepEqual(firstTwoPages, [1, 2, 3, 4, 5]);
    
            wrapper.setData({ pageRange: [] });
            wrapper.setProps({ queryParams: { offset: 10, currentPage: 4, totalPage: 10 } });
            wrapper.vm.changePage('next');
            const inBetweenPages = wrapper.vm.$data.pageRange;
            assert.deepEqual(inBetweenPages, [3, 4, 5, 6, 7]);
        });
    
        it('changePage - should trigger findList if navigate to different page', () => {
            const wrapper = shallowMount(ListTable, {
                localVue,
                propsData
            });
            
            wrapper.setData({ pageRange: [] });
            wrapper.setProps({
                findList: sinon.spy(),
                queryParams: { offset: 10, currentPage: 1, totalPage: 10 }
            });
            wrapper.vm.changePage('next');
            assert.isTrue(wrapper.props().findList.called);
        });
    });
});