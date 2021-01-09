<template>
    <div class="container mx-auto pt-24 space-y-10">
        <div class="text-2xl font-bold text-center">
            TREND AWARD
        </div>
        <div class="grid grid-cols-3 gap-10 w-full">
            <Card v-for="i in 3" :key="i">
                <span slot="title" class="font-bold">
                    Ex cupidatat
                </span>
                <span slot="tail">
                    Consectetur in quis occaecat reprehenderit. Cillum consequat
                    ea proident id laboris eiusmod fugiat aliqua ipsum laboris
                    amet laboris. Consequat esse occaecat incididunt dolor ea.
                    Sint voluptate velit do commodo laborum nisi proident
                    laborum consectetur nulla et pariatur eu cillum.
                </span>
            </Card>
        </div>
        <div class="flex justify-center">
            <button class="border border-black px-36 py-2">
                > View All
            </button>
        </div>
   </div>
</template>
