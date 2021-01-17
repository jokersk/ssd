<template>
    <div class="flex p-6 md:p-14 max-w-full">
        <div class="max-w-full space-y-8">
            <div class="max-w-full truncate uppercase font-semibold text-3xl">
                <slot name="title">
                    CONTACT US
                </slot>
            </div>
            <p class="max-w-full">
                <slot name="body">
                    For inquiries from agents and salons, and for purchasing products, please contact your local office. For general customers, please contact us from the Shiseido Group website.
                </slot>
            </p>
            <div class="flex justify-start">
                <ButtonNext />
            </div>
        </div>
    </div>
</template>