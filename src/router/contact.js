/**
 * Sub-routes for 'contact'
 */

import ContactForm from '../components/contact/ContactForm.vue';
import ContactList from '../components/contact/ContactList.vue';

const baseUri = '/contact';

export const routeContact = [
    {
        path: baseUri,
        name: 'contactList',
        component: ContactList
    },
    {
        path: baseUri + '/new',
        name: 'contactNew',
        component: ContactForm
    },
    {
        path: baseUri + '/edit/:id',
        name: 'contactEdit',
        component: ContactForm
    }
];