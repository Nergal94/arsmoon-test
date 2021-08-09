<template>
  <div class="favorites">
    <div class="favorites__wrapper">
      <Dog
        v-for="(dog, i) in favorites"
        :key="i"
        :image-src="dog"
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "Favorites",
    computed: {
      ...mapGetters(['favorites'])
    },
  }
</script>

<style scoped>

</style>
