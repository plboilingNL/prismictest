<template>
  <nav class="nav">
    <nuxt-link to="/">Logo goes here</nuxt-link>
    <ul class="nav-links">
      <li class="nav-link"><nuxt-link to="/">Homepage</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/products/testing1">Test 1</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/products/testing2">Test2</nuxt-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.nav-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: inline-block;
  margin-left: 20px;
}
</style>