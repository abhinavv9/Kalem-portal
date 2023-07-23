<template>
    <div>
      <a href="#" class="text-indigo-600 hover:text-indigo-900" @click="showModal = true">
        Delete<span class="sr-only">, {{ call.call_id }}</span>
      </a>
  
      <div
        v-if="showModal"
        class="fixed z-50 inset-0 flex items-center justify-center overflow-auto bg-opacity-75 bg-slate-100"
        @click="showModal = false"
      >
        <div class="bg-white rounded-lg px-4 py-6 w-96" @click.stop>
          <div
            class="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
            @click="showModal = false"
          >
            <svg
              class="h-6 w-6 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div class="mt-4 text-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900">{{ content.title }}</h3>
            <div class="h-auto p-2">
              <p class="text-sm text-gray-500 whitespace-normal">
                {{ content.body }}
              </p>
            </div>
          </div>
          <div class="mt-4">
            <button
              type="button"
              class="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
              @click="content.btnPrompt == 'Delete' ? deleteCall() : closeModal()"
            >
              {{ content.btnPrompt }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useCallsStore } from '../../stores/CallsStore' // Adjust the path to your actual store location
  const callsStore = useCallsStore()
  export default {
    props: {
      call: {
        type: Object,
        required: true
      }
    },
    emits: ['removed'],
    data() {
      return {
        showModal: false,
        loading: false,
        content: {
          title: 'Delete Call',
          body: 'Are you sure you want to delete the call with ID: ' + this.call.call_id + '?',
          btnPrompt: 'Delete'
        }
      }
    },
    onMounted() {
      this.deleteCall()
    },
    methods: {
      async deleteCall() {
        this.loading = true
  
        try {
          // Make the API call to delete the call
          const res = await callsStore.delete_call(this.call.call_id)
          if (res.status !== 204) {
            throw new Error('Something went wrong!')
          }
          this.content.title = 'Call Deleted'
          this.content.body = 'The call with ID: ' + this.call.call_id + ' was successfully deleted.'
          this.content.btnPrompt = 'Close'
        } catch (err) {
          // Handle the error if necessary
          this.content.title = 'Something Went Wrong!'
          this.content.body =
            'There was an error deleting the call with ID: ' + this.call.call_id + '.'
          this.content.btnPrompt = 'Close'
          throw new Error('Something went wrong!')
        }
      },
      closeModal() {
        this.showModal = false
  
        // Emit the 'removed' event to inform the parent component (the table) that the call was removed
        this.$emit('removed')
      }
    }
  }
  </script>