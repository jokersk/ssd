<template>
    <div>
        <div>
            <img
                class="w-full object-cover"
                src="https://picsum.photos/1200/600"
                alt=""
            />
        </div>
        <div class="py-24 container mx-auto space-y-20">
            <h1 class="text-2xl font-bold text-center">
                For Customer
            </h1>
            <div class="bg-gray-300 w-full p-10">
                <Info :items="items">
                    <div slot="title" class="text-black">
                        Eu cupidatat est do occaecat qui cupidatat.
                        <div>
                            Nostrud excepteur nisi eu esse sint deserunt eiusmod eiusmod ad ipsum.
                        </div>
                    </div>
                </Info>
                <div class="flex justify-center items-center">
                    <DetailButton>
                        View All
                    </DetailButton>
                </div>
            </div>
            <div class="w-full">
                <div class="pb-12 flex-col flex items-center space-y-4">
                    <span class="uppercase text-2xl">
                        Duis consequat
                    </span>
                    <div class="text-center">
                        Ipsum consectetur ex officia dolore ipsum fugiat. Sunt
                        minim minim ad eiusmod velit sunt sint ut veniam. Irure
                        cillum do commodo laborum
                    </div>
                </div>
                <div class="grid md:grid-cols-2 gap-10">
                    <div v-for="child in 2" :key="child">
                        <div class="relative">
                            <img
                                class="w-full object-cover"
                                src="https://picsum.photos/380/230"
                                alt=""
                            />
                        </div>
                        <div class="text-xl">
                            <h2 class="font-bold">
                                Mollit cupidatat
                            </h2>
                            Culpa mollit reprehenderit exercitation eiusmod
                            cillum ipsum sint
                        </div>
                    </div>
                </div>
            </div>
            <div class="space-y-12">
                <h2 class="font-bold text-1xl text-center">
                    Consequat nostrud sit dolore sunt aliqua nulla commodo minim laboris.
                </h2>
                <div class="grid grid-cols-3 gap-4">
                    <Card v-for="item in 13" :key="item">
                        <span slot="title">
                            Sint anim nulla ea
                        </span>
                        <span slot="tail">
                            Sint anim nConsequat ullamco qui quis proident anim in tempor culpa eu ea amet dolore duis dolore.ulla ea
                        </span>
                        <span>
                            Duis tempor labore deserunt eu dolore irure amet qui. In consequat proident anim amet ex culpa ea do. Mollit aliquip quis non minim pariatur fugiat. Magna consequat culpa id duis enim proident fugiat cillum nisi nostrud amet nisi tempor. Nulla quis aliquip ad magna ad cupidatat pariatur consequat aliqua pariatur tempor.
                        </span>
                    </Card>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <DetailButton @click.native="backToTop">
                Back To Top
            </DetailButton>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
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
    methods: {
        backToTop() {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            })
        },
    },
}
</script>
