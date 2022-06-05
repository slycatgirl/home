import { reactive } from "vue"
import { Event } from "@/types/Event"
import request from "@/helpers/request"

const API_URL =
  "https://script.google.com/macros/s/AKfycbxJSkBZhdSfZKzY3tmWJLn7dBAnY_0OARinnPQfbR0lrpfxDHI0svyR2KIogenbSh9kWg/exec"

interface State {
  events: Event[]
  loading: boolean
  result: boolean | null
  messages: string[]
}

export const useLive = () => {
  const state = reactive<State>({
    events: [],
    loading: false,
    result: null,
    messages: []
  })

  const fetch = async () => {
    state.loading = true
    await request
      .get(API_URL)
      .then((res) => {
        state.events = res.data
        state.result = true
      })
      .catch(() => {
        state.result = false
        state.messages = ["イベント取得でエラー発生"]
      })
      .finally(() => {
        state.loading = false
      })
  }

  return {
    state,
    fetch
  }
}
