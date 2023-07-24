<template>
  <div class="relative">
    <button
      type="button"
      class="bg-blue-500 px-4 py-2 text-white rounded-md shadow-sm"
      @click="filterPopover"
    >
      Filter Calls
    </button>

    <div
      v-if="isFilterPopoverOpen"
      class="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-slate-50 ring-1 ring-black ring-opacity-5 z-50"
    >
      <div class="py-1">
        <div class="px-4 py-2">
          <label class="block text-sm font-medium text-gray-700">From</label>
          <input
            v-model="filter.from"
            type="text"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div class="px-4 py-2">
          <label class="block text-sm font-medium text-gray-700">To</label>
          <input
            v-model="filter.to"
            type="text"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div class="px-4 py-2">
          <label class="block text-sm font-medium text-gray-700">Limit</label>
          <input
            v-model="filter.limit"
            type="text"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div class="px-4 py-2">
          <label class="block text-sm font-medium text-gray-700">Call ID</label>
          <input
            v-model="filter.call_id"
            type="text"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div class="px-4 py-2">
    <label class="block text-sm font-medium text-gray-700">Date From</label>
    <input
      v-model="filter.date_from"
      type="text"
      placeholder="YYYY-MM-DD HH:mm:ss"
      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
  </div>

  <div class="px-4 py-2">
    <label class="block text-sm font-medium text-gray-700">Date To</label>
    <input
      v-model="filter.date_to"
      type="text"
      placeholder="YYYY-MM-DD HH:mm:ss"
      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
  </div>
        <div class="px-4 py-2">
          <label class="block text-sm font-medium text-gray-700">Trashed</label>
          <select
            v-model="filter.trashed"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select an option</option>
            <option value="with only">With Only</option>
            <option value="only">Only</option>
          </select>
        </div>
      </div>
      <div class="px-4 py-2">
        <button
          class="w-full bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-indigo-700"
          @click="applyFilters"
        >
          Apply Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['filtersApplied'],
  data() {
    return {
      filter: {
        from: '',
        limit: '',
        to: '',
        call_id: '',
        date_from: '',
        date_to: '',
        trashed: '',
        page: ''
      },
      isFilterPopoverOpen: false
    }
  },
  mounted() {
    document.addEventListener('click', this.handleDocumentClick)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleDocumentClick)
  },
  methods: {
    filterPopover() {
      this.isFilterPopoverOpen = !this.isFilterPopoverOpen
    },
    applyFilters() {
      this.filterPopover()
      this.$emit('filtersApplied', this.filter)
    },
    handleDocumentClick(event) {
      if (this.isFilterPopoverOpen && !this.$el.contains(event.target)) {
        this.filterPopover()
      }
    }
  }
}
</script>
