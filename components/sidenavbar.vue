<template>
  <div class="px-4 ml-24 mt-0 fixed hidden md:block">
    <div v-for="tab in tabs" :key="tab.id">
      <button
        @click="Navigation(tab.to)"
        class="focus:outline-none cursor-pointer transition ease-in duration-300 rounded-full mr-auto font-medium text-lg tracking-wide inline-block p-3 mb-6"
      >
        <span v-if="current == tab.id" class="text-blue-600">{{
          tab.title
        }}</span>
        <span v-else class="text-gray-700 dark:text-gray-300"
          ><fa class="mr-2" :icon="tab.icon" />{{ tab.title }}</span
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNavBar',
  data() {
    return {
      tabs: [
        { title: 'Home', id: 1, icon: 'home', to: '/' },
        { title: 'Inbox', id: 2, icon: 'inbox', to: '/inbox' },
        { title: 'Contributers', id: 3, icon: 'users', to: '/contributors' },
        { title: 'Articles', id: 4, icon: 'file', to: '/articles' },
        { title: 'Discussions', id: 5, icon: 'users', to: '/discussion' },
        { title: 'Topics', id: 6, icon: 'tags', to: '/topics' },
        { title: 'Settings', id: 7, icon: 'cog', to: '/settings' },
      ],
    }
  },
  props: {
    current: 0,
  },
  methods: {
    Navigation(to) {
      this.$router.push(to)
    },
  },
}
</script>
