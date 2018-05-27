/**
 * Contact Mock Result
 * For Mock API Calls and Unit Tests
 */

import { DOCTYPE_CONTACTS } from '../..';

class ContactMockResult {
    createContact() {
        return {
            ok: true,
            id: '1',
            rev: '2131-43242-23'
        };
    }
    getContact() {
        return {
            _id: '1',
            _rev: '2131-43242-23',
            type: DOCTYPE_CONTACTS,
            name: 'Lim and Tan Family Clinic',
            contact: 'Ms Siew Ling Ling',
            category: 'Staff',
            handphone: '90892020',
            telephone: '67324932',
            fax: '67493993',
            email: 'lingling@ltfc.com',
            address: '#10-90 Mount Elizabeth Specialist Center',
            notes: 'Please follow up'
        };
    }
    updateContact() {
        return {
            _id: '33',
            _rev: '2131-43242-23',
            type: DOCTYPE_CONTACTS,
            name: 'ENT Specialist Center',
            contact: 'Mr Lai',
            category: 'Doctor',
            handphone: '94322320',
            telephone: '68349030',
            fax: '68684940',
            email: 'ent@lent.com',
            address: '#10-90 Mount Novena Specialist Center',
            notes: ''
        };
    }
    deleteContact() {
        return {
            ok: true,
            id: '4',
            rev: '43543-5430543'
        };
    }
    getContactList() {
        return {
            offset: 0,
            total_rows: 15,
            rows: [
                {
                    _id: '1',
                    _rev: '2131-43242-23',
                    type: 'contacts',
                    name: 'ENT Specialist Center',
                    contact: 'Mr Lai',
                    category: 'Doctor',
                    handphone: '94322320',
                    telephone: '68349030',
                    fax: '68684940',
                    email: 'ent@lent.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: ''
                },
                {
                    _id: '2',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'Dr Tan Clinic',
                    contact: 'Mr Tan',
                    category: 'Nurse',
                    handphone: '92343034',
                    telephone: '66678839',
                    fax: '69340304',
                    email: 'tan@tanclinic.com',
                    address: '#13-40 Mountain Center',
                    notes: ''
                },
                {
                    _id: '3',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'Gyne Assoc Center',
                    contact: 'Dr Tan Lee',
                    category: 'Doctor',
                    handphone: '94322334',
                    telephone: '68345030',
                    fax: '68683433',
                    email: 'long@test.com',
                    address: '#90-32 Mount Elizabeth Hospital',
                    notes: ''
                },
                {
                    _id: '4',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'Tan Specialist',
                    contact: 'Mr Tan',
                    category: 'Staff',
                    handphone: '94343420',
                    telephone: '63423430',
                    fax: '62322940',
                    email: 'tan@contacts.com',
                    address: '#10-4 Mount Novena Specialist Center',
                    notes: 'Please do not call directly'
                },
                {
                    _id: '5',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'Lee Gyne Center',
                    contact: 'Mr Lee',
                    category: 'Doctor',
                    handphone: '94334934',
                    telephone: '68346660',
                    fax: '68634340',
                    email: 'gyne@assoc.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: ''
                },
                {
                    _id: '6',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'Lee Family Center',
                    contact: 'Dr Lee',
                    category: 'Doctor',
                    handphone: '94545420',
                    telephone: '66766630',
                    fax: '63434343',
                    email: 'long@short.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: ''
                },
                {
                    _id: '7',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'Dr Lai Fon Min',
                    contact: 'Mr Lai',
                    category: '',
                    handphone: '',
                    telephone: '',
                    fax: '64343773',
                    email: 'ent@yong.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: ''
                },
                {
                    _id: '8',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'Dr Lee Fin Ming',
                    contact: 'Mr Lee',
                    category: 'Doctor',
                    handphone: '93420433',
                    telephone: '66766030',
                    fax: '68656550',
                    email: 'long@long.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: ''
                },
                {
                    _id: '9',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'Chua Doctor Center',
                    contact: 'Mr Chua',
                    category: 'Doctor',
                    handphone: '94445420',
                    telephone: '67877630',
                    fax: '68343340',
                    email: 'chua@center.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: ''
                },
                {
                    _id: '10',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'East Coast Center',
                    contact: 'Mr Albert Teo',
                    category: 'Doctor',
                    handphone: '94343320',
                    telephone: '68877530',
                    fax: '68565430',
                    email: 'contact@info.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: ''
                },
                {
                    _id: '11',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'Tan Lee Brothers',
                    contact: 'Mr Twin',
                    category: 'Twin',
                    handphone: '94343320',
                    telephone: '67877030',
                    fax: '68787740',
                    email: 'lee@center.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: ''
                },
                {
                    _id: '12',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'Fake Face Center',
                    contact: 'Mr Fake',
                    category: 'Doctor',
                    handphone: '94354520',
                    telephone: '68323223',
                    fax: '68666640',
                    email: 'six@face.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: ''
                },
                {
                    _id: '13',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'Birth Care Center',
                    contact: 'Mrs Gunther',
                    category: 'Doctor',
                    handphone: '94354320',
                    telephone: '68322030',
                    fax: '64544940',
                    email: 'lee@gun.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: ''
                },
                {
                    _id: '14',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'Chinese Medicine Center',
                    contact: 'Mr Ong',
                    category: 'Doctor',
                    handphone: '94544320',
                    telephone: '68565550',
                    fax: '68342434',
                    email: 'ong@ong.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: ''
                },
                {
                    _id: '15',
                    _rev: '3-323939423423-3',
                    type: 'contacts',
                    name: 'FTER Specialist Center',
                    contact: 'Mr Lai',
                    category: 'Doctor',
                    handphone: '94445320',
                    telephone: '68656530',
                    fax: '68634340',
                    email: 'lee@fter.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: ''
                }
            ]
        };
    }
}

export default ContactMockResult;