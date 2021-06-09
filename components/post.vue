<template>
  <div
    class="
      bg-white
      dark:bg-gray-800
      w-full
      md:w-11/12
      rounded-md
      border-2 border-gray-200
      dark:border-transparent
      mt-6
      py-6
      px-4
    "
  >
    <p
      v-if="mumble.original_mumble"
      class="text-sm text-gray-600 dark:text-gray-300 mb-2 ml-3"
    >
      <fa icon="paper-plane" class="mr-1"></fa>
      <span class="italic">{{ mumble.user.username }}</span> remumbled
    </p>
    <div class="flex justify-between items-center">
      <div class="flex w-3/6">
        <span v-if="mumble.original_mumble
          ? 'https://mumbleapi.herokuapp.com/static'+mumble.original_mumble.user.profile_pic
          : mumble.user.profile_pic">
          <img
            :src="
              mumble.original_mumble
                ? 'https://mumbleapi.herokuapp.com/static' +mumble.original_mumble.user.profile_pic
                : mumble.user.profile_pic
            "
            class="h-10 md:h-12 lg:h-14 rounded-full"
          />
        </span>
        <!-- <img
         src="data:image/png;base64,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"
          class="h-10 md:h-12 lg:h-14 rounded-full"
        /> -->
        <div class="ml-4 w-3/6">
          <p class="font-bold truncate text-sm md:text-lg dark:text-gray-200 cursor-pointer">
            {{
              mumble.original_mumble
                ? mumble.original_mumble.user.username
                : mumble.user.username
            }}
          </p>
          <p class="font-light truncate text-xs md:text-base dark:text-gray-200 cursor-pointer">
            @{{
              mumble.original_mumble
                ? mumble.original_mumble.user.username
                : mumble.user.username
            }}
          </p>
        </div>
      </div>
      <div class="w-3/6">
        <span class="flex w-full flex-nowrap items-center text-gray-600 dark:text-gray-200">
          <span class="text-xs truncate tracking-tight md:tracking-normal md:text-lg">
          {{ mumble.created | moment }}
          </span>
          <button @click="options = !options" @focusout="options = false"
            tabindex="0" class="focus:outline-none">
            <fa class="cursor-pointer ml-2 md:ml-4 mr-2" icon="ellipsis-v" />
          </button>
        </span>
      </div>
    </div>
    <section
      v-if="options"
      class="h-screen w-screen absolute top-0 -left-6"
    ></section>
    <div v-if="options" class="relative w-full h-full z-20">
      <div>
        <div
          class="
            right-4
            -top-6
            absolute
            shadow-xl
            cursor-pointer
            bg-gray-200
            dark:bg-gray-900
            rounded-md
            lg:w-64
            md:w-48
            w-36
            mt-4
          "
        >
          <div v-if="mumble.user.username == $auth.user.username">
            <div
              class="
                hover:bg-gray-300
                dark:hover:bg-gray-700
                rounded-md
                w-full
                py-2
                md:py-4
              "
            >
              <p
                class="
                  ml-4
                  text-xs
                  md:text-sm
                  truncate
                  dark:text-gray-200
                  text-gray-800
                "
              >
                <fa icon="edit" class="mr-2"></fa> Edit
              </p>
            </div>

            <div
              class="
                hover:bg-gray-300
                dark:hover:bg-gray-700
                rounded-md
                w-full
                py-2
                md:py-4
              "
            >
              <p
                class="
                  ml-4
                  text-xs
                  md:text-sm
                  truncate
                  dark:text-gray-200
                  text-gray-800
                "
              >
                <fa icon="trash" class="mr-2"></fa> Delete
              </p>
            </div>
          </div>

          <div v-else>
            <div
              class="
                hover:bg-gray-300
                dark:hover:bg-gray-700
                rounded-md
                flex
                break-none
                py-2
                md:py-4
              "
            >
              <div
                class="
                  ml-4
                  w-full
                  md:w-full
                  text-xs
                  md:text-sm
                  dark:text-gray-200
                  text-gray-800
                  overflow-hidden
                "
              >
                <span v-if="follwing" class="flex">
                  <fa icon="user-times" class="mr-2"></fa>
                  <span class="w-full truncate">
                    Unfollow
                    {{
                      new_mumble.original_mumble
                        ? new_mumble.original_mumble.user.username
                        : new_mumble.user.username
                    }}
                  </span>
                </span>
                <span v-else>
                  <fa icon="user-plus" class="mr-2"></fa>
                  Follow
                  {{
                    new_mumble.original_mumble
                      ? new_mumble.original_mumble.user.username
                      : new_mumble.user.username
                  }}
                </span>
              </div>
            </div>

            <div
              class="
                hover:bg-gray-300
                dark:hover:bg-gray-700
                rounded-md
                w-full
                py-2
                md:py-4
              "
            >
              <p
                class="
                  ml-4
                  text-xs
                  md:text-sm
                  truncate
                  dark:text-gray-200
                  text-gray-800
                "
              >
                <fa icon="ban" class="mr-2"></fa> Block
                {{
                  new_mumble.original_mumble
                    ? new_mumble.original_mumble.user.username
                    : new_mumble.user.username
                }}
              </p>
            </div>

            <div
              class="
                hover:bg-gray-300
                dark:hover:bg-gray-700
                rounded-md
                w-full
                py-2
                md:py-4
              "
            >
              <p
                class="ml-4 text-xs md:text-sm dark:text-gray-200 text-gray-800"
              >
                <fa icon="minus-circle" class="mr-2"></fa> Hide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center px-4 py-2">
      <div class="flex flex-col">
        <div
          @click="
            UpdateVote(
              'upvote',
              mumble.original_mumble ? mumble.original_mumble.id : mumble.id
            )
          "
          class="
            cursor-pointer
            px-1
            focus:outline-none
            text-gray-600
            dark:text-gray-200
          "
          :class="{
            'text-green-400 dark:text-green-300': new_mumble.original_mumble
              ? mumble.original_mumble.up_voters.filter(
                  (user) => user.username == $auth.user.username
                ).length
              : mumble.up_voters.filter(
                  (user) => user.username == $auth.user.username
                ).length,
          }"
        >
          <fa icon="caret-up" class="fa-2x" />
        </div>
        <!-- <p class="pl-1.5 dark:text-gray-200 mr-1">
          {{ positive ? '+' : '-'
          }}{{
            mumble.original_mumble
              ? mumble.original_mumble.vote_rank
              : mumble.vote_rank
          }}
        </p> -->
        <span
          class="
            pl-1.5
            dark:text-gray-200
            mr-1
            flex
            items-center
            justify-center
          "
        >
          <span v-if="new_mumble.original_mumble">
            <span v-if="new_mumble.original_mumble.vote_rank > 0"> + </span>
          </span>
          <span v-else>
            <span v-if="new_mumble.vote_rank > 0"> + </span>
          </span>
          {{
            new_mumble.original_mumble
              ? new_mumble.original_mumble.vote_rank
              : new_mumble.vote_rank
          }}
        </span>
        <button
          @click="
            UpdateVote(
              'downvote',
              mumble.original_mumble ? mumble.original_mumble.id : mumble.id
            )
          "
          class="px-1 focus:outline-none text-gray-600 dark:text-gray-200"
        >
          <fa icon="caret-down" class="fa-2x" />
        </button>
      </div>
      <div class="ml-6">
        <div
          class="text-gray-600 text-sm md:text-base dark:text-gray-200"
          v-if="new_mumble.original_mumble == null"
        >
          {{ new_mumble.content }}
        </div>
        <div class="text-gray-600 text-sm md:text-base dark:text-gray-200" v-else>
          {{ new_mumble.original_mumble.content }}
        </div>
      </div>
    </div>
    <hr
      class="
        mt-4
        mb-4
        bg-gray-300
        dark:border dark:border-gray-700
        dark:bg-gray-700
      "
    />
    <div class="ml-5 grid grid-cols-3">
      <div class="justify-self-start -ml-2 md:-ml-0">
        <fa
          class="
            cursor-pointer
            dark:text-gray-200
            ml-5
            hover:text-purple-500
            transition
            ease-in-out
            duration-300
          "
          icon="comments"
        /><span class="ml-2 dark:text-gray-100">{{
          new_mumble.original_mumble
            ? new_mumble.original_mumble.comment_count
            : new_mumble.comment_count
        }}</span>
      </div>
      <div class="justify-self-center md:justify-self-start">
        <fa
          @click="show = !show"
          class="
            cursor-pointer
            dark:text-gray-200
            xs:ml-10
            sm:ml-20
            md:ml-10
            lg:ml-16
            xl:ml-24
            hover:text-purple-500
            transition
            ease-in-out
            duration-300
          "
          icon="comment"
        />
      </div>
      <div class="justify-self-end">
        <fa
          class="
            cursor-pointer
            dark:text-gray-200
            xs:ml-20
            sm:ml-32
            md:ml-24
            lg:ml-20
            xl:ml-36
            hover:text-purple-500
            transition
            ease-in-out
            duration-300
          "
          icon="paper-plane"
        /><span class="ml-2 dark:text-gray-100">{{
          new_mumble.original_mumble
            ? new_mumble.original_mumble.share_count
            : new_mumble.share_count
        }}</span>
      </div>
    </div>
    <div v-if="show" class="ml-5 grid grid-cols-1">
      <textarea
        placeholder="Share your brilliant thought"
        v-model="comment"
        class="
          p-4
          mt-4
          bg-gray-100
          dark:bg-gray-800
          h-24
          rounded-lg
          width-me
          border-2 border-gray-200
          dark:text-gray-100
          focus:border-2
          focus:outline-none
          focus:border-blue-300
        "
      >
      </textarea>
      <button class="btn-primary" @click="Comment()">
        <fa class="mr-2" icon="comment" />Comment
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.use(require('vue-moment'))
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
      new_mumble:{},
      loading: true,
      comment: '',
      show: false,
      upvote: false,
      downvote: false,
      show_comments: false,
      positive: true,
      username: '',
      options: false,
      follwing:false
    }
  },
  mounted() {
    this.new_mumble = this.mumble
    if (this.mumble.original_mumble != null) {
      if (this.mumble.original_mumble.vote_rank > 0) {
        this.positive = true
        this.username = this.mumble.original_mumble.user.username
      } else {
        this.positive = false
      }
    } else {
      if (this.mumble.vote_rank > 0) {
        this.positive = true
        this.username = this.mumble.user.username
      } else {
        this.positive = false
      }
    }
    if(this.mumble.original_mumble){
      for (var i = 0; i < this.mumble.original_mumble.user.followers.length; i++){
        if (this.$auth.user.id == this.mumble.original_mumble.user.followers[i]){
          this.follwing = true
        }
      }
    } else{
      for (var i = 0; i < this.mumble.user.followers.length; i++){
        if (this.$auth.user.id == this.mumble.user.followers[i]){
          this.follwing = true
        }
      }
    }
  },
  methods: {
    UpdateVote(vote, id) {
      this.$axios
        .post('/api/mumbles/vote/', { post_id: id, value: vote })
        .then((response) => {
          this.new_mumble = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    Comment(){
      this.$axios.post('/api/mumbles/create/',{postId:this.mumble.id,isComment:true,content:this.comment})
      .then((response)=>{
        this.new_mumble.comment_count +=1
      })
      .catch((error) => {
        console.log(error)
      })
    },
    moment: function (date) {
      return moment(date)
    },
    date: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },
  },
  computed:{},

  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },
  },
}
</script>
