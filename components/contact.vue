<template>
  <nuxt-link
    :to="'/inbox/' + contact.id"
    class="
      mr-2
      ml-3
      flex
      max-w-full
      py-2
      cursor-pointer
      mb-2
      hover:bg-gray-300
      dark:hover:bg-gray-700
      transition
      duration-300
      ease-in-out
      rounded-lg
    "
  >
    <div class="flex justify-center md:justify-start max-w-full">
      <img
        :src="contact.reciever.profile_pic"
        class="h-11 ml-5 md:ml-0 w-10 rounded-full"
      />
      <div class="ml-1 truncate hidden md:pr-4 md:block">
        <div class="grid grid-cols-2 mb-1">
          <div class="w-full col-span-1">
            <div
              class="
                text-gray-800
                dark:text-gray-200
                -mt-1
                max-w-full
                truncate
                cursor-pointer
                ml-3
              "
            >
              {{ contact.reciever.username }}
            </div>
          </div>
          <div class="w-full col-span-1">
            <div
              class="
                text-gray-800
                dark:text-gray-200
                w-full
                text-xs
                ml-2
                truncate
                cursor-pointer
              "
            >
              {{ contact.updated | moment }}
            </div>
          </div>
        </div>

        <div
          class="
            inline-flex
            items-center
            bg-white
            leading-none
            ${props.textColor}
            rounded-full
            p-2
            shadow
            text-teal text-sm
          "
        >
          <span
            class="
              inline-flex
              bg-gray-700
              text-white
              rounded-full
              h-6
              px-3
              justify-center
              items-center
            "
          >
            {{contact.un_read_count}}
          </span>
          <span class="inline-flex px-2 text-gray-700">
            {{ contact.last_message.body }}
          </span>
        </div>

        <p
          class="
            text-sm text-gray-800
            dark:text-gray-200
            max-w-full
            truncate
            ml-3
            cursor-pointer
          "
        >
          
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import Vue from 'vue'
Vue.use(require('vue-moment'))
import moment from 'moment'
Vue.prototype.moment = moment
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
    currentName: String,
  },
  methods: {
    moment: function (date) {
      return moment(date)
    },
    date: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },
  },
}
</script>

<style>
</style>
