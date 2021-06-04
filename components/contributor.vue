<template>
  <div
    class="bg-white dark:bg-gray-800 p-3 pl-2 md:pl-7 rounded-md w-screen md:w-full border-2 border-gray-200 dark:border-transparent w-full"
  >
    <div class="flex justify-between items-center w-full">
      <div class="flex space-x-2 md:space-x-4 items-center">
        <img
          :src="user.profile.profile_pic"
          class="h-16 md:h-20 lg:h-24 rounded-full border-2 border-blue-400"
        />
        <div>
          <p class="font-bold lg:text-xl dark:text-gray-200 cursor-pointer md:text-xl">{{ user.username }}</p>
          <p class="font-light text-indigo-600 dark:text-indigo-400 cursor-pointer md:text-lg">@{{ user.username }}</p>
        </div>
      </div>

      <button :class="`btn-follow focus:outline-none ${ follwing ? 'bg-purple-500 text-white' : 'text-purple-400'}`">
        <span class="md:text-lg">{{follwing ? 'Following' : 'Follow'}}</span>
      </button>
    </div>

    <div class="w-full md:w-5/6 mt-5 break-all">
      <p class="text-gray-800 dark:text-gray-200 text-lg md:text-xl">{{ user.profile.bio }}</p>

      <div class="flex justify-center mt-5 md:mt-7 space-x-3 md:space-x-12 items-center">
        <div class="flex flex-col justify-center items-center">
          <p class="text-3xl md:text-4xl text-gray-500 dark:text-gray-400">{{ user.profile.followers_count }}</p>
          <p class="text-gray-600 dark:text-gray-300 text-lg md:text-xl">Followers</p>
        </div>

        <div class="flex flex-col justify-center items-center">
          <p class="text-3xl md:text-4xl text-gray-500 dark:text-gray-400">{{ user.profile.vote_ratio }}</p>
          <p class="text-gray-600 dark:text-gray-300 text-lg md:text-xl">Vote Ratio</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
    data(){
      return{
        follwing:false
      }
    },
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      for (var i = 0; i < this.user.profile.followers.length; i++){
        if (this.$auth.user.id == this.user.profile.followers[i]){
          this.follwing = true
        }
      }
      console.log(this.user)
    },
    methods:{
      FollowBtn() {
        this.$axios
          .post(`/api/users/${this.user.username}/follow/`)
          .then((res) => {
            this.follwing = !this.follwing
          })
          .catch((err) => {
            console.log(err)
          })
      },
    }

}
</script>

<style>

</style>
