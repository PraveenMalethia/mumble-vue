<template>
  <div class="mt-4">
    <div
      class="bg-white shadow-sm dark:bg-gray-800 rounded-md py-5 px-5 border-2 dark:border-gray-400 border-gray-200 w-full md:w-11/12"
    >
      <textarea
        placeholder="Share your brilliant thought"
        v-model="content"
        class="p-4 mt-4 bg-gray-100 dark:bg-gray-800 h-24 rounded-lg width-me border-2 border-gray-200 dark:text-gray-100 focus:border-2 focus:outline-none focus:border-blue-300"
      >
      </textarea>

      <div v-show="error" class="ml-2 text-red-500 font-bold trasition easy-in-out duration-500">Mumble can't be Empty</div>
      <button class="btn-primary" @click="Mumble"><fa icon="code" /> Mumble Now</button>
    </div>
    <div v-for="post in posts" :key="post.id">
      <client-only>
      <post :mumble="post"  v-if="!loading" v-linkified:options="{className:'text-blue-500'}" />
      </client-only>
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
      content:'',
      error:false,
      loading:true
    }
  },
  mounted(){
    this.fetch()
  },
  methods: {
    async fetch() {
    this.error = false
    this.loading = true

    this.posts = await this.$axios
      .get('https://mumbleapi.herokuapp.com/api/mumbles/')
      .then((res) => res.data.results)
      this.loading = false
    },
    Mumble(){
      if (this.content.length > 0){
        this.$axios.post('/api/mumbles/create/',{content:this.content})
      .then((res) => this.$nuxt.refresh())
      this.content = null
      }
      else{
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 2000)
      }
    }
  }
}
</script>

<style>
.width-me {
  width: 98%;
}
</style>

