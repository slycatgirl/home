<template>
  <Main>
    <div class="live">
      <h1 class="text-2xl font-bold">LIVE SCHEDULE</h1>
      <h2 v-if="liveStore.state.loading">Loading...</h2>
      <div v-else class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <EventContent class="w-11/12 mx-auto" v-for="event in liveStore.state.events" :key="event.date" :event="event" />
      </div>
    </div>
  </Main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue"
// components
import Main from "@/components/templates/Main.vue"
import EventContent from "@/components/molecules/EventContent.vue"
// hooks
import { useLive } from "@/hooks/useLive"

export default defineComponent({
  name: "Live",
  components: {
    Main,
    EventContent,
  },
  props: {
    liveStore: {
      default: useLive()
    }
  },
  setup(props) {
    onMounted(() => {
      props.liveStore.fetch()
    })

    return {
    }
  }
});
</script>

<style scoped>
</style>
