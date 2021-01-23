<template>
    <div class="container mx-auto pt-48">
        <Titletail>
            Products
        </Titletail>
        <ProductHead />
        <div
            v-for="(item, itemIndex) in items"
            :key="`item-${itemIndex}`"
            class="py-24 relative"
        >
            <div
                class="flex justify-center uppercase text-2xl font-semibold pb-12"
            >
                {{ item.title }}
            </div>
            <div class="relative overflow-hidden ignore-width">
                <div
                    class="bg-true-gray-100 absolute top-64 left-0 h-full w-full z-0"
                ></div>
                <div
                    class="flex flex-wrap justify-center relative z-10 container pb-16"
                >
                    <Card v-for="(child, index) in item.children" :key="index" class="w-1/3 items-center flex mt-10">
                        <img :src="child.image" slot="image" alt="" />
                        <span slot="type">
                            {{ child.type }}
                        </span>
                        <span slot="title">
                            {{ child.title }}
                        </span>
                        <span slot="body">
                            {{ child.body }}
                        </span>
                        <span
                            slot="tail"
                            class="text-base bg-blue-900 text-white py-1 px-3 mt-8 inline-block"
                        >
                            {{ child.tail }}
                        </span>
                    </Card>
                </div>
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
                    title: 'HAIR CARE',
                    children: [
                        {
                            image:
                                'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p_sublimic.png',
                            type: 'hair care',
                            title: 'SUBLIMIC',
                            body:
                                'Strength Renewed From The Core. For hair which has started experiencing change.',
                            tail: 'FOR SALON & HOME',
                        },
                        {
                            image:
                                'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p2.png',
                            type: 'hair care',
                            title: 'SUBLIMIC',
                            body:
                                'Strength Renewed From The Core. For hair which has started experiencing change.',
                            tail: 'FOR SALON & HOME',
                        },
                        {
                            image:
                                'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p3.png',
                            type: 'hair care',
                            title: 'SUBLIMIC',
                            body:
                                'Strength Renewed From The Core. For hair which has started experiencing change.',
                            tail: 'FOR SALON & HOME',
                        },
                    ],
                },
                {
                    title: 'HAIR COLOR',
                    children: [
                        {
                            image:
                                'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p_sublimic.png',
                            type: 'hair care',
                            title: 'SUBLIMIC',
                            body:
                                'Strength Renewed From The Core. For hair which has started experiencing change.',
                            tail: 'FOR SALON & HOME',
                        },
                        {
                            image:
                                'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p2.png',
                            type: 'hair care',
                            title: 'SUBLIMIC',
                            body:
                                'Strength Renewed From The Core. For hair which has started experiencing change.',
                            tail: 'FOR SALON & HOME',
                        },
                        {
                            image:
                                'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p3.png',
                            type: 'hair care',
                            title: 'SUBLIMIC',
                            body:
                                'Strength Renewed From The Core. For hair which has started experiencing change.',
                            tail: 'FOR SALON & HOME',
                        },
                        {
                            image:
                                'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p_sublimic.png',
                            type: 'hair care',
                            title: 'SUBLIMIC',
                            body:
                                'Strength Renewed From The Core. For hair which has started experiencing change.',
                            tail: 'FOR SALON & HOME',
                        },
                    ],
                },
                {
                    title: 'perm',
                    children: [
                        {
                            image:
                                'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p_sublimic.png',
                            type: 'hair care',
                            title: 'SUBLIMIC',
                            body:
                                'Strength Renewed From The Core. For hair which has started experiencing change.',
                            tail: 'FOR SALON & HOME',
                        },
                        {
                            image:
                                'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p2.png',
                            type: 'hair care',
                            title: 'SUBLIMIC',
                            body:
                                'Strength Renewed From The Core. For hair which has started experiencing change.',
                            tail: 'FOR SALON & HOME',
                        },
                        {
                            image:
                                'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p3.png',
                            type: 'hair care',
                            title: 'SUBLIMIC',
                            body:
                                'Strength Renewed From The Core. For hair which has started experiencing change.',
                            tail: 'FOR SALON & HOME',
                        },
                        {
                            image:
                                'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p_sublimic.png',
                            type: 'hair care',
                            title: 'SUBLIMIC',
                            body:
                                'Strength Renewed From The Core. For hair which has started experiencing change.',
                            tail: 'FOR SALON & HOME',
                        },
                        {
                            image:
                                'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p_sublimic.png',
                            type: 'hair care',
                            title: 'SUBLIMIC',
                            body:
                                'Strength Renewed From The Core. For hair which has started experiencing change.',
                            tail: 'FOR SALON & HOME',
                        }
                    ],
                }
            ],
        }
    },
}
</script>
