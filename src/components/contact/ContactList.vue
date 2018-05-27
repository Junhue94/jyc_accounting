<template>
    <div>
        <!--Start Page-->
        <div class="page">
            <!--Start Row-->
            <div class="row">
                <!--Start Column-->
                <div class="col-md-12">
                    <!--Start Section-->
                    <section class="panel panel-default">
                        <div class="panel-heading">
                            <span class="glyphicon glyphicon-th"></span>
                            CONTACTS
                            <span class="pull-right">
                                <router-link tag="div"
                                             class="btn btn-success"
                                             :to="{ name: 'contactNew' }"
                                >Add New Contact</router-link>
                            </span>
                            <div class="clearfix"></div>
                        </div>
                        
                        <!--Start Row-->
                        <div class="row">
                            <!--Start Column-->
                            <div class="col-sm-12">
                                <!--Start Table-->
                                <table id="contact-list-table"
                                       data-search="true"
                                       data-search-time-out="100"
                                       data-pagination="true"
                                       data-show-columns="true"
                                       data-page-list="[10, 25, 50, 100]"
                                       data-sort-name="name"
                                       class="table table-striped table-bordered table-responsive"
                                >
                                    <thead>
                                    <tr>
                                        <th data-field="name" data-sortable="true">Clinic Name</th>
                                        <th data-field="contact" data-sortable="true">Contact</th>
                                        <th data-field="category" data-sortable="true">Category</th>
                                        <th data-field="handphone" data-sortable="true">Handphone</th>
                                        <th data-field="telephone" data-sortable="true">Telephone</th>
                                        <th data-field="email" data-sortable="true">Email</th>
                                    </tr>
                                    </thead>
                                </table><!--End Table-->
                            </div><!--End Column-->
                        </div><!--End Row-->
                    </section><!--End Section-->
                </div><!--End Column-->
            </div><!--End Row-->
        </div><!--End Page-->
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import { CONTACT_VIEW } from '../../api';
    import Toastr from '../../utils/ui-toaster';
    import Logger from '../../utils/ui-logger';
    
    const toastr = new Toastr();
    const logger = new Logger();
    
    export default {
        name: 'ContactList',
        methods: {
            ...mapActions('contact', {
                getList: 'getContactList'
            }),
            loadContactList() {
                this.getList(CONTACT_VIEW)
                    .then((res) => {
                        const $tableId = $('#contact-list-table');
                        $tableId.bootstrapTable({
                            data: res.rows
                        });
                        
                        $tableId.on('click-row.bs.table', (e, field) => {
                            this.$router.push({
                                name: 'contactEdit',
                                params: { id: field._id }
                            });
                        });
                    })
                    .catch((err) => {
                        logger.error(err);
                        toastr.callbackError();
                    });
            }
        },
        computed: {
            ...mapGetters('contact', {
                fetchContactList: 'contactList'
            }),
            contactList() {
                return this.fetchContactList;
            }
        },
        created() {
            this.loadContactList();
        }
    };
</script>

<style>

</style>