<template>
 <div
    class="bg-white dark:bg-gray-800 w-full md:w-11/12 rounded-md border-2 border-gray-200 dark:border-transparent mt-6 py-6 px-4"
  >    
    <p v-if="mumble.original_mumble" class=" text-sm text-gray-600 dark:text-gray-300 mb-2 ml-3">
      <fa icon="paper-plane" class="mr-1"></fa>  <span class="italic">{{mumble.user.username}}</span> remumbled
    </p>
    <div class="flex justify-between items-center">
      <div class="flex">
        <img
          :src="mumble.original_mumble ? mumble.original_mumble.user.profile_pic : mumble.user.profile_pic"
          class="h-10 md:h-12 lg:h-14 rounded-full"
        />
        <div class="ml-4">
          <p class="font-bold lg:text-lg dark:text-gray-200 cursor-pointer"><router-link :to="'/user/'+username">{{mumble.original_mumble ? mumble.original_mumble.user.username : mumble.user.username}}</router-link></p>
          <p class="font-light dark:text-gray-200 cursor-pointer"><router-link :to="'/user/'">@{{mumble.original_mumble ? mumble.original_mumble.user.username : mumble.user.username}}</router-link></p>
        </div>
      </div>
      <div>
        <p class="text-gray-600 lg:text-lg dark:text-gray-200">{{mumble.created|moment }} <fa class="cursor-pointer ml-4 mr-2" icon="ellipsis-v"/></p>
      </div>
    </div>
    <div class="flex items-center px-4 py-2">
      <div class="flex flex-col justify-center items-center">
        <div
            @click="UpdateVote('upvote',mumble.original_mumble ? mumble.original_mumble.id : mumble.id)"
            class="cursor-pointer px-1 focus:outline-none text-gray-600 dark:text-gray-200"
            :class="{'text-green-400 dark:text-green-300':mumble.original_mumble ? 
            mumble.original_mumble.upVoters.filter(user => user.username == $auth.user.username).length : 
            mumble.upVoters.filter(user => user.username == $auth.user.username).length}"
          >
            <fa icon="caret-up" class="fa-2x"/>
          </div>
          <p class="pl-1.5 dark:text-gray-200 mr-1"> {{ positive ? '+' : '-'}}{{mumble.original_mumble ? mumble.original_mumble.vote_rank : mumble.vote_rank}}</p>
          <button
            @click="UpdateVote('downvote',mumble.original_mumble ? mumble.original_mumble.id : mumble.id)"
            class="px-1 focus:outline-none text-gray-600 dark:text-gray-200"
            :class="{'dark:text-red-400 text-red-600':mumble.original_mumble ? 
            mumble.original_mumble.downVoters.filter(user => user.username == $auth.user.username).length : 
            mumble.downVoters.filter(user => user.username == $auth.user.username).length}"
          >
            <fa icon="caret-down" class="fa-2x" />
          </button>
      </div>
      <div class="ml-6">
          <div class="text-gray-600 dark:text-gray-200" v-if="mumble.original_mumble == null">
            {{mumble.content}}
          </div>
          <div class="text-gray-600 dark:text-gray-200" v-else>
            {{mumble.original_mumble.content}}
          </div>
      </div>
    </div>
    <hr class="mt-4 mb-4 bg-gray-300 dark:border dark:border-gray-700 dark:bg-gray-700" />
    <div class="ml-5  grid grid-cols-3">
      <div>
        <fa class="cursor-pointer dark:text-gray-200 ml-5 hover:text-purple-500 transition ease-in-out duration-300" icon="comments"/><span class="ml-2 dark:text-gray-100">{{mumble.original_mumble ? mumble.original_mumble.comment_count : mumble.comment_count}}</span>
      </div>
      <div>
        <fa @click="show = !show" class="cursor-pointer dark:text-gray-200 xs:ml-10 sm:ml-20 md:ml-10 lg:ml-16 xl:ml-24 hover:text-purple-500 transition ease-in-out duration-300" icon="comment"/>
      </div>
      <div>
      <fa class="cursor-pointer dark:text-gray-200 xs:ml-20 sm:ml-32 md:ml-24 lg:ml-20 xl:ml-36 hover:text-purple-500 transition ease-in-out duration-300" icon="paper-plane"/><span class="ml-2 dark:text-gray-100">{{mumble.original_mumble ? mumble.original_mumble.share_count : mumble.share_count}}</span>
      </div>
    </div>
    <div v-if="show" class="ml-5  grid grid-cols-1">
      <textarea
        placeholder="Share your comments on this . . ."
        v-model="comment"
        class="p-4 mt-4 bg-gray-100 dark:bg-gray-800 h-24 rounded-lg width-me border-2 border-gray-200 dark:text-gray-100 focus:border-2 focus:outline-none focus:border-blue-300"
      >
      </textarea>
      <button class="btn-primary" @click="Mumble"><fa class="mr-2" icon="comment" />Comment</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.use(require('vue-moment'));
import moment from 'moment'

Vue.prototype.moment = moment
export default {
  props: {
    mumble: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      loading: true,
      comment: '',
      show: false,
      upvote:false,
      downvote:false,
      show_comments: false,
      positive:true,
      username: '',
    }
  },
  mounted() {
    if (this.mumble.original_mumble != null){
      if(this.mumble.original_mumble.vote_rank > 0){
        this.positive = true
        this.username = this.mumble.original_mumble.user.username
      }
      else{
        this.positive = false
      }
    }
    else{
      if(this.mumble.vote_rank > 0){
        this.positive = true
        this.username = this.mumble.user.username
      }
      else{
        this.positive = false
      }
    }
  },
  methods: {
    UpdateVote(vote, id) {
      this.$axios
        .post('/api/mumbles/vote/', { post_id: id, value: vote })
        .then((response) => {
          console.log(response.data)
          this.$nuxt.refresh()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    moment: function (date) {
      return moment(date);
    },
    date: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
}
</script>
