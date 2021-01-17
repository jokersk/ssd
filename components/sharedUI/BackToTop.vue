<template>
    <div
        class="w-full flex justify-between px-10 py-6 border-t cursor-pointer"
        @click="backToTop"
    >
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