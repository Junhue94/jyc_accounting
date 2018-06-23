import { shallowMount, createLocalVue } from '@vue/test-utils';
import FilterValue from 'src/components/common/FilterValue';
import { enumStockSector } from 'src/utils/enum';

const localVue = createLocalVue();

describe('FilterValue.vue', () => {
    it('should trigger onFilterChange for change event', () => {
        const wrapper = shallowMount(FilterValue, {
            localVue,
            propsData: {
                filters: [
                    {
                        field: 'sector',
                        name: 'Sector',
                        selection: enumStockSector,
                        eq: ''
                    }
                ],
                onFilterChange: sinon.spy()
            }
        });
        wrapper.find('select').trigger('change');
        assert.isTrue(wrapper.props().onFilterChange.calledOnce);
    });
});