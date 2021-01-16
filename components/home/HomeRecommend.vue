<template>
    <div class="md:pb-12 home-recommend">
        <swiper class="swiper" ref="mySwiper" :options="swiperOption">
            <CarouselSlide
                v-for="(item, itemIndex) in mockDatas"
                :key="itemIndex"
                class="transform text-white"
                :image="item.image"
                :title="item.title"
                :body="item.body"
                :date="item.date"
            />
            <div
                class="swiper-pagination bottom-0 px-36 swiper-pagination-bullets hidden md:flex"
                slot="pagination"
            ></div>
            <CarouselPrev
                class="hidden md:block md:bottom-24 left-16"
                slot="button-prev"
            />
            <CarouselNext
                class="hidden md:block md:bottom-24 right-16"
                slot="button-next"
            />
        </swiper>
        <div
            class="py-10 px-14 relative md:hidden bg-gray-800 text-white text-center space-y-6"
        >
            <div>
                <CarouselPrev
                    class="absolute top-1/2 left-4 md:bottom-24"
                    @click.native="slidePrev"
                />
                <CarouselNext
                    class="absolute top-1/2 right-4 md:bottom-24"
                    @click.native="slideNext"
                />
            </div>
            <p class="max-w-full uppercase">
                {{ activeContent.type }}
            </p>
            <p class="max-w-full text-2xl font-bold">
                {{ activeContent.title }}
            </p>
            <p class="max-w-full text-xl text-gray-300 font-semibold">
                {{ activeContent.body }}
            </p>
            <p class="pt-4 text-xl">
                {{ activeContent.date }}
            </p>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive,
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        },
    },
    data() {
        return {
            firstSwiper: null,
            swiperOption: {
                centeredSlides: true,
                init: false,
                breakpoints: {
                    640: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 3.5,
                    },
                },
                slidesPerView: 1.5,
                loop: true,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                },
            },
            activeContent: {
                type: 'NEWS',
                title: 'E - LEARNING',
                body:
                    'Our video tutorials are created with step-by-step instructions so you can follow each step and upgrade… ',
                date: '2021.1.5',
            },
            mockDatas: [
                {
                    image:
                        'https://images.ctfassets.net/qf666eyypqhw/4ygbwtk5Xe142Gz5sVUt52/cd6acf9fa3652b0039d43192fab26333/BI21_TOP_KV.jpg?h=1400&w=2100',
                    type: 'NEWS',
                    title: 'E - LEARNING',
                    body:
                        'Our video tutorials are created with step-by-step instructions so you can follow each step and upgrade… ',
                    date: '2021.1.5',
                },
                {
                    image:
                        'https://images.ctfassets.net/qf666eyypqhw/73WztEXOSVRTK80A7Zv1cs/4ff816e91751eb456bb13108d42a63c0/BS21SS_TOP_KV.jpg?h=1400&w=2100',
                    type: 'NEWS',
                    title: '#DESIGN YOURSELF',
                    body:
                        'The right perm design can bring you multiple looks that you can enjoy day by day.It is up to you to make your…  ',
                    date: '2021.1.5',
                },
                {
                    image:
                        'https://images.ctfassets.net/qf666eyypqhw/3ZuPnafmaWgTaayvw03qKG/dea66293de4987413c0f9c3531a58d98/DaB_Kawaragi_Main_page.jpg?h=1400&w=2100',
                    type: 'NEWS',
                    title: 'BEAUTY CREATORS TALK',
                    body:
                        '10 Questions To Your Favorite Hair Stylists.Discovering the lifestory of Top Beauty Creators.They are challenged…',
                    date: '2021.1.5',
                },
                {
                    image:
                        'https://images.ctfassets.net/qf666eyypqhw/1R7dKCl6aNvnkoTbKJwNnv/e2d93161c2c10db6fb60274d41856404/Beauty_Creators_Community.jpg?h=1400&w=2100',
                    type: 'NEWS',
                    title: '#DESIGN YOURSELF',
                    body:
                        'The right perm design can bring you multiple looks that you can enjoy day by day.It is up to you to make your…  ',
                    date: '2021.1.5',
                },
                {
                    image:
                        'https://images.ctfassets.net/qf666eyypqhw/4BLdb37wm1yowwk34iSkj/83565fb609ec560abdc39ddaf4ef9d89/salonrecycl_KV.jpg?h=1400&w=2100',
                    type: 'NEWS',
                    title: 'BEAUTY CREATORS TALK',
                    body:
                        '10 Questions To Your Favorite Hair Stylists.Discovering the lifestory of Top Beauty Creators.They are challenged…',
                    date: '2021.1.5',
                },
            ],
        }
    },
    methods: {
        slidePrev() {
            this.swiper.slidePrev()
        },
        slideNext() {
            this.swiper.slideNext()
        },
    },
    mounted() {
        this.swiper.on('slideChange', (e) => {
            this.activeContent = this.mockDatas[this.swiper.realIndex]
        })
        this.swiper.init()
    },
}
</script>
<style lang="scss">
.home-recommend {
    background-image: url(~assets/images/bg.jpg);
    .swiper-container {
        overflow: visible;
        overflow-x: hidden;
    }
    .swiper-slide-prev,
    .swiper-slide-active,
    .swiper-slide-next {
        .carousel-slide__text {
            @apply md:block;
        }
    }
    .carousel-slide__text {
        @apply hidden;
    }
    .swiper-slide {
        transition: all 0.4s;
    }
    .swiper-pagination-bullet-custom {
        @apply h-1 bg-black rounded-none my-0 mx-0 flex-grow;
    }
    .swiper-container-horizontal
        > .swiper-pagination-bullets
        .swiper-pagination-bullet {
        @apply mx-0;
    }
    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 17px;
    }
}
</style>
