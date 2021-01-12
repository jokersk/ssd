<template>
    <div class="homeVideo bg-gray-600 flex justify-center items-center relative">
        <iframe
            class="w-full h-full relative top-0 left-0 object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jaLiWSotSxk?playlist=jaLiWSotSxk&autoplay=1&mute=1&loop=1&controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
            allowfullscreen
        ></iframe>
        <div class="w-11/12 md:w-1/3 flex-col text-white space-y-4 text-center absolute z-10">
            <span class="">
                Deserunt ut duis ut nostrud reprehenderit anim laboris eu ipsum
                duis id eiusmod nisi. Duis Lorem consequat irure velit. Irure
                eiusmod anim deserunt sunt nisi nisi tempor. Deserunt in
                voluptate enim nulla.
            </span>
            <div class="text-4xl">
                laboris eu ipsum duis id
            </div>
            <button
                class="border border-white max-w-full px-36 py-2 flex justify-center space-x-2 mx-auto"
            >
                <span>></span> <span>ABOUT</span>
            </button>
        </div>
    </div>
</template>
<style>
.homeVideo {
    height: 100vh;
}
</style>
