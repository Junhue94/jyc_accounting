import 'jquery-validation';

export class ValidatePlugin {
    static install(Vue, options) {
        /**
         * Integrate Bootstrap class with jQuery Validator
         */
        jQuery.validator.setDefaults({
            highlight: function (element) {
                jQuery(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function (element) {
                jQuery(element).closest('.form-group').removeClass('has-error');
            },
            errorElement: 'span',
            errorClass: 'help-block',
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                }
                else {
                    error.insertAfter(element);
                }
            }
        });
        /**
         * Private function that runs the validator when mounted
         * @private 
         */
        function registerValidation(vm) {
            let forms = vm.$options.forms;

            // Exit if there isn't a valid "forms" option.
            if (typeof forms !== 'object') {
                return;
            }
            // Get an instance of the vm's "data" option.
            let data = typeof vm.$options.data === 'function' ? vm.$options.data() : vm.$options.data;
            // Create a default data instance if necessary.
            if (typeof data === 'undefined') {
                data = {};
            }
            // Bind each FeathersJS service into our vm data instance.
            for (let form in forms) {
                const $elem = jQuery(forms[form].selector);
                const validator = $elem.validate(forms[form].options);

                vm[form] = {
                    $form: $elem,
                    formValidator: validator,
                    resetForm() {
                        return this.formValidator.resetForm();
                    },
                    isValid() {
                        return this.$form.valid();
                    }
                };
            }
            // Update the vm's "data" option for other life-cycle events.
            vm.$options.data = function returnData() {
                return data;
            };
        }
        /**
         * Mixin the mounted event.
         */
        Vue.mixin({
            mounted() {
                registerValidation(this);
            }
        });
    }
}

export default ValidatePlugin;