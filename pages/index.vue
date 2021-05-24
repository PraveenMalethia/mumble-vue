<template>
  <div class="bg-gray-100 h-screen">
    <div class="bg-gray-100 grid md:grid-cols-3 lg:grid-cols-4 max-w-7xl dark:bg-gray-800 py-4 px-4 sm:px-6 lg:py-4">
      <div class="lg:col-span-1 hidden lg:block mt-10 md:mt-20">
        <sidenavbar current="home" />
      </div>
      <div class="col-span-2 mt-10 md:mt-20">
        <feed />
      </div>
      <div class="md:col-span-1 hidden md:block mt-10 md:mt-20 md:ml-15">
        <myintrests/>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>

