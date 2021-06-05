<template>
  <div class="bg-gray-100 dark:bg-gray-900 mb-20 w-screen md:w-full mt-10 md:mt-20 rounded-l-md overflow-hidden">
    <div v-for="contributor in contributors" :key="contributor.id">
      <contributor
        class="mt-4"
        :user="contributor"
      />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Mumble | Contributors',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Mumble | Tech space for real developers',
      },
    ],
  },
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
