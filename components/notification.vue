<template>
  <div>
    <div v-if="notification.notification_type == 'mumble' " class="hover:bg-gray-300 dark:hover:bg-gray-700
      rounded-md w-full px-2 py-2">
      <span class="flex break-words">
        <img
          :src="notification.created_by.profile_pic"
          style="border-radius: 50%"
          class="h-10"
          alt="User Profile"
        />
        <p class="ml-4 text-base font-medium text-blue-500">
          A mumble mentioning {{ notification.content }} was created
        </p>
      </span>
      <p class="ml-14 mt-1 text-xs text-gray-500 dark:text-gray-400 font-medium">About a week ago</p>
    </div>
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
