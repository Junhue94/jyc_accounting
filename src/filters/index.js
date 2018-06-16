import {
    formatNumber,
    formatMoney,
    formatPrice
} from './number';

export default {
    install(Vue) {
        Vue.filter('formatNumber', formatNumber);
        Vue.filter('formatMoney', formatMoney);
        Vue.filter('formatPrice', formatPrice);
    }
};