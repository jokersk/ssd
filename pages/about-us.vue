<template>
    <div>
        <div class="min-h-screen bg-gray-600">
            video
        </div>
        <div
            class="container space-y-16 pt-4 text-center flex flex-col justify-center items-center"
        >
            <div class="">
                about us
            </div>
            <div>
                <div class="flex space-x-4 justify-center">
                    <div class="">OUR BELIEF</div>
                    <div>/</div>
                    <div class="">MISSION</div>
                    <div>/</div>
                    <div class="">VISION</div>
                    <div>/</div>
                    <div class="">PILLARS</div>
                </div>
            </div>
            <div class="space-y-6 max-w-3xl">
                <div class="text-3xl">SHISEIDO FOR PROFESSIONALS</div>
                <div>TOGETHER WITH BEAUTY CREATORS</div>
                <div>
                    Beauty is created and re-defined every day by thousands of
                    stylists, thousands of hands and minds, showing us all what
                    they think beauty can be; once face, one style, one person,
                    one story at a time. We want to inspire every stylist (we
                    call “beauty creator”) to create their own beauty.
                </div>
            </div>
            <div class="space-y-24">
                <section class="space-y-6" id="">
                    <div class="">OUR BELIEF</div>
                    <div class="font-semibold text-2xl">
                        “<span class="">Don’t be Beautiful.</span>
                        Do Beautiful.”
                    </div>
                    <div class="">
                        Beauty is more than how we look, it’s what we do and how
                        we make people feel.
                    </div>
                </section>
                <img
                    class="sc-ckVGcZ kowYSL"
                    alt="About Us Hero Image"
                    srcset="
                        //images.ctfassets.net/qf666eyypqhw/5ixRuDhPu0K4AUoa4WM4MQ/b809cf02f0997591dfe570f9661e056b/about_us_hero-min.jpg?h=600&amp;w=1060,
                        //images.ctfassets.net/qf666eyypqhw/5ixRuDhPu0K4AUoa4WM4MQ/b809cf02f0997591dfe570f9661e056b/about_us_hero-min.jpg?h=900&amp;w=1590  1.5x,
                        //images.ctfassets.net/qf666eyypqhw/5ixRuDhPu0K4AUoa4WM4MQ/b809cf02f0997591dfe570f9661e056b/about_us_hero-min.jpg?h=1200&amp;w=2120 2x
                    "
                    src="//images.ctfassets.net/qf666eyypqhw/5ixRuDhPu0K4AUoa4WM4MQ/b809cf02f0997591dfe570f9661e056b/about_us_hero-min.jpg?h=1200&amp;w=2120"
                />
            </div>
            <div class="space-y-24 w-full text-center flex flex-col justify-center items-center" id="our-mission-section">
                <div class="">OUR MISSION</div>
                <div class="">
                    <div class="max-w-2xl mx-auto">
                        <div class="">
                            TOGETHER WITH BEAUTY CREATORS
                        </div>
                        <div class="">
                            Beauty is created and re-defined every day by
                            thousands of stylists, thousands of hands and minds,
                            showing us all what they think beauty can be; once
                            face, one style, one person, one story at a time. We
                            want to inspire every stylist (we call “beauty
                            creator”) to create their own beauty. This journey
                            begins together with our leading beauty creators
                            from Shiseido creative team – our three top Shiseido
                            hair &amp; make-up artist: Hirofumi Kera, Yoshiko
                            Jinguji &amp; Tadashi Harada. The three artists had
                            created one key visual based on the same model,
                            representing their personal interpretation of “what
                            beauty is”. You’ll be surprised to see how
                            individual creativity can lead to such unique
                            creation, and we hope to support all beauty creators
                            to pursue their own beauty in the same untamed way.
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="">
                            <div class=""></div>
                            <img
                                class=""
                                alt="Together with Beauty Creators"
                                src="//images.ctfassets.net/qf666eyypqhw/5PA4Txc4k8WWgS2kqIAiM0/13a275be476910a44ddf3b8a688b17e2/OurMission.png?h=1000&amp;w=780"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
