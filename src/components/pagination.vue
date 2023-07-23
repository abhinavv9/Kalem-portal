<template>
    <nav class="flex items-center justify-center mt-6">
      <ul class="pagination">
        <li v-if="showPreviousButton">
          <button @click="changePage(currentPage - 1)" class="px-4 py-2 border rounded border-gray-400 hover:bg-gray-100">
            Previous
          </button>
        </li>
        <li v-for="pageNumber in totalPages" :key="pageNumber">
          <button
            @click="changePage(pageNumber)"
            :class="{'bg-blue-500 text-white': pageNumber === currentPage, 'border': pageNumber !== currentPage}"
            class="px-4 py-2 border rounded border-gray-400 hover:bg-gray-100"
          >
            {{ pageNumber }}
          </button>
        </li>
        <li v-if="showNextButton">
          <button @click="changePage(currentPage + 1)" class="px-4 py-2 border rounded border-gray-400 hover:bg-gray-100">
            Next
          </button>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true,
        default: 1,
      },
      totalPages: {
        type: Number,
        required: true,
      },
    },
emits: ['page-changed'],
    computed: {
      showPreviousButton() {
        return this.currentPage > 1;
      },
      showNextButton() {
        return this.currentPage < this.totalPages;
      },
    },
    methods: {
      changePage(pageNumber) {
        this.$emit('page-changed', pageNumber);
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles for the pagination component here */
  </style>
  