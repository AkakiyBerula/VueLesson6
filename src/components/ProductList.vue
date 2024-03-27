<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="list-group mb-3">
          <div class="list-group-item active">
            <div class="row">
              <div class="col">ID</div>
              <div class="col">Назва</div>
              <div class="col">Категорія</div>
              <div class="col">Ціна</div>
            </div>
          </div>
          <div class="list-group-item" v-for="item in paginatedList" :key="item.id">
            <div class="row">
              <div class="col">{{ item.id }}</div>
              <div class="col">{{ item.title }}</div>
              <div class="col">{{ item.category }}</div>
              <div class="col">{{ item.price }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="d-flex justify-content-between align-items-center">
          <button @click="prevPage" :disabled="currentPage === 1" class="btn btn-primary">&lt;</button>
          <p class="m-0">Сторінка {{ currentPage }} / {{ totalPages }}</p>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="btn btn-primary">&gt;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { usePaginationStore } from '@/store/PaginationStore';

export default {
  created() {
    this.store = usePaginationStore();
  },
  methods: {
    prevPage() {
      this.currentPage = this.store.prevPage();
      console.log(this.currentPage)
      this.updatePaginatedList();
    },
    nextPage() {
      this.currentPage = this.store.nextPage(this.currentPage);
      console.log(this.currentPage)
      this.updatePaginatedList();
    },
    updatePaginatedList() {
      const store = usePaginationStore();
      this.paginatedList = store.paginatedList;
    },
  },
  async mounted() {
    await this.store.populateList();
    this.currentPage = this.store.currentPage;
    this.totalPages = this.store.totalPages;
    this.paginatedList = this.store.paginatedList;
    this.totalPages = this.store.totalPages;
  },
  data() {
    return {
      store: null,
      currentPage: 1,
      totalPages: 1,
      paginatedList: [],
    };
  },
};
</script>


