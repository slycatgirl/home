<template>
  <Main>
    <div class="home">
      <h1 class="text-2xl font-bold">sly cat girl - Official Site</h1>
      <img class="w-7/12 max-w-2xl mx-auto my-3" alt="Artist Photo" src="/img/artist_photo.jpg" />
    </div>
  </Main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main from "@/components/templates/Main.vue"

export default defineComponent({
  name: "Home",
  components: {
    Main,
  }
});
</script>

<style scoped>
</style>
