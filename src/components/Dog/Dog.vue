<template>
  <div class="dog">
    <img :src="imageSrc" alt="this is my dog">
    <p class="dog__breed">{{ breed }}</p>
    <div class="dog__like" @click="like">
      <Icon :icon="iconType" height="26" width="29" />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: "Dog",
    props: {
      imageSrc: String
    },
    computed: {
      ...mapGetters(['isFavorites']),
      iconType() {
        return this.isFavorites(this.imageSrc) ? 'fill-heart' : 'heart';
      },
      breed() {
        let breed = this.imageSrc.slice(this.imageSrc.indexOf('breeds')).split('/')[1].split('-')[0];
        return breed;
      }
    },
    methods: {
      ...mapActions(['setAsFavorites', 'removeFromFavorites']),
      like() {
        this.isFavorites(this.imageSrc) ? this.removeFromFavorites(this.imageSrc) : this.setAsFavorites(this.imageSrc);
      }
    }
  }
</script>

<style>
  @import "Dog.css";
</style>
