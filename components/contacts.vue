<template>
  <div class="bg-white dark:bg-gray-800 h-screen rounded-xl">
    <div
      class="
        flex
        space-x-2
        p-2
        border-b-2 border-blue-700
        dark:border-purple-900
      "
    >
      <img
        src="https://mumbleapi.herokuapp.com/static/images/default.png"
        class="h-10 w-10 rounded-full"
      />
      <input
        placeholder="Search"
        class="
          hidden
          md:block
          p-2
          bg-gray-100
          dark:bg-gray-900
          h-10
          rounded-2xl
          width-5/6
          dark:text-gray-100
          focus:border-2
          focus:outline-none
          focus:border-blue-300
          text-sm
        "
      />
    </div>

    <div class="mt-4 h-full">
      <p
        class="
          ml-4
          text-purple-700 text-xl
          mb-2
          font-semibold
          tracking-wide
          hidden
          dark:text-gray-300
          md:block
        "
      >
        Chats
      </p>
      <div class="overflow-y-auto h-screen bg-white dark:bg-gray-800">
        <div v-if="contacts.length > 0">
          <div v-for="contact in contacts" :key="contact.id">
            <client-only>
              <contact :contact="contact" />
            </client-only>
          </div>
        </div>
        <div v-else class="flex items-center justify-center">
          <span class="ml-3 dark:text-white text-gray-600 text-xl">
            Opps , No messages . You need to start talking to someone
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.error = false
    this.loading = true
    await this.$axios.get('/api/messages/').then((res) => {
      this.contacts = res.data
    })
    this.loading = false
  },
  data() {
    return {
      contacts: [],
      currentUser: null,
    }
  },
  mounted() {},
}
</script>

<style scoped>
.height-me {
  height: 33rem;
}
</style>
