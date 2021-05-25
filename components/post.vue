<template>
    <div class="bg-white w-full md:w-11/12 rounded-md border-2 border-gray-200 mt-6 py-6 px-4">
        <div class="flex justify-between items-center">
            <div class="flex">
                <img src="https://mumbleapi.herokuapp.com/static/images/pravenn.jpg" class="h-10 md:h-12 lg:h-14">
                <div class="ml-4">
                    <p class="font-bold lg:text-lg">Praveen</p>
                    <p class="font-light">@praveen</p>
                </div>
            </div>

            <div>
               <p class="text-gray-600 lg:text-lg">10 days ago</p>
            </div>
        </div>

            <div class="flex items-center px-4 py-2">
                <div>
                    <button @click="UpVote()" class="px-1 focus:outline-none"><fa icon="chevron-up"/></button>
                    <p class="pl-0.5">36</p>
                    <button @click="DownVote()" class="px-1 focus:outline-none"><fa icon="chevron-down"/></button>
                </div>

                <div class="mt-6 ml-6">
                <p class="text-gray-600">Lorem Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                </div>
            </div>

            <hr class="mt-4 mb-4 bg-gray-300">
    </div>
</template>

<script>
export default {
    methods:{
        UpVote(){
            console.log("Up Voted")
        },
        DownVote(){
            console.log("Down Voted")
        }
    }
}
</script>
