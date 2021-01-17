<template>
    <div class="mx-auto text mt-12">
        <div class="flex justify-center pb-12">
            <b class="uppercase text-2xl">
                TOOLS & CONTENTS
            </b>
        </div>
        <div class="grid md:grid-cols-2">
            <template v-for="(item, index) in mockDatas">
                <div class="relative" :key="index">
                    <img
                        class="w-full h-full object-cover"
                        :src="item.image"
                        alt=""
                    />
                    <div
                        class="absolute w-full h-full top-0 left-0 flex items-center"
                        :class=" `justify-${item.position} text-${item.textColor}` "
                    >
                        <div class="text-2xl w-1/2 text-center text-semibold">
                            {{ item.title }}
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mockDatas: [
                {
                    image: 'https://ssd-iamthecodeman.s3.amazonaws.com/images/for-p.jpg',
                    title: 'FOR PROFESSIONAL',
                    position: 'end',
                    textColor: 'white'
                },
                {
                    image: 'https://ssd-iamthecodeman.s3.amazonaws.com/images/for-cus.jpg',
                    title: 'FOR CUSTOMER',
                    position: 'start',
                    textColor: 'black'
                }
            ]
        }
    }
}
</script>
