/**
 * System Setup - Template Mc Store - Mutation Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/templateMc';
import TemplateMcMockResult from 'src/api/_mock/systemSetup/template-mc-mock-result';

const templateMcMockResult = new TemplateMcMockResult();

const { SET_MC_LIST } = store.mutations;

describe('System Setup - Template Mc Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('store mc list using SET_MC_LIST', () => {
            const templateMcList = templateMcMockResult.findMcList();
            const mutation = SET_MC_LIST(state, templateMcList);
            assert.deepEqual(state.mcList, templateMcList);
        });
    });
});