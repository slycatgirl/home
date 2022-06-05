<template>
  <div class="event max-w-md border border-slate-900 px-4 py-3 m-3 text-sm">
    <div class="font-bold whitespace-pre-wrap">{{ event.title }}</div>
    <div class="flex justify-center">
    <table class="mt-3 w-full text-sm table-auto border-separate border border-slate-500">
      <tr>
        <th class="th">DATE</th>
        <td class="td">{{ event.date }}</td>
      </tr>
      <tr>
        <th class="th">VENUE</th>
        <td class="td">{{ event.venue }}</td>
      </tr>
      <tr>
        <th class="th">TIME</th>
        <td class="td">{{ "OPEN " + event.open + " / START " + event.start }}</td>
      </tr>
      <tr>
        <th class="th">TICKET</th>
        <td class="td">{{ "ADV " + event.adv + " / DOOR " + event.door }}</td>
      </tr>
    </table>
    </div>
    <p class="mt-3">w/ {{ event.bands.join(" / ")}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
// types
import { Event } from "@/types/Event"

export default defineComponent({
  props: {
    event: {
      type: Object as PropType<Event>,
      required: true,
    }
  }
})
</script>

<style scoped>
.th {
  @apply border border-slate-300 bg-slate-300
}

.td {
  @apply border border-slate-200 whitespace-pre-wrap
}
</style>