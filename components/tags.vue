<template>
  <button
    class="bg-gray-700 text-base border-2 py-1 px-3 rounded-md focus:outline-none transition ease-in-out duration-500 hover:bg-gray-500 abolute right-5 mr-1 text-white font-semibold"
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
