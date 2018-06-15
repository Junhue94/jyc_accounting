<template>
    <list-page>
        <template slot="content">
            <button-row>
                <template slot="button">
                    <router-link
                        tag="button"
                        class="btn btn-primary"
                        :to="{ name: 'accountNew' }"
                    >Add New Category
                    </router-link>
                    <router-link
                        tag="button"
                        class="btn btn-success"
                        :to="{ name: 'accountNew' }"
                    >Add New Account
                    </router-link>
                </template>
            </button-row>
            <panel>
                <template slot="heading">ACCOUNTS</template>
                <template slot="body">
                    <list-table>
                        <template slot="thead">
                            <tr>
                                <th>Name</th>
                                <th>Total</th>
                            </tr>
                        </template>
                        <template slot="tbody">
                            <tr v-for="account in accountList">
                                <td>{{ account.name}}</td>
                                <td></td>
                            </tr>
                        </template>
                    </list-table>
                </template>
            </panel>
        </template>
    </list-page>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import Toastr from '../../utils/ui-toaster';
    import Logger from '../../utils/ui-logger';
    import ListPage from '../common/ListPage';
    import ListTable from '../common/ListTable';
    import ButtonRow from '../common/ButtonRow';
    import Panel from '../common/Panel';

    const toastr = new Toastr();
    const logger = new Logger();
    
    export default {
        name: 'AccountList',
        components: {
            ListPage,
            ListTable,
            ButtonRow,
            Panel
        },
        methods: {
            ...mapActions('account', {
                findList: 'findAccountList'
            }),
            loadAccountList() {
                this.findList()
                    .catch((err) => {
                        logger.error(err);
                        toastr.callbackError();
                    });
            }
        },
        computed: {
            ...mapGetters('account', {
                fetchAccountList: 'accountList'
            }),
            accountList() {
                return this.fetchAccountList;
            }
        },
        created() {
            this.loadAccountList();
        }
    };
</script>

<style lang="scss" scoped>

</style>