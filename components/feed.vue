<template>
  <div class="mt-4">
    <div
      class="bg-white shadow-sm dark:bg-gray-700 rounded-md py-5 px-5 border-2 dark:border-gray-400 border-gray-200 w-full md:w-11/12"
    >
      <textarea
        placeholder="Share your brilliant thought"
        class="p-4 mt-4 bg-gray-100 dark:bg-gray-800 h-24 rounded-lg width-me border-2 border-gray-200 border-gray-300 focus:border-2 focus:outline-none focus:border-blue-300"
      >
      </textarea>

      <button class="btn-primary"><fa icon="code" /> Mumble Now</button>
    </div>
    <div v-for="post in posts" :key="post.id">
      <post :mumble="post" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    this.posts = await this.$axios
      .get('https://mumbleapi.herokuapp.com/api/mumbles/')
      .then((res) => res.data.results)
  },
}
</script>

<style>
.width-me {
  width: 98%;
}
</style>
