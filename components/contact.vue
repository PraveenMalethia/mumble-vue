<template>
  <div v-bind:class="{ 'bg-blue-400 dark:bg-purple-800': contact.username == currentName}" 
    class="mr-2 flex max-w-full py-2 cursor-pointer mb-2" @click="changeCurrent(contact.username)">
    <div class="flex justify-center	md:justify-start max-w-full">
      <img src="https://mumbleapi.herokuapp.com/static/images/default.png" class="h-11 ml-5 md:ml-0 w-10">
      <div class="ml-1 max-w-min truncate md:pr-7 hidden md:block">
        <div class="flex justify-between md:max-w-xs mb-1">
          <p class="text-gray-800 dark:text-gray-200 -mt-1 max-w-full truncatecursor-pointer">{{ contact.username }}</p>
          <p class="text-gray-800 dark:text-gray-200 text-xs ml-2 cursor-pointer">4.14 pm</p>
        </div>
        <p class="text-sm text-gray-800 dark:text-gray-200 max-w-full truncate cursor-pointer">{{ contact.lastmessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
    currentName:String
  },
  methods: {
    changeCurrent(username){
      this.$emit('changeCurrent', username)
    }
  }
}
</script>

<style>

</style>
