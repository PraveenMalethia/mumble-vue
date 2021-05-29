<template>
  <div
    class="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative"
  >
    <div
      class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left"
    >
      <div class="w-full md:w-1/2">
        <div class="mb-10 md:mb-20 text-gray-600 font-light">
          <h1
            class="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10"
          >
            Error<br />404
          </h1>
          <p class="">Page not found</p>
        </div>
        <div class="mb-20 md:mb-0">
          <button
            @click="$router.push('/')"
            class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-500 hover:text-blue-600"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout:null
}
</script>

<style>
</style>