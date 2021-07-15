<template>
  <div
    class="
      min-w-screen min-h-screen
      dark:bg-gray-900
      bg-blue-100
      flex
      items-center
      p-5
      lg:p-20
      overflow-hidden
      relative
    "
  >
    <div
      class="
        flex
        min-h-full min-w-full
        rounded-3xl
        dark:bg-gray-600
        dark:text-gray-300
        bg-white
        shadow-xl
        p-10
        lg:p-20
        text-gray-800
        relative
        md:flex
        items-center
        text-center
      "
    >
      <div class="flex mx-auto">
        <img class="align-center" src="/images/login/404.svg" />
      </div>
    </div><br><br><br><br>
    <button class="btn-error" @click="$router.push('/')"> <fa icon="chevron-left" class="mr-2"/> Back to Home</button>
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>

<style>
</style>