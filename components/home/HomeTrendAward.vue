<template>
    <div class="container mx-auto pt-24 space-y-10">
        <div class="text-2xl font-semibold text-center">
            TREND & AWARD
        </div>
        <div class="flex md:grid md:grid-cols-3 gap-10 w-full overflow-x-scroll">
            <Card
                v-for="(item, index) in mockDatas"
                :key="index"
                class="w-11/12 max-w-full"
                :class=" index==0 || index==2? 'mt-24': '' "
            >
                <img slot="image" :src="item.image" alt="">
                <span slot="title" class="font-bold">
                    {{ item.title }}
                </span>
                <span>
                    {{ item.body }}
                </span>
            </Card>
        </div>
        <div class="flex justify-center">
            <DetailButton>
                View All
            </DetailButton>
        </div>
   </div>
</template>
<script>
export default {
   data() {
       return {
           mockDatas: [
               {
                   image: 'https://ssd-iamthecodeman.s3.amazonaws.com/images/trend1.jpg',
                   title: '2020 BEAUTY INNOVATOR',
                   body: 'In times of uncertainty, the past can have a powerful allure. Reconstructed Legacy explores how beauty will reinterpret it for the future, in a more sustainable way.'
               },
               {
                   image: 'https://ssd-iamthecodeman.s3.amazonaws.com/images/trend2.jpg',
                   title: 'A/W 2020 BEAUTY STREAM',
                   body: 'Shiseido Professionals now suggests hairstyles with ‘brave elegance’ in line with the current fashion tide to build self-confidence through beauty at such a volatile…'
               },
               {
                   image: 'https://ssd-iamthecodeman.s3.amazonaws.com/images/trend3.jpg',
                   title: 'BEAUTY INNOVATOR AWARD 2019',
                   body: 'Vote now! Shiseido Professional’s “Beauty Innovator Award 2019” finalists are ready. Please check and vote your favorite.'
               }
           ]
       }
   } 
}
</script>
