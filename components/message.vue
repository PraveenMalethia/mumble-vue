<template>
  <div
    class="flex mb-3 overflow-clip w-full pr-28 break-all"
    :class="{ 'flex-row-reverse pl-28 pr-0': 'true' == author }"
  >
    <img
      src="https://us-east-1.linodeobjects.com/mumble/19f7ee39-77c4-ab0d-5bf1-031b417f3da3.png?AWSAccesshttps://us-east-1.linodeobjects.com/mumble/19f7ee39-77c4-ab0d-5bf1-031b417f3da3.png?AWSAccessKeyId=0GX0K8X1O9RE83ACTB4G&Signature=JJF28kf7PDgATMDFTYgR8h3vbhA%3D&Expires=1623675504KeyId=0GX0K8X1O9RE83ACTB4G&Signature=JJF28kf7PDgATMDFTYgR8h3vbhA%3D&Expires=1623675504"
      class="rounded-full h-10 mx-3"
    />
    <div
      class="p-2 rounded max-w-full flex break-words dark:text-gray-300"
      :class="{
        'break-words bg-blue-400 dark:bg-purple-800 dark:text-gray-300':
          'true' == author,
        'bg-blue-200 dark:bg-indigo-600': 'true' != author,
      }"
    >
      This is a message
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
  },
}
</script>

<style>
</style>
