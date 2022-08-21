<template>
  <Main>
    <div class="music">
      <h1 class="text-2xl font-bold">MUSIC</h1>
      <!-- <img class="w-7/12 max-w-2xl mx-auto my-3" alt="Music" src="/img/music.jpg" /> -->
      <!-- <p class="mt-4">Music Page - Coming Soon...</p> -->
      <div class="w-2/3 lg:w-2/5 mx-auto my-3 space-y-3">
        <MusicContent class="" v-for="music in MUSIC" :key="music.title" :music="music" />
      </div>
      <!-- 各DEMOサブスクリプションサービスにて配信中 :
      <a href="https://www.tunecore.co.jp/artists/slycatgirl" class="underline">TUNECORE</a> -->
    </div>
  </Main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
// components
import Main from "@/components/templates/Main.vue"
import MusicContent from "@/components/molecules/MusicContent.vue"
// types
import { Music } from "@/types/Music"

export default defineComponent({
  name: "Music",
  components: {
    Main,
    MusicContent,
  },
  setup() {
    const MUSIC: Music[] = [
      {
        title: "1st DEMO",
        songs: [
          "Bunny Boiler",
          "Highway",
          "Glitter",
        ],
        artwork: "/img/1st_DEMO_artwork.png",
        linkcore: "https://linkco.re/7ct0vY60?lang=ja",
      },
      {
        title: "2nd DEMO",
        songs: [
          "Over",
          "My Answer",
          "Reason",
        ],
        artwork: "/img/2nd_DEMO_artwork.png",
        linkcore: "https://linkco.re/1Q4eMFEf?lang=ja",
      },
    ]

    return {
      MUSIC,
    }
  }
});
</script>

<style scoped>
</style>
