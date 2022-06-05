<template>
  <Main>
    <div class="live">
      <h1 class="text-2xl font-bold">LIVE SCHEDULE</h1>
      <h2 v-if="liveStore.state.loading">Loading...</h2>
      <div v-else>
        <EventContent class="max-w-sm mx-auto" v-for="event in events" :key="event" :event="event" />
      </div>
    </div>
  </Main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
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
      events: props.liveStore.state.events,
    }
  }
});
</script>

<style scoped>
</style>
