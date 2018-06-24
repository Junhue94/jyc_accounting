import { shallowMount, createLocalVue } from '@vue/test-utils';
import FilterValue from 'src/components/common/FilterValue';
import { enumStockSector } from 'src/utils/enum';

const localVue = createLocalVue();

let propsData;

describe('FilterValue.vue', () => {
    beforeEach(() => {
        propsData = {
            filters: [
                {
                    field: 'sector',
                    name: 'Sector',
                    selection: enumStockSector,
                    eq: ''
                }
            ],
            onFilterChange: sinon.spy()
        };
    });
    
    describe('Props', () => {
        it('should trigger "onFilterChange" when "filter" changes', () => {
            const wrapper = shallowMount(FilterValue, {
                localVue,
                propsData
            });
            wrapper.find('.filter').trigger('change');
            assert.isTrue(wrapper.props().onFilterChange.calledOnce);
        });
    });
});