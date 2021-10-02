<template>
  <div>
    <div
      v-if="$colorMode.preference == 'dark'"
      class="rounded-full active:ring-50 ring-indigo-300 transition"
      @click="$colorMode.preference = 'light'"
    >
      <div class="rounded-full active:ring-20 ring-indigo-400 transition">
        <div
          class="
            w-16
            h-16
            p-2
            flex
            justify-center
            drop-shadow-md
            rounded-full
            transition
            active:bg-indigo-900
            active:text-white
            bg-white
            dark:bg-gray-800
          "
        >
          <fa icon="sun" class="dark:text-gray-300 mt-2 text-4xl"></fa>
        </div>
      </div>
    </div>
    <div
      v-if="$colorMode.preference == 'light'"
      class="rounded-full active:ring-50 ring-indigo-300 transition"
      @click="$colorMode.preference = 'dark'"
    >
      <div class="rounded-full active:ring-20 ring-indigo-400 transition">
        <div
          class="
            w-16
            h-16
            p-2
            flex
            justify-center
            drop-shadow-md
            rounded-full
            transition
            active:bg-indigo-900
            active:text-white
            bg-gray-200
          "
        >
          <fa icon="moon" class="dark:bg-gray-800 mr-2 ml-2 mt-2 text-4xl"></fa>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>