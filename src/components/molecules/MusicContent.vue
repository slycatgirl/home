<template>
  <div class="grid grid-cols-2">
    <a :href="music.linkcore">
      <img
        class="w-28 md:w-48 border border-black"
        :alt="music.title"
        :src="music.artwork"
      />
    </a>
    <div class="info my-auto space-y-2">
      <p class="font-bold text-base md:text-2xl">{{ music.title }}</p>
      <div class="text-sm md:text-base space-y-1">
        <p v-for="(song, index) in music.songs" :key="song">{{ (index+1)+". "+song }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
// types
import { Music } from "@/types/Music"

export default defineComponent({
  props: {
    music: {
      type: Object as PropType<Music>,
      required: true,
    }
  },
})
</script>

<style scoped>
  a {
    display: block;
  }
</style>
