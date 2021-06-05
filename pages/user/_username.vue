<template>
    <div
      class="bg-gray-100 flex dark:text-gray-300 text-gray-800 flex-wrap-reverse flex-col md:grid-cols-3 m-auto dark:bg-gray-900"
    >
      <div class="block w-full mb-4 mt-10">
        <div
          class="bg-white dark:bg-gray-700 w-full dark:border-transparent rounded-md border-2 border-gray-200 mt-4 px-6 pt-4 py-4"
        >
          <div class="px-4 py-2">
            <img
              :src="$auth.user.profile.profile_pic"
              class="h-44 m-auto rounded-full"
            />
            <center>
              <p
                class="text-2xl m-auto mt-6 justify-self-center font-semibold"
              >
                {{ $auth.user.username }}
              </p>
            <p class="text-lg font-light mt-4 m-auto justify-self-center">
              {{ $auth.user.profile.bio }}
            </p>
            </center>
            <div class="flex items-center justify-center mt-6">
              <div class="flex-col">
                <p class="text-2xl  font-light px-2">+0</p>
                <p class="mt-2 0">Vote ratio</p>
              </div>
              <div class="flex-col ml-4">
                <p class="text-2xl  font-light px-2">78</p>
                <p class="mt-2 ">Followers</p>
              </div>
            </div>
            <center>
              <button
                class="bg-white border-2 mt-6 border-blue-600 py-1 px-5 rounded mr-8 text-blue-600 hover:bg-blue-600 hover:text-white transition ml-4 ease-in duration-600 text-lg font-semibold"
              >
                Follow
              </button>
            </center>
          </div>
        </div>
        <topics title="Skills" class="" />
      </div>
      <div class="md:col-span-2 block md:mt-20">
        <div v-for="post in posts" :key="post.id">
          <post :mumble="post" />
        </div>
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
    await this.$axios
      .get(`/api/users/${this.$auth.user.username}/mumbles/`)
      .then((res) => this.posts = res.data)
  },
}
</script>

<style>
</style>
