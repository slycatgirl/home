<template>
  <Main>
    <div class="music">
      <h1 class="text-2xl font-bold">MUSIC</h1>
      <img class="w-7/12 max-w-2xl mx-auto my-3" alt="Music" src="/img/music.jpg" />
      <!-- <p class="mt-4">Music Page - Coming Soon...</p> -->
      各DEMOサブスクリプションサービスにて配信中 :
      <a href="https://www.tunecore.co.jp/artists/slycatgirl" class="underline">TUNECORE</a>
    </div>
  </Main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main from "@/components/templates/Main.vue"

export default defineComponent({
  name: "Music",
  components: {
    Main,
  }
});
</script>

<style scoped>
</style>
