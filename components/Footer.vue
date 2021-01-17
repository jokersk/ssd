<template>
    <div>
        <BottomSection />
        <BackToTop />
        <footer class="bg-ssd-gray" aria-labelledby="footerHeading">
            <h2 id="footerHeading" class="sr-only">Footer</h2>
            <div class="container mx-auto py-12">
                <div class="flex flex-col justify-center space-y-10 text-white">
                    <div class="flex justify-center items-start md:pt-10">
                        <img
                            class="block"
                            src="~/assets/images/logo-white.svg"
                            width="160"
                        />
                    </div>
                    <div class="flex flex-col lg:flex-row justify-around items-stretch">
                        <div
                            v-for="(col, colIndex) in footerDatas"
                            :key="colIndex"
                            class="space-y-3 lg:border-l border-true-gray-500 px-8 lg:w-1/5"
                            :class="
                                colIndex == footerDatas.length - 1
                                    ? 'md:border-r'
                                    : ''
                            "
                        >
                            <div
                                v-for="(row, rowIndex) in col"
                                :key="rowIndex"
                                class="flex justify-between items-center border-true-gray-500 border-b lg:border-b-0"
                            >
                                <div>
                                    {{ row.label }}
                                </div>
                                <component :is="row.icon" class="w-5" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__hr mt-8"></div>
                <div class="border-gray-700 pt-8 md:flex md:justify-between">
                    <div
                        class="text-base text-white md:mt-0 uppercase"
                    >
                        &copy; 2020 Shiseido Co., Ltd. All rights reserved.
                    </div>
                    <div class="flex justify-center items-center space-x-4">
                       <IconFb /> 
                       <IconIn /> 
                       <IconLine /> 
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
import IconContact from '@/components/icons/IconContact'
import IconLocation from '@/components/icons/IconLocation'
import IconLang from '@/components/icons/IconLang'
export default {
    components: {
        IconContact,
        IconLocation,
        IconLang,
    },
    data() {
        return {
            footerDatas: [
                [
                    { label: 'ABOUT', link: '', icon: '' },
                    { label: 'PRODUCTS', link: '', icon: '' },
                    { label: 'TREND & AWARDS', link: '', icon: '' },
                    { label: 'NEWS', link: '', icon: '' },
                ],
                [
                    { label: 'FOR PROFESSIONAL', link: '', icon: '' },
                    { label: 'FOR CUSTOMER', link: '', icon: '' },
                ],
                [
                    { label: 'COMPANY', link: '', icon: '' },
                    { label: 'SHISEIDO GROUP', link: '', icon: '' },
                    { label: 'RECRUIT', link: '', icon: '' },
                    { label: 'SITEMAP', link: '', icon: '' },
                ],
                [
                    { label: 'TERMS OF USE', link: '', icon: '' },
                    { label: 'PRIVACY POLICY', link: '', icon: '' },
                    { label: 'SIGN UP FOR ', link: '', icon: '' },
                    { label: 'SALON SEARCH', link: '', icon: '' },
                ],
                [
                    { label: 'CONTACT', link: '', icon: 'IconContact' },
                    { label: 'FIND A SALON', link: '', icon: 'IconLocation' },
                    { label: 'SELECT COUNTRY', link: '', icon: 'IconLang' },
                ],
            ],
        }
    },
}
</script>
<style>
.footer__hr {
    @apply bg-white bg-opacity-50;
    height: 1px;
    margin-left: calc(-1 * (100vw - 100%) / 2);
    margin-right: calc(-1 * (100vw - 100%) / 2);
}
</style>
