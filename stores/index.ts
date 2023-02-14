import { defineStore } from 'pinia';
export const useAppStore = defineStore('app', {
  state: () => ({
    isShowMainLoader: true,
  }),

  actions: {
    toggleMainLoader(payload: boolean = false) {
      this.isShowMainLoader = payload || false;
    },
  },
  getters: {},
});
