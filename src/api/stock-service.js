/**
 * API Stock Service
 */
import { STOCK_SERVICE } from './index';
import { StockMockHook } from './_mock/stock/stock-mock-hook';

class StockService {
    constructor() {
        this.service = STOCK_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(StockMockHook);
        }
    }
    /**
     * Create Stock
     * @param stockDetails
     */
    createStock(stockDetails) {
        return this.service.create(stockDetails);
    }
    /**
     * Get Stock
     * @param stockId
     */
    getStockDetails(stockId) {
        return this.service.get(stockId);
    }
    /**
     * Update Stock
     * @param stockDetails
     */
    updateStockDetails(stockDetails) {
        return this.service.update(stockDetails._id, stockDetails);
    }
    /**
     * Delete Stock
     * @param stockId
     */
    deleteStock(stockId) {
        return this.service.remove(stockId);
    }
    /**
     * Find Stock List
     */
    findStockList(options) {
        return this.service.find(options);
    }
}

export default StockService;
