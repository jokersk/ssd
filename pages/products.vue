<template>
    <div class="container mx-auto pt-48">
        <div class="text-3xl font-bold uppercase relative">
            <div class="text-center">
                products
            </div>
            <div
                class="text-base absolute top-0 right-0 w-full flex justify-end space-x-3"
            >
                <button
                    class="border w-28 py-1 hover:bg-gray-300 bg-opacity-75 bg-white"
                >
                    All
                </button>
                <button
                    class="border w-28 py-1 hover:bg-gray-300 bg-opacity-75 bg-white"
                >
                    Customer
                </button>
            </div>
        </div>
        <div class="grid grid-cols-6 gap-4 mt-24 mb-16">
            <button
                v-for="item in 6"
                :key="item"
                class="border w-full flex flex-col items-center py-1"
            >
                <span class="uppercase">
                    hair care
                </span>
                <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>
        </div>
        <ImageWithText class="text-white">
            <img
                slot="image"
                src="https://picsum.photos/1200/330"
                class="w-full h-full object-contain"
                alt=""
            />
            <span slot="title" class="uppercase">
                Hair care
            </span>
            <div slot="body" class="">
                Deserunt ut duis ut nostrud reprehenderit anim laboris eu ipsum
                duis id eiusmod nisi. Duis Lorem consequat irure velit. Irure
            </div>
        </ImageWithText>
        <div class="py-24">
            <div class="flex justify-center uppercase text-2xl font-bold pb-12">
                lineup
            </div>
            <div class="grid grid-cols-3 gap-8">
                <Card v-for="(item, index) in items" :key="index">
                    <span slot="title">
                        {{ item.title }}
                    </span>
                    <span slot="body">
                        {{ item.body }}
                    </span>
                    <span slot="tail" class="text-base">
                        {{ item.tail }}
                    </span>
                </Card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'abc',
                    body: 'Aliquip Lorem sit',
                    tail: 'Aliquip Lorem sit minim cillum non ad anim deserunt '
                },
                {
                    title: 'abc',
                    body: 'Aliquip Lorem sit',
                    tail: 'Aliquip Lorem sit minim cillum non ad anim deserunt '
                },
                {
                    title: 'abc',
                    body: 'Aliquip Lorem sit',
                    tail: 'Aliquip Lorem sit minim cillum non ad anim deserunt '
                }
            ]
        }
    }
}
</script>
