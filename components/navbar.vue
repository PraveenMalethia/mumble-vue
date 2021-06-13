<template>
  <div class="bg-indigo-50 w-screen fixed z-40">
    <div
      class="flex bg-gray-600 dark:bg-gray-900 py-2 px-3 md:justify-between md:py-3 md:px-7 items-center"
    >
      <div class="px-9 w-2/6 flex items-center flex-none md:px-24">
        <!-- <h2
          class="text-base md:text-xl text-gray-400 md:tracking-wide uppercase font-bold px-8 md:px-24"
        >
          Mumble
        </h2> -->

        <img src="/icon.png" alt="Mumble-Logo" class="h-7 w-7 md:h-10 md:w-10">
      </div>

      <div class="flex items-center">
        <input
          class="transition duration-200 ease-in-out border shadow-lg border-transparent rounded-full py-2 px-4 dark:bg-gray-700 bg-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent h-8 md:h-11 w-36 md:w-56 dark:placeholder-gray-300 placeholder-gray-800"
          placeholder="Search"
          v-on:keyup.191="inpFocus"
          id="search"
        />

        <div class="w-4/6">
          <div class="flex items-center">
            <div
              class="cursor-pointer text-white ml-5 uppercase md:text-lg md:tracking-medium md:mr-6 focus:outline-none"
              @click="ShowNotifications()"
              @focusout="show_items = false" 
              tabindex="1"
            >
            <fa class="cursor-finger" icon="bell" />
            <span class="animate-ping relative inline-flex rounded-full h-2 w-2 bg-purple-500 mb-3 ml-1">
            </span>
            </div>
            <img
              :src="
                this.$auth.user.profile.profile_pic
                  ? this.$auth.user.profile.profile_pic
                  : 'https://mumbleapi.herokuapp.com/static/images/default.png'
              "
              @click="showProfileItems()"
              class="h-10 mr-4 ml-4 md:mr-12 lg:mr-16 rounded-full cursor-pointer"
            />
          </div>

          <!-- <p class="text-white uppercase md:text-lg md:tracking-medium ml-4 md:mr-6" @click="show_items = !show_items">Bell</p>

                <img src="https://mumbleapi.herokuapp.com/static/images/default.png" class="h-10 mr-4 md:mr-12 lg:mr-16"> -->

          <div class="abolute">
            <div
              v-if="show_items"
              class="absolute h-64 overflow-y-scroll transition ease-in-out duration-1000 shadow-xl right-6 cursor-pointer dark:bg-gray-800 bg-white rounded-md py-3 w-72 mt-4"
            >
              <div v-for="noti in notifications" :key="noti.id">
                <Notification :notification="noti" />
              </div>
            </div>
          </div>
          <div class="abolute z-20">
            <div v-if="show_profile_items">
              <section
                class="h-screen absolute left-0"
                @click="dontShowProfileItems"
                style="width: 100vw"
              ></section>
              <div
                class="absolute transition ease-in-out duration-800 shadow-xl right-6 cursor-pointer bg-white dark:bg-gray-900 rounded-md w-72 mt-4"
              >
                <div
                  class="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full px-2 py-4"
                >
                  <p class="ml-4 text-base dark:text-gray-200 text-gray-800">
                    <span
                      v-if="$colorMode.preference == 'light'"
                      @click="$colorMode.preference = 'dark'"
                    >
                      <fa icon="moon" class="mr-2"></fa>Enable Dark Mode
                    </span>
                    <span
                      v-if="$colorMode.preference == 'dark'"
                      @click="$colorMode.preference = 'light'"
                    >
                      <fa icon="sun" class="mr-2"></fa> Enable Light Mode
                    </span>
                  </p>
                </div>
                <div
                  class="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full px-2 py-4"
                >
                  <router-link
                    :to="/user/+$auth.user.username"
                    class="ml-4 text-base dark:text-gray-200 text-gray-800"
                  >
                    <fa icon="user" class="mr-2"></fa> Profile
                  </router-link>
                </div>

                <div
                  class="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full px-2 py-4"
                >
                  <router-link
                    to="/settings"
                    class="ml-4 text-base dark:text-gray-200 text-gray-800"
                  >
                    <fa icon="cog" class="mr-2"></fa> Settings
                  </router-link>
                </div>

                <div
                  class="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full px-2 py-4"
                >
                  <button
                    @click="Logout()"
                    class="ml-4 text-base dark:text-gray-200 text-gray-800"
                  >
                    <fa icon="sign-out-alt" class="mr-2"></fa> Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.config.keyCodes.slash = 191
export default {
  name: 'NavBar',
  async fetch(){
    await this.$axios.get('/api/notifications/')
    .then((response) =>{
      this.notifications = response.data.filter(noti => noti.is_read == false)
    })
    .catch((error)=>{
      console.log(error)
    })
  },
  data() {
    return {
      show_items: false,
      show_profile_items: false,
      notifications: [],
    }
  },
  methods: {
    ShowNotifications() {
      this.show_profile_items = false

      this.show_items = !this.show_items
    },
    showProfileItems() {
      this.show_items = false

      this.show_profile_items = !this.show_profile_items
    },
    dontShowProfileItems() {
      this.show_profile_items = false
    },
    async Logout() {
      await this.$auth.logout()
    },
    inpFocus(){
      document.getElementById("search").focus();
    }
  },
}
</script>

<style>
::-webkit-scrollbar {
    width: 8px;
    background-color: #c4d0d3;
}
::-webkit-scrollbar-thumb {
    background-color: #5aa5b9;
    border-radius: 5px;
}
</style>
