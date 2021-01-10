<template>
    <nav
        class="bg-black opacity-75 fixed w-full nav-bar z-20"
        :class="{ pinned: pinned }"
    >
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
                <!-- Mobile menu button-->
                <button
                    @click="open = !open"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    x-bind:aria-expanded="open"
                >
                    <span class="sr-only">Open main menu</span>
                    <!-- Icon when menu is closed. -->
                    <svg
                        x-state:on="Menu open"
                        x-state:off="Menu closed"
                        :class="{ hidden: open, block: !open }"
                        class="h-6 w-6 block"
                        x-description="Heroicon name: menu"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                    <!-- Icon when menu is open. -->
                    <svg
                        x-state:on="Menu open"
                        x-state:off="Menu closed"
                        :class="{ hidden: !open, block: open }"
                        class="h-6 w-6 hidden"
                        x-description="Heroicon name: x"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>
            <div class="flex justify-between py-5">
                <div class="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                    <nuxt-link to="/" class="flex-shrink-0 flex items-center">
                        <img
                            class="block"
                            src="~/assets/images/logo-white.svg"
                            width="160"
                        />
                    </nuxt-link>
                    <div class="hidden md:flex flex-grow justify-between items-center sm:ml-10">
                        <template v-for="(menu, index) in menuRecords">
                            <nuxt-link
                                :to="menu.to"
                                :key="index"
                                class="border-indigo-500 text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium"
                            >
                                {{ menu.name }}
                            </nuxt-link>
                        </template>
                    </div>
                </div>
                <div
                    class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 space-x-4"
                >
                    <a
                        href="#"
                        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center px-1 pt-1 border-b-2 text-sm font-medium flex flex-col"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                        </svg>
                        <div class="hidden lg:block">
                            CONTACT
                        </div>
                    </a>
                    <a
                        href="#"
                        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center px-1 pt-1 border-b-2 text-sm font-medium flex flex-col"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                        </svg>
                        <div class="hidden lg:block">
                            FIND A SALON
                        </div>
                    </a>
                    <a
                        href="#"
                        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center px-1 pt-1 border-b-2 text-sm font-medium flex flex-col hidden md:flex"
                    >
                        <div class="border px-1 border-black">
                            <img
                                src="~/assets/images/flag-world.svg"
                                alt=""
                                width="24"
                            />
                        </div>
                        <div class="hidden lg:block">
                            LANGUAGE
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            pinned: true,
            open: false,
            menuRecords: [
                {
                    name: 'ABOUT',
                    to: '/',
                },
                {
                    name: 'PRODUCTS',
                    to: '/products',
                },
                {
                    name: 'TREND & AWARDS',
                    to: '/',
                },
                {
                    name: 'NEWS',
                    to: '/',
                },
                {
                    name: 'For Profressional',
                    to: '/for-profressional',
                },
                {
                    name: 'For Customer',
                    to: '/',
                },
            ],
        }
    },
    mounted() {
        this.addScrollListener()
    },
    methods: {
        addScrollListener() {
            let pxTrigger = 0
            const menuHeight = 92
            let pinned = true
            document.addEventListener('scroll', () => {
                const pxFromTop = window.scrollY || window.pageYOffset
                if (pxFromTop > menuHeight) {
                    this.pinned = pxFromTop < pxTrigger
                    pxTrigger = pxFromTop
                } else {
                    this.pinned = true
                }
            })
        },
    },
}
</script>
<style>
.nav-bar {
    top: -92%;
    transition: top 0.6s ease-in;
}
.nav-bar.pinned {
    top: 0;
}
</style>
