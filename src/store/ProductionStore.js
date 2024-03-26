import { defineStore } from 'pinia';
import axiosInstance from "../../services/axios";

export const useProductStore = defineStore('product', {
    state: () => ({
        productsState: [],
    }),
    getters: {
        products: (state) => state.productsState,
    },
    actions: {
        async getProducts(params = {}) {
            try {
                const response = await axiosInstance.get('/products', {
                    params: {
                        limit: 10,
                        ...params
                    }
                });
                this.productsState = response.data;
                return response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        },
    }
});
