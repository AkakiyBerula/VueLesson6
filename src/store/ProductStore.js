import {defineStore} from 'pinia';
import axiosInstance from "../../services/axios";

export const useProductStore = defineStore('product', {
    state: () => ({
        productsState: [],
    }),
    getters: {
        products: (state) => state.productsState,
    },
    actions: {
        getProducts(params = {}) {
            axiosInstance.get('/products', {
                params: {
                    limit: 20,
                    ...params
                }
            })
                .then(response => {
                    console.log(response.data)
                    this.productsState = response.data;
                })
        },
    }
})