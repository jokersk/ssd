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
}
</script>
