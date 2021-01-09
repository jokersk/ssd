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
            <template v-for="product in products">
                <button
                    :key="product.label"
                    class="border border-black bg-white hover:bg-gray-400 py-2 w-36"
                >
                    abc
                </button>
            </template>
        </div>
        <div class="-mx-10 mt-10 relative">
            <img
                src="https://picsum.photos/1200/630"
                class="w-full h-full object-cover"
                alt=""
            />
            <div class="absolute top-0 left-0 w-full h-full flex items-center">
                <div class="w-1/5"></div>
                <div class="w-1/3 space-y-6">
                    <div class="text-4xl">
                        laboris eu ipsum duis id
                    </div>
                    <span class="">
                        Deserunt ut duis ut nostrud reprehenderit anim laboris
                        eu ipsum duis id eiusmod nisi. Duis Lorem consequat
                        irure velit. Irure eiusmod anim deserunt sunt nisi nisi
                        tempor. Deserunt in voluptate enim nulla.
                    </span>
                    <button class="border border-white px-36 py-2">
                        > Detail
                    </button>
                </div>
            </div>
        </div>
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
