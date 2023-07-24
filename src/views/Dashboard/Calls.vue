<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Recent Calls</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all the calls in your account.</p>
      </div>
      <!-- <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add user
        </button>
      </div> -->
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <FilterComponent @filtersApplied="applyFilters" />
          <table class="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                >
                  Call ID
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                >
                  Application
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                >
                  from
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  to
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  answer_at
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  hangup_at
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  duration
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  cost
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  status
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                >
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(call, index) in calls.calls.data" :key="call.call_id">
                <td
                  :class="[
                    index !== calls.calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                  ]"
                >
                  {{ call.call_id }}
                </td>
                <td
                  :class="[
                    index !== calls.calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.application_id }}
                </td>
                <td
                  :class="[
                    index !== calls.calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.from }}
                </td>
                <td
                  :class="[
                    index !== calls.calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.to }}
                </td>
                <td
                  :class="[
                    index !== calls.calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.answer_at }}
                </td>
                <td
                  :class="[
                    index !== calls.calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.hangup_at }}
                </td>
                <td
                  :class="[
                    index !== calls.calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.duration }}
                </td>
                <td
                  :class="[
                    index !== calls.calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.cost }}
                </td>
                <td
                  :class="[
                    index !== calls.calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.status }}
                </td>
                <td
                  :class="[
                    index !== calls.calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                  ]"
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit<span class="sr-only">, {{ call.call_id }}</span></a
                  >
                </td>
                <td
                  :class="[
                    index !== calls.calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                  ]"
                >
                  <!-- Replace the Delete button with deleteCall component -->
                  <deleteCall :call="call" @removed="onCallRemoved" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div>
      <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div class="hidden sm:block">
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{ (currentPage - 1) * calls.calls.per_page + 1 }}</span>
            to
            <span class="font-medium">{{
              Math.min(currentPage * calls.calls.per_page, calls.calls.total)
            }}</span>
            of
            <span class="font-medium">{{ calls.calls.total }}</span>
            results
          </p>
        </div>
        <div class="flex items-center">
          <div class="flex space-x-2">
            <button
              v-if="currentPage > 1"
              class="w-11 px-2 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="goToPage(currentPage - 1)"
            >
              Prev
            </button>
            <button
              v-for="pageNumber in pagesArray"
              :key="pageNumber"
              :class="[
                'w-11 px-2 py-2 text-sm font-medium',
                pageNumber === currentPage
                  ? 'text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  : 'text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              ]"
              @click="goToPage(pageNumber)"
            >
              {{ pageNumber }}
            </button>
            <button
              v-if="currentPage < totalPages"
              class="w-11 px-2 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="goToPage(currentPage + 1)"
            >
              Next
            </button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import deleteCall from '../../components/callManagement/deleteCalls.vue'
import FilterComponent from '../../components/filterCalls.vue'
import { useCallsStore } from '../../stores/CallsStore'
   const callsStore = useCallsStore()
export default {
  components: {
    deleteCall,
    FilterComponent
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 1,
      calls: storeToRefs(callsStore),
      filters: {
        from: '',
        limit: '',
        to: '',
        call_id: '',
        date_from: '',
        date_to: '',
        trashed: '',
        page: 1
      },
      pagesArray: []
    }
  },
  watch: {
    calls: {
      handler() {
        console.log(this.calls)
        this.currentPage = this.calls.calls.current_page
        this.totalPages = this.calls.calls.total
        this.pagesArray = this.updatePagesArray()
      },
      deep: true
    }
  },
 mounted() {
    callsStore.get_calls(this.filters)
  
  }, 
  methods: {
    onCallRemoved() {
      this.filters.page = this.currentPage
      callsStore.get_calls(this.filters)
    },
    goToPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber
        this.filters.page = pageNumber
        callsStore.get_calls(this.filters)
      }
    },
    updatePagesArray() {
      const totalPagesArray = []
      const startPage = Math.max(1, this.currentPage - 2)
      const endPage = Math.min(this.totalPages, startPage + 4)

      for (let i = startPage; i <= endPage; i++) {
        totalPagesArray.push(i)
      }

      return totalPagesArray
    },
    applyFilters(filters) {
      callsStore.get_calls(filters)
    }
  }
}
</script>