<template>
  <div
    class="bg-white rounded-md border-2 border-gray-200 dark:border-transparent w-full mt-6 mb-10 dark:bg-gray-800"
  >
    <div class="px-6 pt-4 py-4 w-full">
      <p class="text-gray-500 font-semibold text-2xl mb-2 dark:text-gray-300">
        Topic You Follow
      </p>
      <router-link to="/topics" class="py-4 text-blue-500 font-semibold"
        >View More</router-link
      >
    </div>

    <hr class="w-full bg-gray-400 dark:border dark:border-gray-700 dark:bg-gray-700 rounded" />

    <div class="flex-wrap px-3 py-2">
      <tags text="Javascript" />
      <tags text="Python" />
      <tags text="Vue Js" />
      <tags text="C++" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
