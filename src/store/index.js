import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//modules

import dogs from "./modules/dogs";
import favorites from "./modules/favorites";

export default new Vuex.Store({
  modules: {
    dogs,
    favorites
  }
});
