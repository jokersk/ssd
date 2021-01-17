<template>
    <div class="flex justify-center pb-12 flex-col md:flex-row pt-8">
        <div class="text-center">
            <div class="uppercase text-2xl font-semibold">
                <slot />
            </div>
        </div>
        <div
            class="text-right md:absolute md:right-0 pr-10"
        >
            <slot name="tail">
                <ButtonNext />
            </slot>
        </div>
    </div>
</template>
