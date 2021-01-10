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
    </div>
</template>

<script>
import { client } from '@/utils/contentApi.js'
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
            client
                .getEntry('5PeGS2SoZGSa4GuiQsigQu')
                .then((entry) => {
                   this.infomations = entry 
                })
                .catch((err) => console.log(err))
        },
    },
}
</script>
