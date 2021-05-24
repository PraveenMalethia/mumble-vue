<template>
    <div class="flex justify-between w-full m-4 items-center mb-6">
        <div class="flex items-center">
            <img :src="image_src" class="h-10" style="border-radius:50%">
            <p class="ml-2 text-gray-700 font-semibold">{{ username }}</p>

        </div>

        <button class="bg-white border-2 border-blue-600 py-1 px-3 rounded abolute right-5 mr-8 text-blue-600 
        hover:bg-blue-600 hover:text-white transition ease-in duration-600 text-sm font-semibold">Follow</button>

    </div>
</template>

<script>
export default {
    props:{
        image_src:'',
        username:''
    },
}
</script>
