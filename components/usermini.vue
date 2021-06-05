<template>
  <div class="flex justify-between w-full m-4 items-center mb-6">
    <div class="flex items-center">
      <img
        :src="user.profile.profile_pic"
        class="h-10"
        style="border-radius: 50%"
        :alt="user.username+' profile pic'"
      />
      <p class="ml-2 text-gray-700 font-semibold dark:text-gray-300">
        {{ user.username }}
      </p>
    </div>
    <button @click="FollowBtn()" :class="`btn-follow ${ follwing ? 'bg-purple-500 text-white' : 'text-purple-400'}`">{{follwing ? 'Following' : 'Follow'}}</button>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      follwing:false
    }
  },
  mounted() {
    for (var i = 0; i < this.user.profile.followers.length; i++){
      if (this.$auth.user.id == this.user.profile.followers[i]){
        this.follwing = true
      }
    }
  },
  methods: {
    async FollowBtn() {
      await this.$axios
        .post(`/api/users/${this.user.username}/follow/`)
        .then((res) => {
          this.follwing = !this.follwing
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
