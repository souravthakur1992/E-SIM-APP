<template>
  <div class="container">
    <!-- Region Types Tab -->
    <div class="heading text-left">
      <p v-if="activeTab == 'Local'" class="mt-10 mb-5 font-ibm text-2xl font-semibold text-black">Popular Countries</p>
      <p v-if="activeTab == 'Regional'" class="mt-10 mb-5 font-ibm text-2xl font-semibold text-black">Regions</p>
      <p v-if="activeTab == 'Global'" class="mt-10 mb-5 font-ibm text-2xl font-semibold text-black">Discover Global</p>
    </div>
    <!-- Country List -->
    <div v-if="loadingCountry">Loading ...</div>
    <div v-else class="mx-auto mb-8">
      <div v-if="activeTab !== 'Global' ? true : false">
        <div v-for="item in countries" :key="item?.id">
          <div class="mt-2.5 flex flex-col rounded-md px-5 py-4 shadow-default">
            <button
              type="button"
              @click="onToggle(item?.id)"
              :aria-expanded="isOpen == item?.id"
              class="relative !flex w-full items-center justify-between gap-2 text-lg font-bold text-black hover:border-black"
            >
              <ul class="flex items-center gap-5">
                <li class="flex items-center pr-2 font-ibm text-base font-medium text-black">
                  <span class="pr-5"> <img class="h-7" v-bind:src="item?.image?.url" alt="logo" /> </span>
                  {{ item?.title }}
                </li>
              </ul>
              <div class="border-gray text-gray grid h-6 w-6 flex-shrink-0 place-content-center transition" :class="{ 'rotate-180': isOpen == item.id }">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 7.19545C3 7.51992 3.11543 7.80171 3.35516 8.02372L10.0144 14.5731C10.3074 14.8719 10.6271 15 11 15C11.3818 15 11.6926 14.8719 11.9856 14.5731L18.6448 8.02372C18.8846 7.80171 19 7.52846 19 7.19545C19 6.53795 18.4495 6 17.7658 6C17.4284 6 17.1176 6.13662 16.869 6.37571L11.0089 12.1822L5.13097 6.37571C4.89123 6.13662 4.58047 6 4.23418 6C3.5505 6 3 6.53795 3 7.19545Z"
                    fill="#DDDDDD"
                  />
                </svg>
              </div>
            </button>
          </div>
          <!-- Country Details -->
          <div v-if="loadingCountryDetail" :class="state">Loading ...</div>
          <div v-if="isOpen == item?.id" class="mx-auto">
            <CountryDetai :packages="countryDetail?.packages" />
          </div>
        </div>
      </div>
      <!-- Global Details -->
      <div v-else class="mx-auto mb-8">
        <div class="mx-auto">
          <CountryDetai :packages="countries?.packages" />
        </div>
      </div>
    </div>
    <div v-if="loadMore == 'popular' && activeTab == 'Local' ? true : false" class="mx-auto flex items-center justify-around pb-10">
      <button
        @click="onLoadMore('')"
        type="button"
        class="h-11 w-full max-w-[310px] rounded-md border-[1px] bg-black p-2 text-white hover:border-black hover:bg-black"
      >
        SHOW ALL COUNTRIES
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
  // Component Import
  import CountryDetai from './CountryDetail.vue';
  // Page Props
  defineProps({
    loadingCountry: {
      type: Boolean,
      default: false,
    },
    loadingCountryDetail: {
      type: Boolean,
      default: false,
    },
    onToggle: {
      type: Function,
      default: () => ({}),
    },
    isOpen: {
      type: String,
      default: '',
    },
    loadMore: {
      type: String,
      default: 'popular',
    },
    activeTab: {
      type: String,
      default: '',
    },
    onUpdate: {
      type: Function,
      default: () => ({}),
    },
    onTabChange: {
      type: Function,
      default: () => ({}),
    },
    onLoadMore: {
      type: Function,
      default: () => ({}),
    },
    countryDetail: {
      type: Array,
      default: () => {
        return [];
      },
    },
    countries: {
      type: Array,
      default: () => {
        return [];
      },
    },
  });
</script>
<style scoped></style>
