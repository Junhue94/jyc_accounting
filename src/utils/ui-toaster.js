/**
 * Toaster
 * Levels: ['success', 'error', 'warning', 'info']
 */

import toastr from 'toastr/build/toastr.min';

class Toastr {
    constructor() {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "0",
            "hideDuration": "0",
            "timeOut": "2500",
            "extendedTimeOut": "0",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
    }
    callbackError() {
        return toastr.error('Error. Please try again or contact support.');
    }
    success(title, message) {
        return toastr.success(message, title);
    }
}

export default Toastr;