<template>
    <div class="px-4 ml-24 mt-0 fixed hidden md:block">
        <div v-for="tab in tabs" :key="tab.id">
            <p class="cursor-pointer transition ease-in duration-300
             rounded-full mr-auto font-medium text-lg tracking-wide inline-block p-3 mb-6"
            ><span v-if="current == tab.id" class="text-blue-600" >{{ tab.title }}</span>
            <span v-else class="text-gray-700">{{ tab.title }}</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name:'SideNavBar',
    data(){
        return{
            tabs: [
                {title: 'Home', id:'home'},
                {title: 'Contributers', id: 'Contributers'},
                {title: 'Inbox', id: 'inbox'},
                {title: 'Topics', id: 'topics'},
                {title: 'Settings', id: 'settings'},
      ],
        }
    },
    props:{
        current:''
    },
}
</script>
