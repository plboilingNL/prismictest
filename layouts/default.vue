<!-- layouts/default.vue -->

<template>
  <div>
    <main-nav/>
    <nuxt/>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue'

export default {
  components: {
    MainNav
  }
}
</script>