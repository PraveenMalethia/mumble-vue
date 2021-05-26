<template>
    <div class="bg-gray-100 min-h-screen">
        <div class="bg-gray-100 grid md:grid-cols-3 lg:grid-cols-4 m-auto dark:bg-gray-800 py-4 px-4 sm:px-6 lg:py-4">
           <div class="lg:col-span-1 hidden lg:block mt-10 md:mt-20">
                <sidenavbar current="home" />
            </div>

            <div class="col-span-2 hidden md:block mt-10 md:mt-20">
                <post />
                <post />
                <post />
                <post />

            </div>

            <div class="md:col-span-1 ml-4 block mt-10 md:mt-20 md:-ml-4">
                <div class="bg-white  w-full rounded-md border-2 border-gray-200 mt-4 px-6 pt-4 py-4 w-full">
                    <div class="px-4 py-2">
                        <img src="https://mumbleapi.herokuapp.com/static/images/pravenn.jpg" class="h-44 m-auto rounded-full">
                        
                        <center>
                            <p class="text-2xl m-auto mt-6 justify-self-center text-gray-500 font-semibold">{{ $route.params.username }}</p>
                        </center>

                        <p class="text-lg font-light mt-4">Proffesional Web devolver! Using django and vue js.</p>

                        <div class="flex items-center justify-center mt-6">
                            <div class="flex-col">
                                <p class="text-2xl text-gray-500 font-light px-2">+0</p>
                                <p class="mt-2 text-gray-500">Vote ratio</p>
                            </div>

                            <div class="flex-col ml-4">
                                <p class="text-2xl text-gray-500 font-light px-2">78</p>
                                <p class="mt-2 text-gray-500">Followers</p>
                            </div>
                        </div>
                        <center>
                              <button class="bg-white border-2 mt-6 border-blue-600 py-1 px-5 rounded
                             mr-8 text-blue-600 hover:bg-blue-600 hover:text-white transition ml-4
                            ease-in duration-600 text-lg font-semibold">Follow</button>
                        </center>
                
                        
                    </div>
                </div>

                <topics class="pr-5 w-11/12" />                
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
