<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <fa class="icon" :type="icon[0]" :icon="icon[1]" />
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: "IconButton",
  props: {
    icon: {
      type: Array as PropType<string[]>,
      required: true,
    },
    url: {
      type: String
    }
  },
})
</script>

<style scoped>
.icon {
  @apply w-5 ml-1
}
</style>