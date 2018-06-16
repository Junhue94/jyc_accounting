<template>
    <list-page>
        <template slot="content">
            <button-row>
                <template slot="button">
                    <button
                        class="btn btn-success"
                        @click="updateStockDetails"
                        v-if="stockId"
                    >Save Details
                    </button>
                    <button
                        class="btn btn-danger"
                        data-toggle="modal"
                        :data-target="generateModalId(stockId)"
                        v-if="stockId"
                    >Delete Stock
                    </button>
                    <button
                        class="btn btn-primary"
                        @click="createStock"
                        v-else
                    >Create Stock
                    </button>
                    <router-link
                            tag="button"
                            class="btn btn-warning"
                            :to="{ name: 'stockList' }"
                    >Cancel
                    </router-link>
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
                                            name="type"
                                            v-model="stockDetails.type"
                                        >
                                            <option
                                                :selected="stockDetails.type"
                                                :value="stockType"
                                                v-for="stockType in enumStockType"
                                            >{{ stockType}}
                                            </option>
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
                                        v-model="stockDetails.name"
                                    >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4">Country</label>
                                <div class="col-sm-8">
                                    <label class="label-input">
                                        <select
                                            class="form-control"
                                            name="country"
                                            v-model="stockDetails.country"
                                        >
                                            <option
                                                :selected="stockDetails.country"
                                                :value="country"
                                                v-for="country in enumCountry"
                                            >{{ country}}</option>
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
                                            name="currency"
                                            v-model="stockDetails.currency"
                                        >
                                            <option
                                                :selected="stockDetails.currency"
                                                :value="currency"
                                                v-for="currency in enumCurrency"
                                            >{{ currency }}</option>
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
                                            name="sector"
                                            v-model="stockDetails.sector"
                                        >
                                            <option
                                                :selected="stockDetails.sector"
                                                :value="stockSector"
                                                v-for="stockSector in enumStockSector"
                                            >{{ stockSector}}</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label class="col-sm-4">Entry Date</label>
                                <div class="col-sm-8">
                                    <date-picker
                                        :config="dateFormat"
                                        v-model="stockDetails.entryDate"
                                    ></date-picker>
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
                                        v-model="stockDetails.priceBuy"
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
                                        v-model="stockDetails.quantityBuy"
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
                                        v-model="stockDetails.priceProfitTarget"
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
                                        v-model="stockDetails.priceStopLoss"
                                    >
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label class="col-sm-4">Exit Date</label>
                                <div class="col-sm-8">
                                    <date-picker
                                        :config="dateFormat"
                                        v-model="stockDetails.exitDate"
                                    ></date-picker>
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
                                        v-model="stockDetails.priceSell"
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
                                        v-model="stockDetails.quantitySell"
                                    >
                                </div>
                            </div>
                        </template>
                    </form-page>
                </template>
            </panel>
    
            <Modal
                :id="stockId"
                v-if="stockId"
            >
                <template slot="header">Confirm delete this stock?</template>
                <template slot="footer">
                    <button
                        type="button"
                        class="btn btn-success"
                        data-dismiss="modal"
                        @click="deleteStock"
                    >Yes</button>
                    <button
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                    >No</button>
                </template>
            </Modal>
        </template>
    </list-page>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import { Toast } from '../../utils/toaster';
    import { Logger } from '../../utils/logger';
    import { DatePicker } from '../../utils/datePicker';
    import { FormValidator } from '../../utils/formValidation';
    import { generateModalId } from '../../utils/helper';
    import ListPage from '../common/ListPage';
    import ListTable from '../common/ListTable';
    import ButtonRow from '../common/ButtonRow';
    import Panel from '../common/Panel';
    import FormPage from '../common/FormPage';
    import Modal from '../common/Modal';
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
            FormPage,
            Modal
        },
        data() {
            return {
                enumStockType,
                enumCountry,
                enumCurrency,
                enumStockSector,
                dateFormat: DatePicker.dateFormat()
            };
        },
        methods: {
            ...mapActions('stock', {
                create: 'createStock',
                get: 'getStockDetails',
                update: 'updateStockDetails',
                remove: 'deleteStock',
                setStockId: 'setStockId',
                clearState: 'clearState'
            }),
            loadStock() {
                this.clearState();
                FormValidator.resetForm(this.stockForm);
            
                if (this.$route && this.$route.params && this.$route.params.id) {
                    this.setStockId(this.$route.params.id);
                    this.get(this.$route.params.id)
                        .catch((err) => {
                            Logger.error(err);
                            Toast.callbackError();
                        });
                }
            },
            createStock() {
                if (FormValidator.isFormValid(this.stockForm)) {
                    console.log(1, this.stockDetails);
                    this.create(this.stockDetails)
                        .then((res) => {
                            console.log(2, res);
                            return this.$router.push({
                                name: 'stockList'
                            });
                        })
                        .then(() => {
                            return Toast.success('Create Stock', 'Successfully created');
                        })
                        .catch((err) => {
                            Logger.error(err);
                            Toast.callbackError();
                        });
                }
            },
            updateStockDetails() {
                if (FormValidator.isFormValid(this.stockForm)) {
                    this.update(this.stockDetails)
                        .then(() => {
                            return Toast.success('Update Stock Details', 'Successfully updated');
                        })
                        .catch((err) => {
                            Logger.error(err);
                            Toast.callbackError();
                        });
                }
            },
            deleteStock() {
                this.remove(this.stockId)
                    .then(() => {
                        return this.$router.push({
                            name: 'stockList'
                        });
                    })
                    .then(() => {
                        return Toast.success('Remove Stock', 'Successfully removed');
                    })
                    .catch((err) => {
                        Logger.error(err);
                        Toast.callbackError();
                    });
            },
            generateModalId
        },
        computed: {
            ...mapGetters('stock', {
                fetchStockId: 'stockId',
                fetchStockDetails: 'stockDetails'
            }),
            stockDetails() {
                return this.fetchStockDetails;
            },
            stockId() {
                return this.fetchStockId;
            }
        },
        forms: {
            stockForm: {
                selector: '#stockForm',
                options: {
                    rules: {
                        'type': {
                            required: true
                        },
                        'name': {
                            required: true
                        },
                        'country': {
                            required: true
                        },
                        'currency': {
                            required: true
                        },
                        'sector': {
                            required: true
                        },
                        'priceBuy': {
                            number: true
                        },
                        'quantityBuy': {
                            number: true
                        },
                        'priceProfitTarget': {
                            number: true
                        },
                        'priceStopLoss': {
                            number: true
                        },
                        'priceSell': {
                            number: true
                        },
                        'quantitySell': {
                            number: true
                        }
                    }
                }
            }
        },
        created() {
            this.loadStock();
        }
    };
</script>

<style scoped lang="scss">

</style>