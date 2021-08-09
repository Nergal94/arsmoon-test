import {LOAD_FAVORITES, REMOVE_FROM_FAVORITES, SET_AS_FAVORITES} from "../mutations/favorites";

export default {
  actions: {
    loadFavorites({ commit }) {
      commit(LOAD_FAVORITES);
    },
    setAsFavorites({ commit }, src) {
      commit(SET_AS_FAVORITES, src);
    },
    removeFromFavorites({ commit }, src) {
      commit(REMOVE_FROM_FAVORITES, src);
    }
  },
  mutations: {
    [LOAD_FAVORITES](state) {
      let favorites = localStorage.getItem('favorites');
      if (!favorites) {
        return;
      }
      favorites = JSON.parse(favorites);
      state.favorites = favorites;
    },
    [SET_AS_FAVORITES](state, src) {
      state.favorites.push(src);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    [REMOVE_FROM_FAVORITES](state, src) {
      const index = state.favorites.indexOf(src);
      if (index < 0) {
        return;
      }
      state.favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }
  },
  state: {
    favorites: []
  },
  getters: {
    favorites(state) {
      return state.favorites;
    },
    isFavorites: state => src => {
      return state.favorites.indexOf(src) > -1;
    }
  }
}
