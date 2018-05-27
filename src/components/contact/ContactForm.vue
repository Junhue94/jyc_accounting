<template>
    <div>
        <!--Start Page-->
        <div class="page">
            <!--Start Row-->
            <div class="row">
                <!--Start Column-->
                <div class="col-md-6">
                    <p class="header-item-name"></p>
                </div>
                <div class="col-md-6">
                    <span class="pull-right">
                        <router-link tag="button"
                                     class="btn btn-primary"
                                     :to="{ name: 'contactList' }"
                        >Cancel</router-link>
                        <button class="btn btn-success"
                                @click="updateContactDetails"
                                v-if="contactId"
                        >Save Details</button>
                        <button class="btn btn-danger"
                                data-toggle="modal"
                                data-target="#deleteContact"
                                v-if="contactId"
                        >Delete Record</button>
                        <button class="btn btn-success"
                                @click="createContact"
                                v-else
                        >Create Contact</button>
                    </span>
                </div><!--End Column-->
            </div><!--End Row-->
            
            <!--Start Row-->
            <div class="row">
                <!--Start Column-->
                <div class="col-md-12">
                    <!-- Nav Tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active">
                            <a href="#details" role="tab" data-toggle="tab">Details</a>
                        </li>
                    </ul><!--End Nav Tabs-->
                    
                    <!--Tab Panes-->
                    <div class="tab-content">
                        <!--Tab - New Inventory-->
                        <div id="details" class="tab-pane active" role="tabpanel" >
                            <!--Start Form-->
                            <form id="contact-form" class="form form-horizontal" autocomplete="off">
                                <div class="form-group">
                                    <label class="col-sm-4">Clinic Name</label>
                                    <div class="col-sm-8">
                                        <input type="text"
                                               class="form-control"
                                               placeholder="Clinic Name"
                                               v-model="contactDetails.name"
                                        >
                                    </div>
                                </div>
                                <div class="divider"></div>
                                <div class="form-group">
                                    <label class="col-sm-4">Contact Person</label>
                                    <div class="col-sm-8">
                                        <input type="text"
                                               class="form-control"
                                               placeholder="Contact Person"
                                               name="contact_person"
                                               v-model="contactDetails.contact"
                                        >
                                    </div>
                                </div>
                                <div class="divider"></div>
                                <div class="form-group">
                                    <label class="col-sm-4">Category</label>
                                    <div class="col-sm-8">
                                        <input type="text"
                                               class="form-control"
                                               placeholder="Category"
                                               v-model="contactDetails.category"
                                        >
                                    </div>
                                </div>
                                <div class="divider"></div>
                                <div class="form-group">
                                    <label class="col-sm-4">Handphone</label>
                                    <div class="col-sm-8">
                                        <input type="text"
                                               class="form-control"
                                               placeholder="Handphone"
                                               v-model="contactDetails.handphone"
                                        >
                                    </div>
                                </div>
                                <div class="divider"></div>
                                <div class="form-group">
                                    <label class="col-sm-4">Telephone</label>
                                    <div class="col-sm-8">
                                        <input type="text"
                                               class="form-control"
                                               placeholder="Telephone"
                                               v-model="contactDetails.telephone"
                                        >
                                    </div>
                                </div>
                                <div class="divider"></div>
                                <div class="form-group">
                                    <label class="col-sm-4">Fax</label>
                                    <div class="col-sm-8">
                                        <input type="text"
                                               class="form-control"
                                               placeholder="Fax"
                                               v-model="contactDetails.fax"
                                        >
                                    </div>
                                </div>
                                <div class="divider"></div>
                                <div class="form-group">
                                    <label class="col-sm-4">Email</label>
                                    <div class="col-sm-8">
                                        <input type="text"
                                               class="form-control"
                                               placeholder="Email"
                                               name="email"
                                               v-model="contactDetails.email"
                                        >
                                    </div>
                                </div>
                                <div class="divider"></div>
                                <div class="form-group">
                                    <label class="col-sm-4">Address</label>
                                    <div class="col-sm-8">
                                        <input type="text"
                                               class="form-control"
                                               placeholder="Address"
                                               v-model="contactDetails.address"
                                        >
                                    </div>
                                </div>
                                <div class="divider"></div>
                                <div class="form-group">
                                    <label class="col-sm-4">Notes</label>
                                    <div class="col-sm-8">
                                        <textarea class="form-control"
                                                  placeholder="Notes"
                                                  v-model="contactDetails.notes"
                                        ></textarea>
                                    </div>
                                </div>
                            </form><!--End Form-->
                        </div><!--End Tab - New Inventory-->
                    </div><!--End Tab Panes-->
                </div><!--End Column-->
            </div><!--End Row-->
        </div><!--End Page-->
        
        <!--Modal - Delete Consultation-->
        <div class="modal fade"
             id="deleteContact"
             role="dialog"
             v-if="contactId"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Are you sure you want to delete this consultation?</h4>
                    </div>
                    <div class="modal-footer">
                        <button type="button"
                                class="btn btn-success"
                                data-dismiss="modal"
                                @click="deleteContact"
                        >Yes</button>
                        <button type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                        >No</button>
                    </div>
                </div>
            </div>
        </div><!--End Modal - Delete Consultation-->
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import Toastr from '../../utils/ui-toaster';
    import Logger from '../../utils/ui-logger';
    import Validator from '../../utils/form-validation';
    
    const toastr = new Toastr();
    const logger = new Logger();
    const validator = new Validator();
    
    export default {
        name: 'ContactForm',
        watch: {
            '$route': 'loadContact'
        },
        methods: {
            ...mapActions('contact', {
                create: 'createContact',
                get: 'getContactDetails',
                update: 'updateContactDetails',
                remove: 'deleteContact',
                setContactId: 'setContactId',
                clearState: 'clearState'
            }),
            loadContact() {
                this.clearState();
                validator.resetForm(this.contactForm);
                
                if (this.$route && this.$route.params && this.$route.params.id) {
                    this.setContactId(this.$route.params.id);
                    // Get Contact Details Data
                    this.get(this.$route.params.id)
                        .catch((err) => {
                            logger.error(err);
                            toastr.callbackError();
                        });
                }
            },
            createContact() {
                if (validator.isFormValid(this.contactForm)) {
                    this.create(this.contactDetails)
                        .then((res) => {
                            return this.$router.push({
                                name: 'contactList'
                            });
                        })
                        .then((res) => {
                            return toastr.success('Create Contact', 'Successfully created');
                        })
                        .catch((err) => {
                            logger.error(err);
                            toastr.callbackError();
                        });
                }
            },
            updateContactDetails() {
                if (validator.isFormValid(this.contactForm)) {
                    this.update(this.contactDetails)
                        .then((res) => {
                            return toastr.success('Update Contact Details', 'Successfully updated');
                        })
                        .catch((err) => {
                            logger.error(err);
                            toastr.callbackError();
                        });
                }
            },
            deleteContact() {
                this.remove(this.contactId)
                    .then((res) => {
                        return this.$router.push({
                            name: 'contactList'
                        });
                    })
                    .then((res) => {
                        return toastr.success('Remove Contact', 'Successfully removed');
                    })
                    .catch((err) => {
                        logger.error(err);
                        toastr.callbackError();
                    });
            }
        },
        computed: {
            ...mapGetters('contact', {
                fetchContactId: 'contactId',
                fetchContactDetails: 'contactDetails'
            }),
            contactDetails() {
                return this.fetchContactDetails;
            },
            contactId() {
                return this.fetchContactId;
            }
        },
        forms: {
            contactForm: {
                selector: '#contact-form',
                options: {
                    rules: {
                        'contact_person': {
                            required: true
                        },
                        'email': {
                            email: true
                        }
                    }
                }
            }
        },
        created() {
            this.loadContact();
        }
    };
</script>

<style>

</style>