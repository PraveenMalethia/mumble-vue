<template>
  <div
    class="bg-white dark:bg-gray-700 w-full md:w-11/12 rounded-md border-2 border-gray-200 mt-6 py-6 px-4"
  >
    <div class="flex justify-between items-center">
      <div class="flex">
        <img
          :src="mumble.user.profile_pic"
          class="h-10 md:h-12 lg:h-14 rounded-full"
        />
        <div class="ml-4">
          <p class="font-bold lg:text-lg dark:text-gray-200">{{mumble.user.username}}</p>
          <p class="font-light dark:text-gray-200">@{{mumble.user.username}}</p>
        </div>
      </div>
      <div>
        <p class="text-gray-600 lg:text-lg dark:text-gray-200">10 days ago</p>
      </div>
    </div>
    <div class="flex items-center px-4 py-2">
      <div>
        <button
          @click="UpVote()"
          class="px-1 focus:outline-none text-green-300"
        >
          <fa icon="chevron-up" />
        </button>
        <p class="pl-1.5 dark:text-gray-200">{{mumble.original_mumble ? mumble.original_mumble.vote_rank : mumble.vote_rank}}</p>
        <button
          @click="DownVote()"
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
    <hr class="mt-4 mb-4 bg-gray-300" />
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
    UpVote() {
      console.log(this.mumble)
    },
    DownVote() {
      console.log(this.mumble)
    },
  },
}
</script>
