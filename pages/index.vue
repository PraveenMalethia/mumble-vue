<template>
  <div class="flex h-screen bg-green-300">
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="flex justify-between items-center bg-blue-300 p-4">
        <div class="flex">Left</div>
        <div class="flex">Right</div>
      </header>
      <div class="flex h-full">
        <nav class="flex w-72 h-full bg-pink-500">
          <div class="w-full flex mx-auto px-6 py-8">
            <div
              class="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed"
            >
              Sidebar
            </div>
          </div>
        </nav>
        <main
          class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14"
        >
          <div class="flex w-full mx-auto px-6 py-8">
            <div
              class="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed"
            >
              <div
                class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600"
              >
                Post
              </div>
              <div
                class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600"
              >
                Post
              </div>
              <div
                class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600"
              >
                Post
              </div>
              <div
                class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600"
              >
                Post
              </div>
              <div
                class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600"
              >
                Post
              </div>
            </div>
          </div>
        </main>
        <nav class="flex w-72 h-full bg-yellow-400">
          <div class="w-full flex mx-auto px-6 py-8">
            <div
              class="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed"
            >
              Rightbar
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(13deg, #7bcfeb 14%, #e685d3 64%);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(13deg, #c7ceff 14%, #f9d4ff 64%);
}
::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: inset 7px 10px 12px #f0f0f0;
}
</style>
