<template>
    <div class="w-full bg-gray-500 flex justify-between px-10 py-6 text-white cursor-pointer" @click="backToTop">
        <div>
            TOP
        </div>
        <div>
            BACK TO TOP
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        backToTop() {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>