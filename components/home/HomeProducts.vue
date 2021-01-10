<template>
    <div class="bg-gray-300 md:p-10 relative">
        <div class="flex justify-center pb-12 flex-col md:flex-row pt-8">
            <div class="text-center">
                <b class="uppercase text-2xl">
                    Products
                </b>
            </div>
            <div class="text-right md:absolute md:right-0 pr-10 md:pt-2">
                <span>> View All</span>
            </div>
        </div>
        <div class="flex justify-between space-x-4 overflow-x-scroll">
            <template v-for="(product, index) in products">
                <button
                    :key="index"
                    class="border border-black bg-white hover:bg-gray-400 py-2 w-40 flex-shrink-0"
                >
                    abc
                </button>
            </template>
        </div>
        <ImageWithText class="md:-mx-10 mt-10 w-full md:w-auto" /> 
        <div class="-mt-24 z-10 relative space-x-10 flex justify-center w-full overflow-x-scroll">
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
