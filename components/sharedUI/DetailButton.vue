<template>
    <button
        class="
            border
            border-black
            px-36
            py-2
            flex
            justify-center
            items-center
            space-x-2
            max-w-full
        "
        :class="bg"
    >
        <span>></span>
        <span>
            <slot>
                Detail
            </slot>
        </span>
    </button>
</template>
<script>
export default {
    props: {
        bg: {
            type: String,
            default: 'bg-white'
        }
    }
}
</script>