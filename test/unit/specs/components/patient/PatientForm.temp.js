/**
 * PatientForm Component Test
 */

import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import { mount } from 'avoriaz';
import _ from 'lodash';
import PatientForm from 'src/components/patient/PatientForm.vue';
import patientDetailsStore from 'src/store/modules/patient/patientDetails';

Vue.use(Vuex);

/**
 * @todo Use Sandbox
 * @todo Use Testhelper
 */

describe('PatientForm.vue', () => {
    let actions;
    let state;
    let store;
    
    beforeEach(() => {
        // Setup State
        state = _.cloneDeep(patientDetailsStore.initialState);
        
        // Setup Actions
        actions = {
            createPatient: sinon.stub(),
            getPatientDetails: sinon.stub(),
            updatePatientDetails: sinon.stub(),
            deletePatient: sinon.stub(),
            setPatientId: sinon.stub(),
            clearState: sinon.stub()
        };
        actions.clearState.returns(patientDetailsStore.initialState);
        actions.getPatientDetails.returns(patientDetailsStore.initialState);
        
        // Create Vuex Store
        store = new Vuex.Store({
            modules: {
                patient: {
                    namespaced: true,
                    state,
                    actions,
                    getters: patientDetailsStore.getters
                }
            }
        });
    });
    
    /**
     * @todo Refactor $route test for /new
     */
    it('calls store action clearState when route is patient (new)', () => {
        const $route = { params: {} };
        const wrapper = mount(PatientForm, {
            globals: {
                $route
            },
            store
        });
        assert.isTrue(actions.clearState.calledOnce);
    });
    
    /**
     * @todo Include Test for redirecting of routes
    //Bug in v2.4.0 : https://github.com/eddyerburgh/avoriaz/issues/70
    /*    it('calls store action clearState & getPatientDetails when route is patient detail', () => {
     const $route = { params: { id: '1' } };
     
     const wrapper = mount(PatientDetails, {
     globals: {
     $route
     }
     });
     
     //expect(wrapper.vm.$route).equal($route);
     expect(actions.clearState.calledOnce).to.equal(true);
     //expect(actions.getPatientDetails.calledOnce).to.equal(true);
     });
     */
    
    /**
     * @todo Form Validation causing test to fail
     */
    it('calls store action createPatient when create button is clicked', () => {
        const wrapper = mount(PatientForm, { store });
        wrapper.find('[data-test="createPatient"]')[0].trigger('click');
        assert.isTrue(actions.createPatient.calledOnce);
    });
    
    it('calls store action updatePatientDetails when update button is clicked', () => {
        state.patientId = '1';
        const wrapper = mount(PatientForm, { store });
        wrapper.find('[data-test="updatePatient"]')[0].trigger('click');
        assert.isTrue(actions.updatePatientDetails.calledOnce);
    });
    
    it('calls store action deletePatient when delete button is clicked', () => {
        state.patientId = '1';
        const wrapper = mount(PatientForm, { store });
        wrapper.find('[data-test="deletePatient"]')[0].trigger('click');
        assert.isTrue(actions.deletePatient.calledOnce);
    });
});
