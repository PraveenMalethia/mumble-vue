<template>
  <div class="flex hover:bg-gray-200 rounded-md w-full px-2 py-2">
    <img
      src="https://mumbleapi.herokuapp.com/static/images/pravenn.jpg"
      style="border-radius: 50%"
      class="h-10"
      alt="User Profile"
    />

    <p class="ml-4 text-base font-medium text-blue-500">
      {{notification.data}} {{notification.id}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>