/**
 * System Setup - Template Letter Store - Mutation Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/templateLetter';
import TemplateLetterMockResult from 'src/api/_mock/systemSetup/template-letter-mock-result';

const templateLetterMockResult = new TemplateLetterMockResult();

const { SET_LETTER_LIST } = store.mutations;

describe('System Setup - Template Letter Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('store letter list using SET_LETTER_LIST', () => {
            const templateLetterList = templateLetterMockResult.findLetterList();
            const mutation = SET_LETTER_LIST(state, templateLetterList);
            assert.deepEqual(state.letterList, templateLetterList);
        });
    });
});