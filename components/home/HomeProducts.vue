<template>
    <div class="md:p-10 relative">
        <Titletail>
            Products
        </Titletail>
        <div class="border-b ignore-width">
            <div
                class="flex justify-around items-center overflow-x-scroll w-2/3 mx-auto"
            >
                <div
                    class="w-1 h-1 bg-black rounded-full bg-opacity-50 flex-shrink-0"
                ></div>
                <template v-for="(product, index) in products">
                    <button
                        :key="index"
                        class="py-2 flex justify-center items-center opacity-50 font-semibold border-b hover:border-black hover:opacity-100 focus:ring-0 focus:outline-none"
                    >
                        <span>{{ product.label }}</span>
                    </button>
                    <div
                        :key="`dot-${index}`"
                        class="w-1 h-1 bg-black rounded-full bg-opacity-50 flex-shrink-0"
                    ></div>
                </template>
            </div>
        </div>
        <ImageWithText class="md:-mx-10 mt-16 w-full md:w-auto">
            <img
                slot="image"
                src="https://images.ctfassets.net/qf666eyypqhw/3FAQXEWPQ5UgMeR9dlfEJJ/2207b9fa2871a8166a8f25bc017a033b/SMC-KeyVisual-model.jpg?h=1350&w=2880"
                alt=""
            />
        </ImageWithText>
        <div
            class="-mt-12 z-10 relative flex justify-between items-center bg-white h-24 shadow-sm p-4 w-5/6 mx-auto"
        >
            <div class="border-r pl-2 pr-8 h-full flex items-center">
                <IconPrev />
            </div>
            <div class="space-x-8 text-gray-600">
                <span class="hover:text-shadow hover:text-white">SUBLIMIC</span>
                <span class="hover:text-shadow hover:text-white">THE HAIR CARE</span>
                <span class="hover:text-shadow hover:text-white">SALON PROGRAM</span>
            </div>
            <div class="border-l pl-8 pr-2 h-full flex items-center">
                <IconNext />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products: [
                {
                    label: 'HAIR CARE',
                    content: '',
                },
                {
                    label: 'HAIR COLOR',
                    content: '',
                },
                {
                    label: 'PERM',
                    content: '',
                },
                {
                    label: 'MEN',
                    content: '',
                },
                {
                    label: 'STYLYNG',
                },
                {
                    label: 'SKIN & BODY CARE',
                },
            ],
        }
    },
}
</script>
<style lang="scss">
.hover\:text-shadow {
    &:hover {
        text-shadow: -1px 1px #6f6f6f;
    }
}
</style>