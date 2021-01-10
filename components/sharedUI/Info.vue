<template>
    <div class="text-center text-2xl space-y-6">
        <div class="text-white uppercase">
            <slot name="title">
                {{ title }}
            </slot>
        </div>
        <div class="flex space-x-8 max-w-full overflow-x-scroll pb-24">
            <Card
                v-for="(item, index) in items"
                :key="index"
                class="w-10/12 md:w-1/4"
            >
                <span slot="title">
                    {{ item.title }}
                </span>
                <span slot="body">
                    {{ item.body }}
                </span>
                <span slot="tail">
                    {{ item.tail }}
                </span>
            </Card>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        foo: {
            type: String
        },
        title: {
            type: String,
            default: '',
        },
        items: {
            type: Array,
            default: [],
        },
    },
}
</script>
