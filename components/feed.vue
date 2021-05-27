<template>
  <div class="mt-4">
    <div
      class="bg-white shadow-sm dark:bg-gray-700 rounded-md py-5 px-5 border-2 dark:border-gray-400 border-gray-200 w-full md:w-11/12"
    >
      <textarea
        placeholder="Share your brilliant thought"
        v-model="content"
        class="p-4 mt-4 bg-gray-100 dark:bg-gray-800 h-24 rounded-lg width-me border-2 border-gray-200 focus:border-2 focus:outline-none focus:border-blue-300"
      >
      </textarea>
      <div v-show="error" class="ml-2 text-red-500 font-bold trasition easy-in-out duration-500">Mumble can't be Empty</div>
      <button class="btn-primary" @click="Mumble"><fa icon="code" /> Mumble Now</button>
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
      content:'',
      error:false,
    }
  },
  async fetch() {
    this.error = false
    this.posts = await this.$axios
      .get('https://mumbleapi.herokuapp.com/api/mumbles/')
      .then((res) => res.data.results)
  },
  methods: {
    Mumble(){
      if (this.content.length > 0){
        this.$axios.post('/api/mumbles/create/',{content:this.content})
      .then((res) => this.$nuxt.refresh())
      }
      else{
        this.error = true;
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
