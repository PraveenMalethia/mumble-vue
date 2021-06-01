<template>
  <div class="bg-white dark:bg-gray-800">
    <div
      class="flex md:justify-between w-screen md:w-full space-x-10 md:space-x-2 p-2 items-center"
    >
      <div class="flex items-center">
        <img
          src="https://mumbleapi.herokuapp.com/static/images/default.png"
          class="h-10 w-10 rounded-full"
        />
        <p class="text-xl text-gray-800 dark:text-gray-200 tracking-wide ml-2">
          Srikar Kandula
        </p>
      </div>

      <div class="flex md:ml-0 space-x-3 text-gray-800 dark:text-gray-200">
        <fa icon="phone"></fa>
        <fa icon="search"></fa>
        <fa icon="video"></fa>
        <fa icon="ellipsis-v"></fa>
      </div>
    </div>

    <div class="h-screen">
      <div class="bg-gray-200 dark:bg-gray-900 pt-8 h-screen">
        <div class="flex-col-reverse space-y-4 height-me overflow-y-auto px-4">
          <message author="true" />
          <message />
          <message author="true" />
          <message author="true" />
          <message author="true" />
          <message />
          <message />
          <message />
          <message author="true" />
          <message author="true" />
          <message author="true" />
          <message author="true" />
          <message author="true" />
          <message />
          <message />
          <message />
        </div>

        <div class="flex w-full space-x-2 p-2 items-center">
          <input
            class="p-2 bg-gray-100 dark:bg-gray-800 h-12 rounded-md w-4/6 md:w-5/6 border-2 border-gray-200 dark:text-gray-100 focus:border-2 focus:outline-none focus:border-blue-300"
          />
          <button
            class="py-2 h-12 bg-blue-400 dark:bg-purple-700 hover:bg-blue-500 dark:hover:bg-purple-800 transition duration-500 ease-in-out rounded text-gray-800 flex-auto font-semibold focus:outline-none dark:text-gray-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.height-me {
  height: calc(100vh - 6rem);
}
</style>
