<template>
    <div class="flex mb-3 overflow-clip w-full pr-28 break-all"
        :class="{'flex-row-reverse pl-28 pr-0': 'true' == author}">
        <img src="https://us-east-1.linodeobjects.com/mumble/a14f6cc2-5736-18fd-402c-505b197b8f9c.jpeg?AWSAccessKeyId=0GX0K8X1O9RE83ACTB4G&Signature=Mo%2Bxm89zlyfJbaOePTTCOVarx80%3D&Expires=1622460807" 
        class="rounded-full h-10 mx-3">
        <div class="p-2 rounded max-w-full flex break-words dark:text-gray-300" 
        :class="{'break-words bg-blue-400 dark:bg-purple-800 dark:text-gray-300': 'true' == author,
         'bg-blue-200 dark:bg-indigo-600': 'true' != author}">
            sssssssssssssssssssssssssssssssssssss
        </div>
    </div>
    
</template>

<script>
export default {
    props: {
        author:String
    }
}
</script>

<style>

</style>
