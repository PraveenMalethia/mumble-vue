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
      <div class="flex">
        <img
          :src="
            mumble.original_mumble
              ? mumble.original_mumble.user.profile_pic
              : mumble.user.profile_pic
          "
          class="h-10 md:h-12 lg:h-14 rounded-full"
        />
        <div class="ml-4">
          <p class="font-bold lg:text-lg dark:text-gray-200 cursor-pointer">
            {{
              mumble.original_mumble
                ? mumble.original_mumble.user.username
                : mumble.user.username
            }}
          </p>
          <p class="font-light dark:text-gray-200 cursor-pointer">
            @{{
              mumble.original_mumble
                ? mumble.original_mumble.user.username
                : mumble.user.username
            }}
          </p>
        </div>
      </div>
      <div>
        <p class="text-gray-600 lg:text-lg dark:text-gray-200">
          {{ mumble.created | moment }}
          <button @click="options = !options"   @focusout="options = false"
          tabindex="0" class="focus:outline-none">
            <fa class="cursor-pointer ml-4 mr-2" icon="ellipsis-v" />
          </button>
        </p>
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
                      mumble.original_mumble
                        ? mumble.original_mumble.user.username
                        : mumble.user.username
                    }}
                  </span>
                </span>
                <span v-else>
                  <fa icon="user-plus" class="mr-2"></fa>
                  Follow
                  {{
                    mumble.original_mumble
                      ? mumble.original_mumble.user.username
                      : mumble.user.username
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
                  mumble.original_mumble
                    ? mumble.original_mumble.user.username
                    : mumble.user.username
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
            'text-green-400 dark:text-green-300': mumble.original_mumble
              ? mumble.original_mumble.upVoters.filter(
                  (user) => user.username == $auth.user.username
                ).length
              : mumble.upVoters.filter(
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
          <span v-if="mumble.original_mumble">
            <span v-if="mumble.original_mumble.vote_rank > 0"> + </span>
          </span>
          <span v-else>
            <span v-if="mumble.vote_rank > 0"> + </span>
          </span>
          {{
            mumble.original_mumble
              ? mumble.original_mumble.vote_rank
              : mumble.vote_rank
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
          class="text-gray-600 dark:text-gray-200"
          v-if="mumble.original_mumble == null"
        >
          {{ mumble.content }}
        </div>
        <div class="text-gray-600 dark:text-gray-200" v-else>
          {{ mumble.original_mumble.content }}
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
          mumble.original_mumble
            ? mumble.original_mumble.comment_count
            : mumble.comment_count
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
          mumble.original_mumble
            ? mumble.original_mumble.share_count
            : mumble.share_count
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
      <button class="btn-primary" @click="Mumble">
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
          console.log(response.data)
          this.$nuxt.refresh()
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
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },
  },
}
</script>
