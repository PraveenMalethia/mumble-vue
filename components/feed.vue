<template>
  <div class="mt-4">
    <div
      class="bg-white shadow-sm rounded-md py-5 px-5 border-2 border-gray-200 w-full md:w-11/12"
    >
      <textarea
        placeholder="Share your brilliant thought"
        class="p-4 mt-4 bg-gray-100 h-24 rounded-lg width-me border-2 border-gray-200 focus:border-2 focus:outline-none focus:border-blue-300"
      >
      </textarea>


      <button
        class="btn-primary"
      >
        <fa icon="code" /> Mumble Now
      </button>
    </div>

    <post />
  </div>
</template>

<script>
export default {}
</script>

<style>
.width-me {
  width: 98%;
}
</style>
