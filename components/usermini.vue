<template>
  <div class="flex justify-between w-full m-4 items-center mb-6">
    <div class="flex items-center">
      <img :src="image_src" class="h-10" style="border-radius: 50%" />
      <p class="ml-2 text-gray-700 font-semibold dark:text-gray-200">
        {{ username }}
      </p>
    </div>
    <button class="btn-follow">Follow</button>
  </div>
</template>

<script>
export default {
  props: {
    image_src: '',
    username: '',
  },
}
</script>
