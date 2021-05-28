<template>
  <div class="flex justify-between w-full m-4 items-center mb-6">
    <div class="flex items-center">
      <img
        :src="user.profile.profile_pic"
        class="h-10"
        style="border-radius: 50%"
      />
      <p class="ml-2 text-gray-700 font-semibold dark:text-gray-200">
        {{ user.username }}
      </p>
    </div>
    <button @click="FollowBtn()" :class="`btn-follow ${ follwing ? 'bg-purple-500 text-white' : 'bg-white text-purple-500'}`">{{follwing ? 'Following' : 'Follow'}}</button>
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
    console.log(this.user.profile.followers)
    for (var i = 0; i < this.user.profile.followers.length; i++){
      if (this.$auth.user.id == this.user.profile.followers[i]){
        this.follwing = true
      }
    }
    console.log(this.$auth.user.id)
    console.log(this.follwing)
  },
  methods: {
    FollowBtn() {
      this.$axios
        .post(`/api/users/${this.user.username}/follow/`)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      this.$nuxt.refresh()
    },
  },
}
</script>
