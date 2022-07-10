<template>
  <Main>
    <div class="home">
      <h1 class="text-xl font-bold">sly cat girl - Official Site</h1>
      <img class="w-7/12 max-w-2xl mx-auto my-3" alt="Artist Photo" src="/img/artist_photo.jpg" />
      <div class="w-2/5 max-w-sm mx-auto flex justify-around">
        <IconButton size="medium" :icon="['fab', 'instagram-square']" url="https://www.instagram.com/slycatgirl/" />
        <IconButton size="medium" :icon="['fab', 'twitter-square']" url="https://twitter.com/slycatgirl/" />
        <IconButton size="medium" :icon="['fab', 'line']" url="https://line.me/R/ti/p/@480scczm" />
      </div>
    </div>
  </Main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main from "@/components/templates/Main.vue"
import IconButton from "@/components/atoms/IconButton.vue"

export default defineComponent({
  name: "Home",
  components: {
    Main,
    IconButton,
  }
});
</script>

<style scoped>
</style>
