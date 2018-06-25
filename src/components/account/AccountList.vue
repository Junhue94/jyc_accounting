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
                    <list-table
                        :headerList="accountListHeaders"
                        :dataList="accountList"
                        :onDataListClick="routeToAccountEdit"
                        :findList="loadAccountList"
                        :queryParams="accountListParams"
                    >
                    </list-table>
                </template>
            </panel>
        </template>
    </list-page>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import { toastServerError } from '../../utils/toaster';
    import { logError } from '../../utils/logger';
    import ListPage from '../common/ListPage';
    import ListTable from '../common/ListTable';
    import ButtonRow from '../common/ButtonRow';
    import Panel from '../common/Panel';
    
    export default {
        name: 'AccountList',
        components: {
            ListPage,
            ListTable,
            ButtonRow,
            Panel
        },
        data() {
            return {
                accountListHeaders: [
                    {
                        field: 'name',
                        name: 'Name'
                    },
                    {
                        field: 'total',
                        name: 'Total'
                    }
                ]
            };
        },
        methods: {
            ...mapActions('account', {
                findList: 'findAccountList'
            }),
            loadAccountList(options) {
                this.findList(options)
                    .catch((err) => {
                        logError(err);
                        toastServerError();
                    });
            },
            routeToAccountEdit(id) {
                this.$router.push({
                    name: 'accountEdit',
                    params: { id }
                });
            }
        },
        computed: {
            ...mapGetters('account', {
                fetchAccountList: 'accountList',
                fetchAccountListParams: 'accountListParams'
            }),
            accountList() {
                return this.fetchAccountList;
            },
            accountListParams() {
                return this.fetchAccountListParams;
            }
        },
        created() {
            this.loadAccountList();
        }
    };
</script>

<style lang="scss" scoped>

</style>