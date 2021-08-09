<template>
  <div>
    <Filters />
    <div class="dogs">
      <div class="dogs__wrapper" ref="container">
        <Dog
          v-for="(dog, i) in dogs"
          :key="i"
          :image-src="dog"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import {DOG_IMAGE_HEIGHT} from "../constants/enums";
  import Filters from "../components/Filters/Filters";
  export default {
    name: "Home",
    components: {Filters},
    data: () => ({
      isLoading: false
    }),
    computed: {
      ...mapGetters(['dogs']),
      breed() {
        return this.$route.params.breed;
      }
    },
    methods: {
      ...mapActions(['getDogs', 'loadNewDogs', 'resetDogs', 'getDogsByBreed']),
      async scrollBehavior() {
        if (this.$refs['container'].clientHeight - window.scrollY - window.innerHeight > DOG_IMAGE_HEIGHT || this.isLoading) {
          return;
        }
        this.isLoading = true;
        await this.loadNewDogs();
        this.isLoading = false;
      }
    },
    created() {
      this.breed ? this.getDogsByBreed(this.breed) : this.getDogs();
      window.addEventListener('scroll', this.scrollBehavior);
    },
    watch: {
      breed(breed) {
        this.getDogsByBreed(breed);
      }
    },
    beforeDestroy() {
      this.resetDogs();
      window.removeEventListener('scroll', this.scrollBehavior);
    }
  }
</script>
