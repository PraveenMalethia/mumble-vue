<template>
  <div>
    <span v-if="notification.notification_type == 'mumble' " class="flex break-words hover:bg-gray-300 dark:hover:bg-gray-700
      rounded-md w-full px-2 py-2">
      <img
        :src="`https://mumbleapi.herokuapp.com/static${notification.created_by.profile_pic}`"
        style="border-radius: 50%"
        class="h-10"
        alt="User Profile"
      />

      <p class="ml-4 text-base font-medium text-blue-500">
        A mumble mentioning {{ notification.created_by.username }} was created
      </p>

    </span>
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
