/**
 * Contact Mock Hook
 */
import ContactMockResult from './contact-mock-result';
import { CONTACT_VIEW } from '../..';

const contactMockResult = new ContactMockResult;

export const ContactMockHook = {
    before: {
        create(hook) {
            hook.result = contactMockResult.createContact();
        },
        get(hook) {
            hook.result = contactMockResult.getContact();
        },
        update(hook) {
            hook.result = contactMockResult.updateContact();
        },
        remove(hook) {
            hook.result = contactMockResult.deleteContact();
        },
        find(hook) {
            // Return result based on query view
            switch (hook.params.queryView) {
            case CONTACT_VIEW:
                hook.result = contactMockResult.getContactList();
                break;
            default:
                hook.result = {};
            }
        }
    }
};

export default ContactMockHook;