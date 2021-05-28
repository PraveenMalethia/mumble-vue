<template>
  <div class="bg-indigo-50 w-screen fixed z-40">
    <div
      class="flex bg-gray-600 dark:bg-gray-900 py-2 px-3 md:justify-between md:py-3 md:px-7 items-center"
    >
      <div>
        <h2
          class="text-md md:text-xl text-gray-400 md:tracking-wide uppercase font-bold px-8 md:px-24"
        >
          Mumble
        </h2>
      </div>

      <div class="flex items-center">
        <input
          class="transition duration-200 ease-in-out border shadow-lg border-transparent rounded-full py-2 px-4 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent h-8 md:h-11 w-36 md:w-56 placeholder-gray-600"
          placeholder="Search"
        />

        <div>
          <div class="flex items-center">
            <button
              class="text-white ml-5 uppercase md:text-lg md:tracking-medium md:mr-6 focus:outline-none"
              @click="ShowNotifications()"
            >
              <fa class="cursor-finger" icon="bell" />
            </button>
            <div class="dark:bg-gray-800 dark:text-gray-200">
              <p class="focus:outline-none">
                <select
                  v-model="$colorMode.preference"
                  class="border-2 border-white rounded w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-200"
                >
                  <option value="system">System</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </p>
            </div>
            <img
              src="https://mumbleapi.herokuapp.com/static/images/default.png"
              @click="showProfileItems()"
              class="h-10 mr-4 ml-4 md:mr-12 lg:mr-16"
            />
          </div>

          <!-- <p class="text-white uppercase md:text-lg md:tracking-medium ml-4 md:mr-6" @click="show_items = !show_items">Bell</p>

                <img src="https://mumbleapi.herokuapp.com/static/images/default.png" class="h-10 mr-4 md:mr-12 lg:mr-16"> -->

          <div class="abolute">
            <div
              v-if="show_items"
              class="absolute transition ease-in-out duration-1000 shadow-xl right-6 cursor-pointer dark:bg-gray-800 bg-white rounded-md py-3 w-72 mt-4"
            >
              <div class="flex hover:bg-gray-200 rounded-md w-full px-2 py-4">
                <img
                  src="https://mumbleapi.herokuapp.com/static/images/pravenn.jpg"
                  class="h-10"
                  style="border-radius: 50%"
                />

                <p class="ml-4 text-base font-medium text-blue-500">
                  A mumble mentiong Praveen Malethia was created.
                </p>
              </div>

              <div class="flex hover:bg-gray-200 rounded-md w-full px-2 py-2">
                <img
                  src="https://mumbleapi.herokuapp.com/static/images/pravenn.jpg"
                  style="border-radius: 50%"
                  class="h-10"
                />

                <p class="ml-4 text-base font-medium text-blue-500">
                  A mumble mentiong Praveen Malethia was created.
                </p>
              </div>
            </div>
          </div>

          <div class="abolute z-20">
            <div
              v-if="show_profile_items"
              class="absolute transition ease-in-out duration-1000 shadow-xl right-6 cursor-pointer bg-white
              dark:bg-gray-900 rounded-md w-72 mt-4"
            >
              <div class="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full px-2 py-4">
                <p class="ml-4 text-base dark:text-gray-200 text-gray-800">
                  <span v-if="$colorMode.preference == 'light' " @click="$colorMode.preference = 'dark' ">
                    <fa icon="moon" class="mr-2"></fa>Enable Dark Mode
                  </span>
                  <span v-if="$colorMode.preference == 'dark' " @click="$colorMode.preference = 'light' ">
                    <fa icon="sun" class="mr-2"></fa> Enable Light Mode
                  </span>
                </p>
              </div>

              <div class="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full px-2 py-4">
                <router-link to="/profile" class="ml-4 text-base dark:text-gray-200 text-gray-800">
                  <fa icon="user" class="mr-2"></fa> Profile
                </router-link>
              </div>

              <div class="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full px-2 py-4">
                <router-link to="/settings" class="ml-4 text-base dark:text-gray-200 text-gray-800">
                  <fa icon="cog" class="mr-2"></fa> Settings
                </router-link>
              </div>

              <div class="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full px-2 py-4">
                <button class="ml-4 text-base dark:text-gray-200 text-gray-800">
                  <fa icon="sign-out-alt" class="mr-2"></fa> Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      show_items: false,
      show_profile_items: false
    }
  },
  methods: {
    ShowNotifications() {
      this.show_profile_items = false

      this.show_items = !this.show_items
    },
    showProfileItems(){
      this.show_items = false

      this.show_profile_items = !this.show_profile_items
    }
  },
}
</script>

