<template>
  <div>
    <!-- Nav Starts -->
    <navbar />
    <!-- Nav Ends -->
    <!-- Main App starts -->
    <div class="transition ease-in-out duration-500 dark:bg-gray-900 bg-gray-100 min-h-screen">
      <div
        class="bg-gray-100 grid md:grid-cols-3 lg:grid-cols-4 m-auto dark:bg-gray-900 py-4 px-4 sm:px-6 lg:py-4"
      >
        <div class="lg:col-span-1 hidden lg:block mt-10 md:mt-20">
          <sidenavbar current="home" />
        </div>
        <div class="col-span-3">
          <Nuxt/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Vue from 'vue'
import linkify from 'vue-linkify'

Vue.directive('linkified', linkify)
export default {
  methods: {},
}
</script>
<style>
</style>
