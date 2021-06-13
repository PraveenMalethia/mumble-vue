<template>
  <div
    class="
      bg-gray-100
      flex
      dark:text-gray-300
      text-gray-800
      flex-wrap-reverse flex-col
      md:grid-cols-3
      m-auto
      dark:bg-gray-900
    "
  >
    <div class="block w-full mb-4 mt-10">
      <div
        class="
          bg-white
          dark:bg-gray-700
          w-full
          dark:border-transparent
          rounded-md
          border-2 border-gray-200
          mt-4
          px-6
          pt-4
          py-4
        "
      >
        <div class="px-4 py-2">
          <img
            :src="user.profile_pic"
            class="h-44 m-auto rounded-full"
          />
          <center>
            <p class="text-2xl m-auto mt-6 justify-self-center font-semibold">
              {{ user.username }}
            </p>
            <p class="text-lg font-light mt-4 m-auto justify-self-center">
              {{ user.bio }}
            </p>
          </center>
          <div class="flex items-center justify-center mt-6">
            <div class="flex-col">
              <p class="text-2xl font-light px-2">+0</p>
              <p class="mt-2 0">Vote ratio</p>
            </div>
            <div class="flex-col ml-4">
              <p class="text-2xl font-light px-2">{{user.followers.length}}</p>
              <p class="mt-2">Followers</p>
            </div>
          </div>
          <center>
            <button class="btn-primary">Follow</button>
          </center>
        </div>
      </div>
      <topics title="Skills" />
    </div>
    <div class="md:col-span-2 block">
      <div v-for="post in posts" :key="post.id">
        <client-only>
          <post :mumble="post" v-if="!loading" />
        </client-only>
      </div>
    </div>
    <div v-if="loading">
      <postloading />
      <postloading />
      <postloading />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      loading: false,
      user: null,
    }
  },
  async fetch() {
    if (this.$route.params.username == this.$auth.user.username) {
      this.user = this.$auth.user.profile
      console.log(this.user)
    } else {
      this.loading = true
      await this.$axios
        .get(`/api/users/${this.$route.params.username}/mumbles/`)
        .then((res) => {
          this.posts = res.data
        })
      await this.$axios
        .get(`/api/users/${this.$route.params.username}/`)
        .then((res) => {
          this.user = res.data.profile
        })
        this.loading = false
    }
  },
}
</script>

<style>
</style>
