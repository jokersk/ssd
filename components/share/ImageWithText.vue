<template>
    <div class="relative">
        <slot name="image">
            <img
                src="https://picsum.photos/1200/630"
                class="w-full h-full object-cover"
                alt=""
            />
        </slot>
        <div class="absolute top-0 left-0 w-full h-full flex items-center">
            <div class="w-1/5"></div>
            <div class="w-1/3 space-y-6">
                <div class="text-4xl">
                    <slot name="title">
                        laboris eu ipsum duis id
                    </slot>
                </div>
                <span class="">
                    <slot name="body">
                        Deserunt ut duis ut nostrud reprehenderit anim laboris
                        eu ipsum duis id eiusmod nisi. Duis Lorem consequat
                        irure velit. Irure eiusmod anim deserunt sunt nisi nisi
                        tempor. Deserunt in voluptate enim nulla.
                    </slot>
                </span>
                <slot name="button">
                    <button class="border border-white px-36 py-2">
                        > Detail
                    </button>
                </slot>
            </div>
        </div>
    </div>
</template>
