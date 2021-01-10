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
                For Profressional
            </h1>
            <div v-for="item in 2" :key="item" class="w-full">
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
            <div>
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
                <div class="flex items-start">
                    <div class="flex flex-col justify-center items-start">
                        <span class="uppercase text-2xl">
                            Velit excepteur
                        </span>
                        <div class="text-left">
                            Adipisicing est qui veniam exercitation aliqua
                            aliqua. Qui quis consectetur aliqua nostrud qui
                            eiusmod laboris deserunt est cillum. Exercitation
                            aliqua est laborum esse elit ea cupidatat
                            adipisicing et labore nostrud. Ad voluptate ex
                            cillum id veniam ut excepteur deserunt ex.
                        </div>
                    </div>
                    <div class="w-1/3 flex-shrink-0">
                        <img
                            class="w-full object-cover"
                            src="https://picsum.photos/380/230"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div class="bg-gray-300 grid md:grid-cols-2 gap-12 md:gap-4 w-full p-10">
                <div
                    v-for="item in 2"
                    :key="item"
                    class="grid lg:grid-cols-2 gap-6"
                >
                    <img
                        class="w-full object-cover"
                        src="https://picsum.photos/380/250"
                        alt=""
                    />
                    <div class="space-y-4">
                        <h3 class="text-2xl font-bold uppercase">
                            Cillum sunt esse
                        </h3>
                        <div class="break-word">
                            Consequat adipisicing esse irure nulla elit
                            cupidatat esse ex eu nisi non officia reprehenderit.
                        </div>
                        <div class="text-sm">
                            Nulla sint mollit ad nisi sit dolor. Non Lorem sit
                            aliquip sint commodo ad elit eu commodo dolor.
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <div class="pb-12">
                    <span class="uppercase text-2xl">
                        Velit excepteur
                    </span>
                </div>
                <div v-for="item in 3" :key="item" class="grid grid-cols-2 gap-8 w-full p-10 border">
                    <div>
                        <img
                            class="w-full object-cover"
                            src="https://picsum.photos/380/241"
                            alt=""
                        />
                    </div>
                    <div class="text-left">
                        <span class="uppercase text-2xl">
                            Velit excepteur
                        </span>
                        <div>
                            Enim aliquip amet eiusmod adipisicing enim consectetur id. Minim est ea mollit est qui anim in irure culpa voluptate fugiat reprehenderit cillum. Id mollit eu tempor deserunt aliquip. Ex laborum dolore nisi qui deserunt do occaecat et laborum. Irure veniam laborum anim tempor enim. Non quis velit enim nisi ad nisi minim et minim quis.
                        </div>
                    </div>
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
    methods: {
        backToTop() {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>
