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
                <template slot="heading">STOCKS</template>
                <template slot="body">
                    <list-table>
                        <template slot="thead">
                            <tr>
                                <th>Type</th>
                                <th>Entry Date</th>
                                <th>Exit Date</th>
                                <th>Stock</th>
                                <th>Country</th>
                                <th>Sector</th>
                                <th>Price Buy</th>
                                <th>Qty Buy</th>
                                <th>Capital</th>
                                <th>Price Sell</th>
                                <th>Qty Sell</th>
                                <th>Capital Return</th>
                                <th>Dividend</th>
                                <th>Profit Target</th>
                                <th>Stop Loss</th>
                            </tr>
                        </template>
                        <template slot="tbody">
                            <tr v-for="stock in stockList">
                                <td>{{ stock.type }}</td>
                                <td>{{ stock.entryDate }}</td>
                                <td>{{ stock.exitDate }}</td>
                                <td>{{ stock.name }}</td>
                                <td>{{ stock.country }}</td>
                                <td>{{ stock.sector }}</td>
                                <td>{{ stock.priceBuy }}</td>
                                <td>{{ stock.quantityBuy }}</td>
                                <td>{{ stock.totalCapital }}</td>
                                <td>{{ stock.priceSell }}</td>
                                <td>{{ stock.quantitySell }}</td>
                                <td>{{ stock.capitalReturn }}</td>
                                <td>{{ stock.totalDividend }}</td>
                                <td>{{ stock.priceProfitTarget }}</td>
                                <td>{{ stock.priceStopLoss }}</td>
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
        name: 'StockList',
        components: {
            ListPage,
            ListTable,
            ButtonRow,
            Panel
        },
        methods: {
            ...mapActions('stock', {
                findList: 'findStockList'
            }),
            loadStockList() {
                this.findList()
                    .catch((err) => {
                        logger.error(err);
                        toastr.callbackError();
                    });
            }
        },
        computed: {
            ...mapGetters('stock', {
                fetchStockList: 'stockList'
            }),
            stockList() {
                return this.fetchStockList;
            }
        },
        created() {
            this.loadStockList();
        }
    };
</script>

<style scoped lang="scss">

</style>