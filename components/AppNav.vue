<template>
    <nav class="bg-black opacity-75 fixed w-full nav-bar" :class="{ pinned: pinned }">
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between py-5">
                <div class="flex-shrink-0 flex items-center">
                    <img
                        class="block"
                        src="~/assets/images/logo-white.svg"
                        width="160"
                    />
                </div>
                <template v-for="(menu, index) in menuRecords">
                    <a
                        href="#"
                        :key="index"
                        class="border-indigo-500 text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium"
                    >
                        {{ menu.name }}
                    </a>
                </template>
                
                <a
                    href="#"
                    class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center px-1 pt-1 border-b-2 text-sm font-medium flex flex-col"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <div>
                        CONTACT
                    </div>
                </a>
                <a
                    href="#"
                    class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center px-1 pt-1 border-b-2 text-sm font-medium flex flex-col"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <div>
                        FIND A SALON
                    </div>
                </a>
                <a
                    href="#"
                    class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center px-1 pt-1 border-b-2 text-sm font-medium flex flex-col"
                >
                    <div class="border px-1 border-black">
                        <img
                            src="~/assets/images/flag-world.svg"
                            alt=""
                            width="24"
                        />
                    </div>
                    <div>
                        LANGUAGE
                    </div>
                </a>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            pinned: true,
            menuRecords: [
                {
                    name: 'ABOUT'
                },
                {
                    name: 'PRODUCTS'
                },
                {
                    name: 'TREND & AWARDS'
                },
                {
                    name: 'NEWS'
                },
                {
                    name: 'For Profressional'
                },
                {
                    name: 'For Customer'
                }
         ]
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
