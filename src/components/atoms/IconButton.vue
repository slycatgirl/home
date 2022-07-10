<template>
  <a :href="url" :disabled="url === null" target="_blank" rel="noopener noreferrer">
    <fa :class="fontSize" :type="icon[0]" :icon="icon[1]" />
  </a>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: "IconButton",
  props: {
    icon: {
      type: Array as PropType<string[]>,
      required: true,
    },
    url: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: "small",
    }
  },
  setup(props) {
    const size = computed(() => {
      return "size_" + props.size
    })

    return {
      fontSize: size
    }
  }
})
</script>

<style scoped>
.size_small {
  @apply w-5
}

.size_medium {
  @apply w-8
}

.size_large {
  @apply w-12
}

</style>