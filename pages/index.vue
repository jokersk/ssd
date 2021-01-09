<template>
    <div>
        <HomeVideo />
        <Info title="infomation" :items="infomations" class="-mt-36" />
        <Info :items="infomations">
            <div slot="title" class="text-black">
                Recommend
            </div>
        </Info>
        <HomeProducts />
        <HomeTrendAward />
        <HomeToolContent />
        <HomeBottom />
        <BackToTop />
    </div>
</template>

<script>
export default {
    data() {
        return {
            infomations: [
                {
                    image: 'https://picsum.photos/380/230',
                    title: 'Laboris laboris',
                    body:
                        'Excepteur officia officia cupidatat aute amet anim. Ea culpa',
                    tail:
                        'Aliquip laborum sunt dolore mollit in sint mollit. In cupidatat ipsum et',
                },
                {
                    image: 'https://picsum.photos/380/230',
                    title: 'Laboris laboris',
                    body:
                        'Excepteur officia officia cupidatat aute amet anim. Ea culpa',
                    tail:
                        'Aliquip laborum sunt dolore mollit in sint mollit. In cupidatat ipsum et',
                },
                {
                    image: 'https://picsum.photos/380/230',
                    title: 'Laboris laboris',
                    body:
                        'Excepteur officia officia cupidatat aute amet anim. Ea culpa',
                    tail:
                        'Aliquip laborum sunt dolore mollit in sint mollit. In cupidatat ipsum et',
                },
                {
                    image: 'https://picsum.photos/380/230',
                    title: 'Laboris laboris',
                    body:
                        'Excepteur officia officia cupidatat aute amet anim. Ea culpa',
                    tail:
                        'Aliquip laborum sunt dolore mollit in sint mollit. In cupidatat ipsum et',
                },
                {
                    image: 'https://picsum.photos/380/230',
                    title: 'Laboris laboris',
                    body:
                        'Excepteur officia officia cupidatat aute amet anim. Ea culpa',
                    tail:
                        'Aliquip laborum sunt dolore mollit in sint mollit. In cupidatat ipsum et',
                },
            ],
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            const contentful = require('contentful')
            const client = contentful.createClient({
                space: process.env.contentfull_space,
                accessToken: process.env.contentfull_accessToken,
            })
            client
                .getEntry('5PeGS2SoZGSa4GuiQsigQu')
                .then((entry) => console.log(entry))
                .catch((err) => console.log(err))
        },
    },
}
</script>
