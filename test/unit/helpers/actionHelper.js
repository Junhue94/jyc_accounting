/**
 * Helper for testing action with expected mutations
 * @param action
 * @param payload
 * @param state
 * @param expectedMutations
 * @param done
 */

export const actionHelper = (action, payload, state, expectedMutations, done) => {
    let count = 0;
    
    // Mock commit
    const commit = (type, payload) => {
        const mutation = expectedMutations[count];
        
        try {
            // Check mutation type called in actions with 'actionHelper' param
            assert.equal(mutation.type, type);
            if (payload) {
                assert.deepEqual(mutation.payload, payload);
            }
        }
        catch (error) {
            done(error);
        }
        
        count++;
        if (count >= expectedMutations.length) {
            done();
        }
    };
    
    // Call the action with mocked store and arguments
    action({ commit, state }, payload);
    
    // Check if no mutations should have been dispatched
    if (expectedMutations.length === 0) {
        assert.equal(count, 0);
        done();
    }
};