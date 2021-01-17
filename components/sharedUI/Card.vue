<template>
    <div class="flex-col">
        <slot name="image">
            <img class="w-full object-cover" src="https://picsum.photos/380/230" alt="">
        </slot>
        <div class="mt-4 text-center space-y-4 py-4 px-8">
            <p class="max-w-full truncate uppercase">
                <slot name="type"></slot>
            </p>
            <p class="max-w-full text-2xl truncate uppercase font-semibold">
                <slot name="title">
                </slot>
            </p>
            <p class="max-w-full">
                <slot name="body">
                </slot>
            </p>
            <p class="max-w-full text-xl">
                <slot name="tail">
                </slot>
            </p>
            <slot />
        </div>
    </div>
</template>