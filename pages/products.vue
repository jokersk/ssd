<template>
    <div class="container mx-auto pt-48">
        <Titletail>
            Products
        </Titletail>
        <ProductHead />
        <div class="py-24">
            <div class="flex justify-center uppercase text-2xl font-semibold pb-12">
                HAIR CARE
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
                <Card v-for="(item, index) in items" :key="index">
                    <img :src="item.image" slot="image" alt="">
                    <span slot="type">
                        {{ item.type }}
                    </span>
                    <span slot="title">
                        {{ item.title }}
                    </span>
                    <span slot="body">
                        {{ item.body }}
                    </span>
                    <span slot="tail" class="text-base bg-blue-900 text-white py-1 px-3 mt-8 inline-block">
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
                    image: 'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p_sublimic.png',
                    type: 'hair care',
                    title: 'SUBLIMIC',
                    body: 'Strength Renewed From The Core. For hair which has started experiencing change.',
                    tail: 'FOR SALON & HOME'
                },
                {
                    image: 'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p2.png',
                    type: 'hair care',
                    title: 'SUBLIMIC',
                    body: 'Strength Renewed From The Core. For hair which has started experiencing change.',
                    tail: 'FOR SALON & HOME'
                },
                {
                    image: 'https://ssd-iamthecodeman.s3.amazonaws.com/images/products/p3.png',
                    type: 'hair care',
                    title: 'SUBLIMIC',
                    body: 'Strength Renewed From The Core. For hair which has started experiencing change.',
                    tail: 'FOR SALON & HOME'
                }
            ]
        }
    }
}
</script>
