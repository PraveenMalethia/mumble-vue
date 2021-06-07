<template>
  <div class="mt-4">
    <div
      class="
        bg-white
        shadow-sm
        dark:bg-gray-800
        rounded-md
        py-5
        px-5
        border-2
        dark:border-transparent
        border-gray-200
        w-full
        md:w-11/12
      "
    >
      <textarea
        placeholder="Share your brilliant thought"
        v-model="content"
        class="
          p-4
          mt-4
          bg-gray-100
          dark:bg-gray-900
          h-24
          rounded-lg
          width-me
          border-2 border-gray-200
          dark:border-2 dark:border-gray-600
          dark:text-gray-100
          focus:border-2
          focus:outline-none
          focus:border-blue-300
          dark:focus:border-2 dark:focus:border-blue-300
          transition
          duration-500
          ease-in-out
        "
      >
      </textarea>

      <div
        v-show="error"
        class="ml-2 text-red-500 font-bold trasition easy-in-out duration-500"
      >
        Mumble can't be Empty
      </div>
      <button class="btn-primary" @click="Mumble">
        <fa icon="code" /> Mumble Now
      </button>
    </div>
    <div v-for="post in posts" :key="post.id">
      <client-only>
        <post
          :mumble="post"
          v-if="!loading"
          
        />
      </client-only>
    </div>
    <div>
      <button class="btn-primary" v-if="more" @click="LoadMore">
        {{ more_loading ? 'Loading . . .':'Load More'}}
      </button>
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
      content: '',
      error: false,
      loading: true,
      next: '',
      more: false,
      more_loading: false,
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      this.error = false
      this.loading = true

      await this.$axios.get('/api/mumbles/').then((res) => {
        this.posts = res.data.results
        this.next = res.data.next
        if (res.data.next) {
          this.more = true
        }
      })
      this.loading = false
    },
    Mumble() {
      if (this.content.length > 0) {
        this.$axios
          .post('/api/mumbles/create/', { content: this.content })
          .then((res) => {
            this.posts.splice(0, 0, res.data)
          })
        this.content = null
      } else {
        this.error = true
        setTimeout(() => {
          this.error = false
        }, 2000)
      }
    },
    LoadMore() {
      this.more_loading = true
      this.$axios.get(this.next).then((res) => {
        for (let i = 0; i < res.data.results.length; i++) {
          this.posts.push(res.data.results[i])
          this.more_loading = false
        }
        if (res.data.next != null) {
          this.next = res.data.next
        } else {
          this.more = false
        }
      })
    },
  },
}
</script>

<style>
.width-me {
  width: 98%;
}
</style>

