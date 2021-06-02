<template>
  <div>
    <!-- Nav Starts -->
    <navbar />
    <p
      class="text-gray-800 dark:text-gray-200 fixed top-4 md:top-6 left-6 block lg:hidden z-40"
      @click="showSideNav()"
    >
      <span v-if="!showSidenav">
        <fa class="mr-2" icon="bars" />
      </span>
      <span v-else>
        <fa class="mr-2" icon="times" />
      </span>
    </p>

    <!-- Nav Ends -->
    <!-- Main App starts -->
    <div
      class="transition ease-in-out duration-500 dark:bg-gray-900 bg-gray-100 min-h-screen"
    >
      <div
        class="bg-gray-100 grid md:grid-cols-3 lg:grid-cols-4 m-auto dark:bg-gray-900 py-4 px-4 sm:px-6 lg:py-4"
      >
        <div class="lg:col-span-1 hidden lg:block mt-10 md:mt-20">
          <sidenavbar current="home" :open="showSidenav" />
        </div>
        <div class="col-span-3">
          <Nuxt />
        </div>
      </div>
    </div>

    <transition name="toast">
      <div
        v-if="showSidenav"
        class="bg-gray-200 pt-6 dark:bg-gray-800 w-screen h-screen sm:w-screen block lg:hidden fixed z-40 top-12 left-0 md:h-screen md:top-16"
      >
        <div class="margin-me-small md:margin-me">
          <sidenavbar current="home" />
        </div>
      </div>
    </transition>

    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import linkify from 'vue-linkify'

Vue.directive('linkified', linkify)
export default {
  data() {
    return {
      showSidenav: false,
    }
  },
  methods: {
    showSideNav() {
      this.showSidenav = !this.showSidenav
      console.log(this.showSidenav)
      this.$nuxt.refresh()
    },
  },
}
</script>
<style scoped>
::-webkit-scrollbar {
  width: 8px;
  background-color: #c4d0d3;
}
::-webkit-scrollbar-thumb {
  background-color: #5aa5b9;
  border-radius: 5px;
}
.margin-me {
  margin-left: 20vw;
}
.margin-me-small {
  margin-left: 5vw;
}

.toast-enter {
  opacity: 1;
  transform: translateX(-100px);
}
.toast-enter-active {
  transition: all 0.3s ease;
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.toast-leave-active {
  transition: all 0.3s ease;
}
</style>

