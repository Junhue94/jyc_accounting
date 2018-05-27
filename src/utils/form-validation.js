/**
 * jQuery Validation
 */

class Validator {
    /**
     * Reset Form
     * @param form
     */
    resetForm(form) {
        if (form) {
            form.resetForm();
        }
    }
    /**
     * Check Forms Validity
     * @param form
     * @returns {boolean|*}
     */
    isFormValid(form) {
        return !!form && form.isValid();
    }
}

export default Validator;
