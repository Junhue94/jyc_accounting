/**
 * API Contact Service
 */

import { CONTACT_SERVICE } from '..';
import ContactMockHook from '../_mock/contact/contact-mock-hook';

class ContactService {
    constructor() {
        this.service = CONTACT_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(ContactMockHook);
        }
    }
    /**
     * Create Contact
     * @param contactDetails
     */
    createContact(contactDetails) {
        return this.service.create(contactDetails);
    }
    /**
     * Get Contact
     * @param contactId
     */
    getContactDetails(contactId) {
        return this.service.get(contactId);
    }
    /**
     * Get Contact List
     * @param queryView
     */
    getContactList(queryView) {
        return this.service.find({ queryView });
    }
    /**
     * Update Contact
     * @param contactDetails
     */
    updateContactDetails(contactDetails) {
        return this.service.update(contactDetails._id, contactDetails);
    }
    /**
     * Delete Contact
     * @param contactId
     */
    deleteContact(contactId) {
        return this.service.remove(contactId);
    }
}

export default ContactService;
