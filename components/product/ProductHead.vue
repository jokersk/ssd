<template>
    <div
        class="flex justify-around items-center overflow-x-scroll w-2/3 mx-auto"
    >
        <div
            class="w-1 h-1 bg-black rounded-full bg-opacity-50 flex-shrink-0"
        ></div>
        <template v-for="(product, index) in products">
            <button
                :key="index"
                class="py-2 flex justify-center items-center opacity-50 font-semibold border-b border-transparent hover:border-black hover:opacity-100 focus:ring-0 focus:outline-none"
            >
                <span>{{ product.label }}</span>
            </button>
            <div
                :key="`dot-${index}`"
                class="w-1 h-1 bg-black rounded-full bg-opacity-50 flex-shrink-0"
            ></div>
        </template>
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

            ]
        }
    }
}
</script>
