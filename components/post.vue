<template>
  <div
    class="bg-white dark:bg-gray-700 w-full md:w-11/12 rounded-md border-2 border-gray-200 mt-6 py-6 px-4"
  >
    <div class="flex justify-between items-center">
      <div class="flex">
        <img
          :src="mumble.original_mumble ? mumble.original_mumble.user.profile_pic : mumble.user.profile_pic"
          class="h-10 md:h-12 lg:h-14 rounded-full"
        />
        <div class="ml-4">
          <p class="font-bold lg:text-lg dark:text-gray-200">{{mumble.original_mumble ? mumble.original_mumble.user.username : mumble.user.username}}</p>
          <p class="font-light dark:text-gray-200">@{{mumble.original_mumble ? mumble.original_mumble.user.username : mumble.user.username}}</p>
        </div>
      </div>
      <div>
        <p class="text-gray-600 lg:text-lg dark:text-gray-200">10 days ago</p>
      </div>
    </div>
    <div class="flex items-center px-4 py-2">
      <div>
        <button
          @click="UpdateVote('upvote')"
          class="px-1 focus:outline-none text-green-300"
        >
          <fa icon="chevron-up" />
        </button>
        <p class="pl-1.5 dark:text-gray-200">{{mumble.original_mumble ? mumble.original_mumble.vote_rank : mumble.vote_rank}}</p>
        <button
          @click="UpdateVote('downvote')"
          class="px-1 focus:outline-none text-red-400"
        >
          <fa icon="chevron-down" />
        </button>
      </div>
      <div class="ml-6">
        <p>
          <div class="text-gray-600 dark:text-gray-200" v-if="mumble.original_mumble == null">
            {{mumble.content}}
          </div>
          <div class="text-gray-600 dark:text-gray-200" v-else>
            {{mumble.original_mumble.content}}
          </div>
        </p>
      </div>
    </div>
    <hr class="mt-4 mb-4 bg-gray-300 " />
    <div class="ml-5  grid grid-cols-3">
      <div>
      <fa class="dark:text-gray-200 ml-5" icon="comments"/><span class="ml-2 dark:text-gray-100">{{mumble.original_mumble ? mumble.original_mumble.comment_count : mumble.comment_count}}</span>
      </div>
      <div>
      <fa class="dark:text-gray-200 xs:ml-10 sm:ml-20 md:ml-10 lg:ml-16 xl:ml-24" icon="comment"/>
      </div>
      <div>
      <fa class="dark:text-gray-200 xs:ml-20 sm:ml-32 md:ml-24 lg:ml-20 xl:ml-36" icon="paper-plane"/><span class="ml-2 dark:text-gray-100">{{mumble.original_mumble ? mumble.original_mumble.share_count : mumble.share_count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mumble: {
      type: Object,
      required: true,
    },
  },
  methods: {
    UpdateVote(vote) {
      this.$axios.post('/api/mumbles/vote/',{post_id:this.mumble.id,value:vote})
      .then(()=>{
        this.$nuxt.refresh()
      })
    },
  },
}
</script>
