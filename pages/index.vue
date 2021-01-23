<template>
  <div>
    <HomeVideo />
    <HomeCarousel class="-mt-36" />
    <HomeRecommend />
    <HomeProducts />
    <HomeTrendAward />
    <HomeToolContent />
  </div>
</template>

<script>
import { client } from '@/utils/contentApi.js'
import { entryIDs } from '@/utils/contentfulEntryIDs.js'
export default {
  data() {
    return {
      infomations: [
        {
          image: 'https://picsum.photos/380/230',
          title: 'Laboris laboris',
          body: 'Excepteur officia officia cupidatat aute amet anim. Ea culpa',
          tail:
            'Aliquip laborum sunt dolore mollit in sint mollit. In cupidatat ipsum et',
        },
        {
          image: 'https://picsum.photos/380/230',
          title: 'Laboris laboris',
          body: 'Excepteur officia officia cupidatat aute amet anim. Ea culpa',
          tail:
            'Aliquip laborum sunt dolore mollit in sint mollit. In cupidatat ipsum et',
        },
        {
          image: 'https://picsum.photos/380/230',
          title: 'Laboris laboris',
          body: 'Excepteur officia officia cupidatat aute amet anim. Ea culpa',
          tail:
            'Aliquip laborum sunt dolore mollit in sint mollit. In cupidatat ipsum et',
        },
        {
          image: 'https://picsum.photos/380/230',
          title: 'Laboris laboris',
          body: 'Excepteur officia officia cupidatat aute amet anim. Ea culpa',
          tail:
            'Aliquip laborum sunt dolore mollit in sint mollit. In cupidatat ipsum et',
        },
        {
          image: 'https://picsum.photos/380/230',
          title: 'Laboris laboris',
          body: 'Excepteur officia officia cupidatat aute amet anim. Ea culpa',
          tail:
            'Aliquip laborum sunt dolore mollit in sint mollit. In cupidatat ipsum et',
        },
      ],
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData: () => {
      // Get sample data
      client
        .getEntry(entryIDs.homePage.hongKong)
        .then((entry) => {
          console.log(entry)
        })
        .catch((err) => console.log(err))
      // Get video content
      client
        .getEntry(entryIDs.brightcoveVideo.beautyCreatorsTalkVideo)
        .then((entry) => {
          console.log(entry)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
