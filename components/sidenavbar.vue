<template>
  <div class="px-4 ml-24 mt-0 fixed hidden md:block">
    <div v-for="tab in tabs" :key="tab.id">
      <p
        class="cursor-pointer transition ease-in duration-300 rounded-full mr-auto font-medium text-lg tracking-wide inline-block p-3 mb-6"
      >
        <span v-if="current == tab.id" class="text-blue-600">{{
          tab.title
        }}</span>
        <span v-else class="text-gray-700"
          ><fa class="mr-2" :icon="tab.icon" />{{ tab.title }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNavBar',
  data() {
    return {
      tabs: [
        { title: 'Home', id: 1, icon: 'home' },
        { title: 'Inbox', id: 2, icon: 'inbox' },
        { title: 'Contributers', id: 3, icon: 'users' },
        { title: 'Articles', id: 4, icon: 'file' },
        { title: 'Discussions', id: 5, icon: 'users' },
        { title: 'Topics', id: 6, icon: 'tags' },
        { title: 'Settings', id: 7, icon: 'cog' },
      ],
    }
  },
  props: {
    current: 0,
  },
}
</script>
