<template>
  <div class="main">
    <header class="p-4">
      <div class="text-center">
        <router-link to="/" >
          <img class="w-5/12 max-w-xs mx-auto" src="img/logo.png" alt="logo" />
        </router-link>
      </div>
      <nav class="px-7 mt-2">
        <router-link to="/">HOME</router-link> |
        <router-link to="/live">LIVE</router-link> |
        <router-link to="/about">ABOUT</router-link> |
        <router-link to="/music">MUSIC</router-link>
      </nav>
    </header>
    <main class="min-h-[calc(100vh-50px)]"><slot></slot></main>
    <footer class="py-2 bg-slate-500 text-white text-sm">
      <p class="copyright">&copy; sly cat girl {{ year }}</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const publishedYear = 2022
    const currentYear = new Date().getFullYear()
    return {
      year: currentYear === publishedYear ? `${publishedYear}` : `${publishedYear}-${currentYear}`,
    }
  },
})
</script>

<style scoped>

/* body {
  position: relative;
}

header {
  height: 100px;
}

main {
  min-height: calc(100vh - 100px);
  padding-bottom: 30px;
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
} */

/* footer {
  position: fixed;
  bottom: 0;
} */

.main {
  text-align: center;
}
</style>