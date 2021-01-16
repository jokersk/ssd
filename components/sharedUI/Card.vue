<template>
    <div class="flex-col">
        <slot name="image">
            <img class="w-full object-cover" src="https://picsum.photos/380/230" alt="">
        </slot>
        <div class="mt-4 text-left space-y-4 py-4 px-8">
            <p class="max-w-full truncate uppercase">
                <slot name="title">
                </slot>
            </p>
            <p class="max-w-full text-2xl truncate font-bold">
                <slot name="body">
                </slot>
            </p>
            <p class="max-w-full truncate text-xl">
                <slot name="tail">
                </slot>
            </p>
            <slot />
        </div>
    </div>
</template>