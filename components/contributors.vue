<template>
    <div class="bg-white rounded-md border-2 border-gray-200 w-full">
        <div class="px-6 pt-4 py-4 w-full">
            <p class="text-gray-500 font-semibold text-2xl mb-2">Top Contributers</p>
            <router-link to="/contributors" class="py-4 text-blue-500 font-semibold">View More</router-link>
        </div>
        

        <hr class="w-full mb-4 bg-gray-300 rounded">

        <div>
            <usermini image_src="https://mumbleapi.herokuapp.com/static/images/pravenn.jpg" username="Praveen Malethia" />
            <usermini image_src="https://mumbleapi.herokuapp.com/static/images/web_dev_junki.png" username="Web Dev Junkie" />
            <usermini image_src="https://mumbleapi.herokuapp.com/static/images/default.png" username="Srikar Kandula" />
            <usermini image_src="https://yt3.ggpht.com/lmy2jPItWN3pTlxZZRwuSHmJ_YC6AI--GC25PkBK5b0yHPFTBhvMAzJLB9AsMBae2Gc8ENHRoA=s88-c-k-c0x00ffffff-no-rj" username="Mumble Team" />
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
