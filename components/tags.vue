<template>
  <button
    class="dark:bg-gray-500 bg-gray-300 text-base py-1 px-3 rounded-md focus:outline-none transition ease-in-out duration-500 hover:bg-gray-500 abolute right-5 mr-1 dark:text-white text-black font-semibold"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: '',
  },
}
</script>

<style>
</style>
