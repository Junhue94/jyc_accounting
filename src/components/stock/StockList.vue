<template>
    <list-page>
        <template slot="content">
            <button-row>
                <template slot="button">
                    <router-link
                            tag="button"
                            class="btn btn-primary"
                            :to="{ name: 'stockNew' }"
                    >Add New Stock
                    </router-link>
                </template>
            </button-row>
            <panel>
                <template slot="heading">STOCK LIST</template>
                <template slot="body">
                    <filter-value
                        :filters="stockListFilters"
                        :onFilterChange="loadStockList"
                    ></filter-value>
                    <list-table
                        :headerList="stockListHeaders"
                        :dataList="stockList"
                        :onDataListClick="routeToStockEdit"
                        :findList="loadStockList"
                        :queryParams="stockListParams"
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
    import FilterValue from '../common/FilterValue';
    import {
        enumStockType,
        enumStockSector,
        enumCountry
    } from '../../utils/enum';
    
    export default {
        name: 'StockList',
        components: {
            ListPage,
            ListTable,
            ButtonRow,
            Panel,
            FilterValue
        },
        data() {
            return {
                stockListHeaders: [
                    {
                        field: 'type',
                        name: 'Type'
                    },
                    {
                        field: 'name',
                        name: 'Stock'
                    },
                    {
                        field: 'country',
                        name: 'Country'
                    },
                    {
                        field: 'sector',
                        name: 'Sector'
                    },
                    {
                        field: 'entryDate',
                        name: 'Entry Date',
                        filter: 'fullDate'
                    },
                    {
                        field: 'exitDate',
                        name: 'Exit Date',
                        filter: 'fullDate'
                    },
                    {
                        field: 'currency',
                        name: 'Currency'
                    },
                    {
                        field: 'priceBuy',
                        name: 'Price Buy',
                        filter: 'price'
                    },
                    {
                        field: 'quantityBuy',
                        name: 'Qty Buy',
                        filter: 'number'
                    },
                    {
                        field: 'totalCapital',
                        name: 'Capital',
                        filter: 'money'
                    },
                    {
                        field: 'priceSell',
                        name: 'Price Sell',
                        filter: 'price'
                    },
                    {
                        field: 'quantitySell',
                        name: 'Qty Sell',
                        filter: 'number'
                    },
                    {
                        field: 'capitalReturn',
                        name: 'Capital Return',
                        filter: 'money'
                    },
                    {
                        field: 'totalDividend',
                        name: 'Dividend',
                        filter: 'money'
                    },
                    {
                        field: 'priceProfitTarget',
                        name: 'Profit Target',
                        filter: 'price'
                    },
                    {
                        field: 'priceStopLoss',
                        name: 'Stop Loss',
                        filter: 'price'
                    }
                ],
                stockListFilters: [
                    {
                        field: 'type',
                        name: 'Type',
                        selection: enumStockType,
                        eq: ''
                    },
                    {
                        field: 'country',
                        name: 'Country',
                        selection: enumCountry,
                        eq: ''
                    },
                    {
                        field: 'sector',
                        name: 'Sector',
                        selection: enumStockSector,
                        eq: ''
                    }
                ]
            };
        },
        methods: {
            ...mapActions('stock', {
                findList: 'findStockList'
            }),
            loadStockList(options) {
                this.findList(options)
                    .catch((err) => {
                        logError(err);
                        toastServerError();
                    });
            },
            routeToStockEdit(id) {
                this.$router.push({
                    name: 'stockEdit',
                    params: { id }
                });
            }
        },
        computed: {
            ...mapGetters('stock', {
                fetchStockList: 'stockList',
                fetchStockListParams: 'stockListParams'
            }),
            stockList() {
                return this.fetchStockList;
            },
            stockListParams() {
                return this.fetchStockListParams;
            }
        },
        created() {
            const { offset, currentPage } = this.stockListParams;
            this.loadStockList({ offset, currentPage });
        }
    };
</script>

<style scoped lang="scss">

</style>