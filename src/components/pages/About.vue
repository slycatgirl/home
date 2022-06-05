<template>
  <Main>
    <div class="about">
      <h1 class="text-2xl font-bold">PROFILE</h1>
      <img class="w-7/12 max-w-2xl mx-auto my-3" alt="About" src="/img/about.jpg" />
      <p>Member</p>
        <p class="flex justify-center my-2" v-for="member in members" :key="member.name">
          {{ `${member.name} [${member.part}]` }}
          <IconButton :icon="['fab', 'instagram']" :url="member.instagram" />
          <IconButton :icon="['fab', 'twitter']" :url="member.twitter" />
        </p>
        <p>(L&rarr;R)</p>
    </div>
  </Main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
// components
import Main from "@/components/templates/Main.vue"
import IconButton from "@/components/atoms/IconButton.vue"

export default defineComponent({
  name: "About",
  components: {
    Main,
    IconButton,
  },
  setup() {
    const MEMBERS = [
      {
        name: "みゆってぃ",
        part: "Gt./Vo.",
        instagram: "https://www.instagram.com/_mi_yu_te_/",
        twitter: "https://twitter.com/s2clxxx/",
      },
      {
        name: "Taiki",
        part: "Dr./Cho.",
        instagram: "https://www.instagram.com/slycat_taiki/",
        twitter: "https://twitter.com/slycat_taiki/",
      },
    ]

    return {
      members: MEMBERS,
    }
  }
});
</script>

<style scoped>
</style>
