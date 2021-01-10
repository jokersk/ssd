<template>
    <div class="border-gray-600 flex p-6 md:p-14 max-w-full">
        <div class="max-w-full space-y-4">
            <div class="max-w-full truncate uppercase text-center font-bold text-2xl">
                <slot name="title">
                    CONTACT US
                </slot>
            </div>
            <p class="max-w-full">
                <slot name="body">
                    Ex excepteur quis est aliquip ipsum ut pariatur ullamco elit aliquip ullamco. Magna enim aliqua ex do quis cillum magna. Lorem anim occaecat eu consequat. Culpa velit excepteur nulla excepteur incididunt Lorem eiusmod dolore elit adipisicing incididunt proident exercitation. Enim consectetur tempor dolor labore excepteur. Anim eu pariatur velit ea adipisicing ad excepteur.
                </slot>
            </p>
            <div class="flex justify-center">
                <DetailButton />
            </div>
        </div>
    </div>
</template>