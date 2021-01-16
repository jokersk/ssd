<template>
    <swiper-slide class="transform">
        <div class="flex-col">
            <img slot="image" class="w-full object-cover" :src="image" alt="" />
            <div
                class="text-left space-y-4 py-4 px-8 hidden md:block carousel-slide__text"
            >
                <p class="max-w-full truncate uppercase">
                    {{ type }}
                </p>
                <p class="max-w-full text-2xl truncate font-bold">
                    {{ title }}
                </p>
                <p class="max-w-full text-xl font-semibold">
                    {{ body }}
                </p>
                <p class="pt-4">
                    {{ date }}
                </p>
            </div>
        </div>
    </swiper-slide>
</template>
<script>
import { SwiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
        SwiperSlide,
    },
    props: ['title', 'body', 'type', 'date', 'image'],
}
</script>
