<template>
  <div
    class="flex mb-3 overflow-clip w-full pr-28 break-all rounded-xl"
    :class="{ 'flex-row-reverse pl-28 pr-0': $auth.user.username == message.sender.username }"
  >
    <img
      :src="'http://localhost:8000'+message.sender.profile_pic"
      class="rounded-full h-10 mx-3"
    />
    <div
      class="p-2 rounded-xl max-w-full flex break-words dark:text-gray-300"
      :class="{
        'break-words bg-blue-400 dark:bg-purple-800 dark:text-gray-300':
          $auth.user.username == message.sender.username,
        'bg-blue-200 dark:bg-indigo-600': $auth.user.username != message.sender.username,
      }"
    >
      {{message.body}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type:Object,
      required:true
    },
  },
}
</script>

<style>
</style>
