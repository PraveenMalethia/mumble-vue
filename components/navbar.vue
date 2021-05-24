<template>
<div class="bg-indigo-50 w-screen fixed">
    <div class="flex bg-gray-600 py-2 px-3 md:justify-between md:py-3 md:px-7 items-center">
        <div>
            <h2 class="text-md md:text-xl text-gray-400 md:tracking-wide uppercase font-bold px-8 md:px-24">Mumble</h2>
        </div>

        <div class="flex items-center">
            <input class="transition duration-200 ease-in-out border shadow-lg border-transparent rounded-full py-2 px-4 bg-gray-400 focus:outline-none 
            focus:ring-2 focus:ring-blue-400 focus:border-transparent h-8 md:h-11 w-36 md:w-56 placeholder-gray-600" placeholder="Search">

            <div>
                <div class="flex items-center">
                    <p class="text-white ml-5 uppercase md:text-lg md:tracking-medium md:mr-6" @click="show_items = !show_items"><fa icon="bell"/></p>

                    <img src="https://mumbleapi.herokuapp.com/static/images/default.png" class="h-10 mr-4 md:mr-12 lg:mr-16">
                </div>
                    
                <!-- <p class="text-white ml-5 uppercase md:text-lg md:tracking-medium ml-4 md:mr-6" @click="show_items = !show_items">Bell</p>

                <img src="https://mumbleapi.herokuapp.com/static/images/default.png" class="h-10 mr-4 md:mr-12 lg:mr-16"> -->


                <div class="abolute">
                    <div v-if="show_items" class="absolute transition ease-in-out duration-1000 shadow-xl right-4 cursor-pointer bg-white rounded-md py-3 w-72 mt-4">
                        <div class="flex hover:bg-gray-200 rounded-md w-full px-2 py-4">
                            <img src="https://mumbleapi.herokuapp.com/static/images/pravenn.jpg" class="h-10" style="border-radius:50%">

                            <p class="ml-4 text-base font-medium text-blue-500">A mumble mentiong Praveen Malethia was created.</p>
                        </div>

                        <div class="flex hover:bg-gray-200 rounded-md w-full px-2 py-2">
                            <img src="https://mumbleapi.herokuapp.com/static/images/pravenn.jpg" class="h-10">

                            <p class="ml-4 text-base font-medium text-blue-500">A mumble mentiong Praveen Malethia was created.</p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'NavBar',
    data(){
        return{
            show_items:false
        }
    }
}
</script>
