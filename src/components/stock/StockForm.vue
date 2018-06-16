<template>
    <list-page>
        <template slot="content">
            <button-row>
                <template slot="button">
                    <router-link
                        tag="button"
                        class="btn btn-primary"
                        :to="{ name: 'stockList' }"
                    >Cancel
                    </router-link>
                    <button
                        class="btn btn-success"
                    >Save Details
                    </button>
                    <button
                        class="btn btn-danger"
                    >Delete Record
                    </button>
                    <button
                        class="btn btn-success"
                    >Create Contact
                    </button>
                </template>
            </button-row>
            <panel>
                <template slot="heading">STOCK</template>
                <template slot="body">
                    <form-page :id="'stockForm'">
                        <template slot="fields">
                            <div class="form-group">
                                <label class="col-sm-4">Type</label>
                                <div class="col-sm-8">
                                    <label class="label-input">
                                        <select
                                            class="form-control"
                                        >
                                            <option v-for="stockType in enumStockType">{{ stockType}}</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4">Name</label>
                                <div class="col-sm-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Name"
                                        name="name"
                                    >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4">Country</label>
                                <div class="col-sm-8">
                                    <label class="label-input">
                                        <select
                                            class="form-control"
                                        >
                                            <option v-for="country in enumCountry">{{ country}}</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4">Currency</label>
                                <div class="col-sm-8">
                                    <label class="label-input">
                                        <select
                                            class="form-control"
                                        >
                                            <option v-for="currency in enumCurrency">{{ currency }}</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4">Sector</label>
                                <div class="col-sm-8">
                                    <label class="label-input">
                                        <select
                                            class="form-control"
                                        >
                                            <option v-for="stockSector in enumStockSector">{{ stockSector}}</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label class="col-sm-4">Entry Date</label>
                                <div class="col-sm-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Entry Date"
                                    >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4">Price (Buy)</label>
                                <div class="col-sm-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Price (Buy)"
                                        name="priceBuy"
                                    >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4">Quantity (Buy)</label>
                                <div class="col-sm-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Quantity (Buy)"
                                        name="quantityBuy"
                                    >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4">Price (Profit Target)</label>
                                <div class="col-sm-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Price (Target)"
                                        name="priceProfitTarget"
                                    >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4">Price (Stop Loss)</label>
                                <div class="col-sm-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Price (Stop Loss)"
                                        name="priceStopLoss"
                                    >
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label class="col-sm-4">Exit Date</label>
                                <div class="col-sm-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Exit Date"
                                    >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4">Price (Sell)</label>
                                <div class="col-sm-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Price (Sell)"
                                        name="priceSell"
                                    >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4">Quantity (Sell)</label>
                                <div class="col-sm-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Quantity (Sell)"
                                        name="quantitySell"
                                    >
                                </div>
                            </div>
                        </template>
                    </form-page>
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
    import FormPage from '../common/FormPage';
    import {
        enumStockType,
        enumCountry,
        enumCurrency,
        enumStockSector
    } from '../../utils/enum';
    
    export default {
        name: 'StockForm',
        components: {
            ListPage,
            ListTable,
            ButtonRow,
            Panel,
            FormPage
        },
        data() {
            return {
                enumStockType,
                enumCountry,
                enumCurrency,
                enumStockSector
            };
        }
    };
</script>

<style scoped lang="scss">

</style>