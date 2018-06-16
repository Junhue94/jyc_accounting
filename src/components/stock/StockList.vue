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
                    <list-table>
                        <template slot="thead">
                            <tr>
                                <th>Type</th>
                                <th>Stock</th>
                                <th>Country</th>
                                <th>Sector</th>
                                <th>Entry Date</th>
                                <th>Exit Date</th>
                                <th>Currency</th>
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
                                <td>{{ stock.name }}</td>
                                <td>{{ stock.country }}</td>
                                <td>{{ stock.sector }}</td>
                                <td>{{ stock.entryDate }}</td>
                                <td>{{ stock.exitDate }}</td>
                                <td>{{ stock.currency }}</td>
                                <td>{{ stock.priceBuy | formatPrice }}</td>
                                <td>{{ stock.quantityBuy | formatNumber }}</td>
                                <td>{{ stock.totalCapital | formatNumber }}</td>
                                <td>{{ stock.priceSell | formatPrice }}</td>
                                <td>{{ stock.quantitySell | formatNumber }}</td>
                                <td>{{ stock.capitalReturn | formatMoney }}</td>
                                <td>{{ stock.totalDividend | formatMoney }}</td>
                                <td>{{ stock.priceProfitTarget | formatPrice }}</td>
                                <td>{{ stock.priceStopLoss | formatPrice }}</td>
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
    import { Toast } from '../../utils/toaster';
    import { Logger } from '../../utils/logger';
    import ListPage from '../common/ListPage';
    import ListTable from '../common/ListTable';
    import ButtonRow from '../common/ButtonRow';
    import Panel from '../common/Panel';
    
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
                        Logger.error(err);
                        Toast.callbackError();
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