<template>
    <div></div>
</template>
<script>
import { client } from '@/utils/contentApi.js'
export default {
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            client
                .getEntry('4ze9WZszrnv4m6YJ4JYImZ')
                .then((entry) => {
                    console.log(entry)
                })
                .catch((err) => console.log(err))
        },
    },
}
</script>
