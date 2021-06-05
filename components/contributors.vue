<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-md border-2 border-gray-200 dark:border-transparent w-full"
  >
    <div class="px-6 pt-4 py-4 w-full">
      <p class="text-gray-500 font-semibold text-2xl mb-2 dark:text-gray-200">
        Top Contributors
      </p>
      <router-link to="/contributors" class="py-4 text-blue-500 font-semibold"
        >View More</router-link
      >
    </div>
    <hr class="w-full mb-4 bg-gray-300 rounded" />
    <div v-for="(contributor,i) in contributors" :key="contributor.id">
      <usermini v-if="i<4"
        :user="contributor"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contributors: [],
    }
  },
  async fetch() {
    this.contributors = await this.$axios
      .get('https://mumbleapi.herokuapp.com/api/users/')
      .then((res) => res.data.results)
  },
}
</script>

<style>
</style>
