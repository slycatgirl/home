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
    <div class="mt-3">w/ {{ event.bands.join(" / ")}}</div>
    <div v-if="state.isOpenReservationMenu">
      <div class="mt-2 flex justify-around">
        <input class="input" type="text" pattern="[\u30A1-\u30FC\u3000\u0020]*" placeholder="カタカナフルネーム" v-model="state.name"/>
        <input class="input w-1/6" type="number" min="0" placeholder="枚数" v-model="state.count"/>
        <IconButton :icon="['far', copyButtonIcon]" @click="copyToClipboard()"/>
        <IconButton :icon="['fab', 'instagram-square']" url="https://www.instagram.com/slycatgirl/" />
        <IconButton :icon="['fab', 'twitter-square']" url="https://twitter.com/slycatgirl/" />
        <IconButton :icon="['fab', 'line']" url="https://line.me/R/ti/p/@480scczm" />
      </div>
    </div>
    <button class="mt-2 w-[4rem] rounded bg-slate-700 text-white" @click="toggleReservationMenu()">{{ reservationButtonLabel }}</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from 'vue'
// components
import IconButton from "@/components/atoms/IconButton.vue";
// types
import { Event } from "@/types/Event"

export default defineComponent({
  components: {
    IconButton
  },
  props: {
    event: {
      type: Object as PropType<Event>,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      isOpenReservationMenu: false,
      isDoneCopying: false,
      name: "",
      count: 1,
    })

    const reservationButtonLabel = computed(() => {
      return state.isOpenReservationMenu ? "閉じる" : "予約"
    })

    const copyButtonIcon= computed(() => {
      return state.isDoneCopying ? "square-check" : "copy"
    })

    const toggleReservationMenu = () => {
      state.isOpenReservationMenu = !state.isOpenReservationMenu
      if (state.isOpenReservationMenu) {
        state.isDoneCopying = false
      }
    }

    const copyToClipboard = async () => {
      const info = `${props.event.date}\n${props.event.venue}\n${state.name} ${state.count}枚`
      state.isDoneCopying = false
      await navigator.clipboard.writeText(info)
      .then(() => {
        state.isDoneCopying = true
      })
    }

    return {
      state,
      reservationButtonLabel,
      copyButtonIcon,
      toggleReservationMenu,
      copyToClipboard,
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

.input {
  @apply border border-solid rounded
}

.input::placeholder {
  font-size: 0.8rem;
}
</style>