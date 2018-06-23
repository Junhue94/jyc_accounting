/**
 * jQuery Validation
 */

export const resetForm = form => {
    if (form) {
        form.resetForm();
    }
};

export const validateForm = form => !!form && form.isValid();
