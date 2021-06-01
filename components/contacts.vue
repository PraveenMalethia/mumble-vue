<template>
  <div class="bg-white dark:bg-gray-800 h-screen">
    <div class="flex space-x-2 p-2 border-b-2 border-blue-700 dark:border-purple-900">
        <img src="https://mumbleapi.herokuapp.com/static/images/default.png" class="h-10 w-10 rounded-full">
        <input placeholder="Search" class="hidden md:block p-2 bg-gray-100 dark:bg-gray-900 h-10 rounded-2xl width-5/6 
        dark:text-gray-100 focus:border-2 focus:outline-none focus:border-blue-300">
    </div>

    <div class="mt-4 h-full">
      <p class="ml-4 text-purple-700 text-xl mb-2 font-semibold tracking-wide hidden md:block">Chats</p>

      <div class="overflow-y-auto h-screen bg-white dark:bg-gray-800">
          <div v-for="contact in contacts" :key="contact.id">
            <client-only>
             <contact :contact="contact" :currentName="currentName" v-on:changeCurrent="changeCurrent"/>
            </client-only>
          </div>   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      contacts: [
        { username: 'Praveen Malethia', id: 0, lastmessage: 'Hi, good morining blah blah blah blah blah blah blah blah blah blah blah blah blah' },
        { username: 'Dennis Ivy', id: 1, lastmessage: 'Hi, good night blah blah blah blah blah blah blah blah blah blah blah blah blah'  },
        { username: 'Web Dev Junkie', id: 2, lastmessage: 'Hi, good evening blah blah blah blah blah blah blah blah blah blah blah blah blah' },
        { username: 'MidouWebDev', id: 3, lastmessage: 'Hi, good afternoon blah blah blah blah blah blah blah blah blah blah blah blah blah'  },
        { username: 'Srkar Kandula', id: 4, lastmessage: 'Hi, good noon blah blah blah blah blah blah blah blah blah blah blah blah blah'  },
        { username: 'Mumble Team', id: 5, lastmessage: 'Hi, good midnight blah blah blah blah blah blah blah blah blah blah blah blah blah' },
        { username: 'Shahriar P.Shuvo', id: 6, lastmessage: 'Bonjour blah blah blah blah blah blah blah blah blah blah blah blah blah'  },
        { username: 'Elon Musk', id: 7, lastmessage: 'Space X blah blah blah blah blah blah blah blah blah blah blah blah blah blah'  },
        { username: 'Elon Msusk', id: 8, lastmessage: 'Space X blah blah blah blah blah blah blah blah blah blah blah blah blah blah'  },

      ],
      currentName:null
    }
  },
  mounted(){
    this.currentName = this.contacts[0].username
  },
  methods: {
    changeCurrent(username){
      this.currentName = username
      this.$nuxt.refresh()    
    } 
  }
}
</script>

<style scoped>
  .height-me{
    height:33rem
  }
</style>
