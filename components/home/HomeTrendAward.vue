<template>
    <div class="container mx-auto pt-24 space-y-10">
        <div class="text-2xl font-bold text-center">
            TREND AWARD
        </div>
        <div class="flex md:grid md:grid-cols-3 gap-10 w-full overflow-x-scroll">
            <Card v-for="i in 3" :key="i" class="w-11/12 max-w-full">
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
            <DetailButton>
                View All
            </DetailButton>
        </div>
   </div>
</template>
