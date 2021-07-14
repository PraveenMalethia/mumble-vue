<template>
  <div class="bg-gray-100 grid grid-cols-9 m-auto dark:bg-gray-900 mb-20 w-screen">
    <div class="col-span-2 md:col-span-3 mt-10 md:mt-20 rounded-l-md overflow-hidden">
      <contacts />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Mumble | Inbox',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Mumble | Tech space for real developers',
      },
    ],
  },
  data:()=>{
    return {
      messages:[]
    }
  },
}
</script>

<style>
::-webkit-scrollbar {
    width: 8px;
    background-color: #c4d0d3;
}
::-webkit-scrollbar-thumb {
    background-color: #5aa5b9;
    border-radius: 5px;
}
</style>
