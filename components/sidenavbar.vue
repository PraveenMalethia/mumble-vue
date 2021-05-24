<template>
    <div class="px-4 ml-24 mt-0 fixed hidden md:block">
        <div v-for="tab in tabs" :key="tab.id">
            <p class="cursor-pointer transition ease-in duration-300
             rounded-full mr-auto font-medium text-lg tracking-wide inline-block p-3 mb-6"
            ><span v-if="current == tab.id" class="text-blue-600" >{{ tab.title }}</span>
            <span v-else class="text-gray-700"><fa class="mr-2" :icon="tab.icon"/>{{ tab.title }}</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name:'SideNavBar',
    data(){
        return{
            tabs: [
                {title: 'Home', id:1,icon: 'home'},
                {title: 'Contributers', id:2,icon: 'users'},
                {title: 'Inbox', id: 3,icon: 'inbox'},
                {title: 'Topics', id: 4,icon: 'tags'},
                {title: 'Settings', id: 5,icon: 'cog'},
      ],
        }
    },
    props:{
        current:0
    },
}
</script>
