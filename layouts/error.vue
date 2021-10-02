<template>
  <main class="bg-white dark:bg-gray-800 overflow-hidden h-screen relative">
    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32">
      <div class="container mx-auto px-6 flex flex-col justify-between items-center relative">
        <div
          class="flex w-full items-center justify-center space-x-12 flex-col md:flex-row mb-16 md:mb-8"
        >
          <h1
            class="font-thin text-center lg:text-6xl text-gray-800 dark:text-gray-200 sm:text-sm"
          >GOT LOST ?</h1>
        </div>
        <div class="flex items-center justify-center w-full mx-auto mt-6 md:mt-0 relative">
          <img class src="/images/login/404.svg" />
        </div>
        <button @click="$router.push('/login')" class="px-6 py-4 btn-danger mt-10"><fa icon="chevron-left" class="mt-1 mr-4"></fa> Back Home</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'auth'
}
</script>

<style>
</style>