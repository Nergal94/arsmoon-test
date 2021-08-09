<template>
  <header class="header">
    <div class="header__wrapper">
      <router-link
        :to="{ name: 'home' }"
      >
        <h1>ПЁСЕЛЬ</h1>
      </router-link>


      <router-link
        class="header__nav"
        active-class="header__nav--active"
        :to="{ name: 'favorites' }"
      >
        <span>Избранные пёсели</span>

        <Icon height="14" icon="heart" width="16"/>
      </router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style>
  @import "Header.css";
</style>
