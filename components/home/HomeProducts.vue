<template>
    <div class="bg-gray-300 p-10 relative">
        <div class="flex justify-between pb-12">
            <span></span>
            <b class="uppercase text-2xl">
                Products
            </b>
            <span>> View All</span>
        </div>
        <div class="flex justify-between">
            <template v-for="(product, index) in products">
                <button
                    :key="index"
                    class="border border-black bg-white hover:bg-gray-400 py-2 w-36"
                >
                    abc
                </button>
            </template>
        </div>
        <ImageWithText class="-mx-10 mt-10 " /> 
        <div class="-mt-24 z-10 relative space-x-10 flex justify-center">
            <img src="https://picsum.photos/280/160" alt="" />
            <img src="https://picsum.photos/280/160" alt="" />
            <img src="https://picsum.photos/280/160" alt="" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products: [
                {
                    label: 'hair care',
                    content: '',
                },
                {
                    label: 'hair color',
                    content: '',
                },
                {
                    label: 'hair care',
                    content: '',
                },
                {
                    label: 'hair color',
                    content: '',
                },
            ],
        }
    },
}
</script>
