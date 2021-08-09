<template>
  <div class="filters">
    <div class="filters__wrapper">

      <div class="filters__controls">
        <div class="filter-select" @click="loadBreeds">
          <span>Породы</span>
          <Icon height="8" width="15" icon="chevron"/>
        </div>
        <div class="filter-checkbox">
          <label for="sort">Сортировка по алфавиту</label>
          <input type="checkbox" id="sort" @input="toggleSort">
        </div>
      </div>

      <div class="filters__items" v-if="breeds.length">
        <router-link
          exact
          :to="{ name: 'home' }"
          active-class="breed--active"
          class="breed"
        >
          Все породы
        </router-link>
        <router-link
          exact
          v-for="(breed, i) in breeds"
          :key="i"
          :to="{ name: 'home', params: { breed } }"
          active-class="breed--active"
          class="breed"
        >
          {{ breed }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: "Filters",
    methods: {
      ...mapActions(['toggleSort', 'getBreeds', 'resetBreeds']),
      loadBreeds() {
        this.breeds.length ? this.resetBreeds() : this.getBreeds();
      }
    },
    computed: {
      ...mapGetters(['breeds'])
    }
  }
</script>

<style>
  @import "Filters.css";
</style>
