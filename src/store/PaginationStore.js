import { defineStore } from 'pinia';
import { useProductStore } from './ProductionStore'

export const usePaginationStore = defineStore('pagination', {
    state: () => ({
        list: [],
        pageSize: 5,
        currentPage: 1,
    }),
    getters: {
        totalPages() {
            return Math.ceil(this.list.length / this.pageSize);
        },
        paginatedList() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.list.slice(startIndex, endIndex);
        },
    },
    actions: {
        async populateList() {
            const productStore = useProductStore();
            const products = await productStore.getProducts();
            console.log(products)
            this.list = products;
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
            return this.currentPage
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
            return this.currentPage
        },
    },
});


