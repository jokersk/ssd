<template>
    <div class="flex justify-center pb-12 flex-col md:flex-row pt-8">
        <div class="text-center">
            <b class="uppercase text-2xl">
                <slot />
            </b>
        </div>
        <div
            class="text-right md:absolute md:right-0 pr-10"
        >
            <ButtonNext />
        </div>
    </div>
</template>
