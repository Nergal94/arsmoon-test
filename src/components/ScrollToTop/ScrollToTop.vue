<template>
  <div class="scroll" @click="scroll">
    <Icon icon="arrow" height="20px" width="13px" icon-color="#fff"/>
  </div>
</template>

<script>
  export default {
    name: "ScrollToTop",
    methods: {
      scroll() {
        window.scrollTo(0, 0);
      }
    }
  }
</script>

<style>
  @import "ScrollToTop.css";
</style>
