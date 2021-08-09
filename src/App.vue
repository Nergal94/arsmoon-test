<template>
  <div id="app">
    <Header />
    <router-view class="main"/>
    <scroll-to-top v-if="isShowScrollToTop"/>
  </div>
</template>

<style>
  @import "styles/main.css";
</style>
<script>
  import Header from "./components/Header/Header";
  import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
  import { mapActions } from 'vuex';

  export default {
    data: () => ({
      isShowScrollToTop: false
    }),
    components: {
      Header,
      ScrollToTop
    },
    methods: {
      ...mapActions(['loadFavorites']),
      scrollBehavior() {
        this.isShowScrollToTop = window.scrollY > 0;
      }
    },
    created() {
      this.loadFavorites();
      window.addEventListener('scroll', this.scrollBehavior)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.scrollBehavior)
    }
  }
</script>
