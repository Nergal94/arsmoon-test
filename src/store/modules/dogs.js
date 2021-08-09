import {SET_BREED_FILTER, SET_BREEDS, SET_DOGS, TOGGLE_SORT, UPDATE_DOGS} from "../mutations/dogs";
import {request} from "../../helpers/utils";

export default {
  actions: {
    async getDogs({ commit }) {
      const dogs = await request('https://dog.ceo/api/breeds/image/random/20');
      commit(SET_DOGS, dogs);
    },
    async loadNewDogs({ commit, state }) {
      let dogs = [];
      if (state.filterByBreed) {
        dogs = await request(`https://dog.ceo/api/breed/${ state.filterByBreed }/images/random/20`);
      } else {
        dogs = await request('https://dog.ceo/api/breeds/image/random/20');
      }

      commit(UPDATE_DOGS, dogs);
    },
    toggleSort({ commit }) {
      commit(TOGGLE_SORT);
    },
    async getBreeds({ commit }) {
      const breeds = await request('https://dog.ceo/api/breeds/list/all');
      commit(SET_BREEDS, breeds);
    },
    async getDogsByBreed({ commit, dispatch }, breed) {
      if (breed) {
        commit(SET_BREED_FILTER, breed);
      } else {
        commit(SET_BREED_FILTER, null);
        await dispatch('getDogs');
        return;
      }
      const dogs = await request(`https://dog.ceo/api/breed/${ breed }/images/random/20`);
      commit(SET_DOGS, dogs);
    },
    resetBreeds({ commit }) {
      commit(SET_BREEDS, []);
    },
    resetDogs({ commit }) {
      commit(SET_DOGS, [])
    }
  },
  mutations: {
    [SET_DOGS](state, dogs) {
      state.dogs = dogs;
    },
    [UPDATE_DOGS](state, dogs) {
      state.dogs.push(...dogs);
    },
    [TOGGLE_SORT](state) {
      state.isNeedSort = !state.isNeedSort;
    },
    [SET_BREED_FILTER](state, breed) {
      state.filterByBreed = breed;
    },
    [SET_BREEDS](state, breeds) {
      if (!Object.keys(breeds).length) {
        state.breeds = [];
        return;
      }
      for (const breed in breeds) {
        state.breeds.push(breed);
      }
    }
  },
  state: {
    dogs: [],
    breeds: [],
    filterByBreed: null,
    isNeedSort: false
  },
  getters: {
    dogs(state) {
      if (!state.isNeedSort) {
        return state.dogs;
      }
      return state.dogs.sort();
    },
    breeds(state) {
      return state.breeds;
    }
  }
}
