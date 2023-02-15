<template>
  <div class="overflow-y-hidden bg-background">
    <div class="relative flex h-[60%] max-h-full">
      <div class="w-full bg-hero bg-cover bg-[center_top_2rem] bg-no-repeat bg-blend-normal">
        <div class="container mx-auto pt-48 pb-16 md:pt-48 xl:max-w-[540px]">
          <div class="relative">
            <div class="w-full text-center">
              <h1 class="py-5 align-middle font-ibm text-3xl font-semibold text-white md:py-0 md:text-3xl md:leading-[37px]">
                Digital SIM cards (eSIM) to save you from expensive roaming
              </h1>
              <p class="pt-4 font-ibm text-base font-normal text-white">
                100% prepaid data packs with no hidden fees. <span class="underline"> Learn more</span>
              </p>
              <div class="mt-10 flex justify-between rounded-md bg-white pl-8 pr-2 shadow md:mt-10 lg:max-w-[540px]">
                <div class="flex items-center gap-2.5">
                  <div>
                    <input type="search" placeholder="Label" class="h-14 border-0 font-ibm font-normal text-black outline-0" />
                  </div>
                </div>
                <div class="flex items-center">
                  <button type="button" class="rounded-md bg-black p-2">
                    <img src="../public/assets/home/search-glass.png" alt="logo" />
                  </button>
                </div>
              </div>
              <div class="pt-10">
                <p class="font-ibm text-base font-medium text-white">Is your device eSIM compatible?</p>
              </div>
              <div class="border-black pt-5 font-ibm text-xs font-bold text-white">
                <button type="button" class="w-full max-w-[40%] rounded-md border-2 border-white p-2">SHOW SUPPORTED DEVICES</button>
              </div>
            </div>
          </div>
        </div>
        <div class="-mb-[40px] flex justify-between">
          <div><p class="pl-5 font-ibm text-xs font-semibold text-white">Shot by Lorem Ipsum | İstanbul, Turkey</p></div>
          <div><p class="pr-5 font-ibm text-xs font-semibold text-white">Read more about Lorem’s Story</p></div>
        </div>
        <div class="filter-Card relative flex justify-center">
          <ul
            class="filters realestate-filter mx-auto mt-7 flex w-full max-w-[350px] flex-row justify-evenly gap-5 overflow-auto whitespace-nowrap rounded-md bg-white px-4 py-2 font-medium shadow"
          >
            <li class="filter" :class="{ active: activeTab === 'Local' }">
              <button
                type="button"
                class="btn rounded-none px-5 py-1 font-ibm text-sm font-medium capitalize text-tabGrey hover:rounded-[4px] hover:bg-black hover:text-white"
                @click="onTabChange('Local')"
              >
                Local
              </button>
            </li>
            <li class="filter" :class="{ active: activeTab === 'Regional' }">
              <button
                type="button"
                class="btn rounded-none px-5 py-1 font-ibm text-sm font-medium capitalize text-tabGrey hover:rounded-[4px] hover:bg-black hover:text-white"
                @click="onTabChange('Regional')"
              >
                Regional
              </button>
            </li>
            <li class="filter" :class="{ active: activeTab === 'Global' }">
              <button
                type="button"
                class="btn rounded-none px-5 py-1 font-ibm text-sm capitalize text-tabGrey hover:rounded-[4px] hover:bg-black hover:text-white"
                @click="onTabChange('Global')"
              >
                Global
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="heading text-left">
        <p v-if="activeTab == 'Local'" class="mt-10 mb-5 font-ibm text-2xl font-semibold text-black">Popular Countries</p>
        <p v-if="activeTab == 'Regional'" class="mt-10 mb-5 font-ibm text-2xl font-semibold text-black">Regional</p>
        <p v-if="activeTab == 'Global'" class="mt-10 mb-5 font-ibm text-2xl font-semibold text-black">Global</p>
      </div>
      <div v-if="loadingCountry">Loading ...</div>
      <div v-else class="mx-auto mb-8">
        <div v-if="activeTab !== 'Global' ? true : false">
          <div v-for="item in countries" :key="item.id">
            <div class="mt-2.5 flex flex-col rounded-md px-5 py-4 shadow-default">
              <button
                type="button"
                @click="onToggle(item.id)"
                class="relative !flex w-full items-center justify-between gap-2 text-lg font-bold text-black hover:border-black"
              >
                <ul class="flex items-center gap-5">
                  <li class="flex items-center pr-2 font-ibm text-base font-medium text-black">
                    <span class="pr-5"> <img class="h-7" v-bind:src="item.image.url" alt="logo" /> </span>
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
            <HeightCollapsible tag="section" :isOpen="isOpen == item.id" :aria-hidden="isOpen == item.id ? 'false' : 'true'" class="app__collapse">
              <div v-if="loadingCountryDetail">Loading ...</div>
              <div v-else class="mx-auto">
                <section class="mt-14">
                  <div class="container">
                    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <div v-for="network in countryDetail.packages" :key="network.id" data-aos="fade-down" data-aos-duration="1000">
                        <div
                          class="mb-8 rounded-lg shadow-default"
                          :style="{ background: `linear-gradient(${90}deg, ${network.operator.gradient_start}, ${network.operator.gradient_end})` }"
                        >
                          <div class="flex justify-between border-b-[1px] border-[#EEEEEE] py-5 px-6">
                            <div>
                              <p class="font-ibm text-xl font-semibold" :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`">
                                {{ network.operator.title }}
                              </p>
                              <p class="font-md font-ibm text-[13px]" :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`">
                                {{ network.operator.countries?.[0]?.title }}
                              </p>
                            </div>
                            <div><img class="-mt-[40%] w-36" :src="network.operator.image?.url" /></div>
                          </div>

                          <div class="items-center py-5 px-5">
                            <ul class="flex justify-between">
                              <li
                                class="flex items-center justify-between pr-2 font-ibm text-base font-medium"
                                :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`"
                              >
                                <svg width="22" class="mr-1" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M14.7012 3C14.9167 3 15.0915 3.17472 15.0915 3.39024V6.70732C15.0915 6.92285 14.9167 7.09757 14.7012 7.09757C14.4857 7.09757 14.311 6.92285 14.311 6.70732V3.39024C14.311 3.17472 14.4857 3 14.7012 3ZM7.28658 3C7.50211 3 7.67682 3.17472 7.67682 3.39024V6.70732C7.67682 6.92285 7.50211 7.09757 7.28658 7.09757C7.07104 7.09757 6.89633 6.92285 6.89633 6.70732V3.39024C6.89633 3.17472 7.07104 3 7.28658 3ZM17.4329 4.17073C18.3004 4.17073 19 4.87033 19 5.73781V9.24391H3V5.73781C3 4.87033 3.69961 4.17073 4.56706 4.17073H5.73171H6.50609V5.83537C6.26675 6.04973 6.11584 6.36074 6.11584 6.70732C6.11584 7.3539 6.64 7.87806 7.28658 7.87806C7.93315 7.87806 8.45731 7.3539 8.45731 6.70732C8.45731 6.36074 8.3064 6.04973 8.06706 5.83537V4.17073H13.9268V5.82927C13.6838 6.04379 13.5305 6.35765 13.5305 6.70732C13.5305 7.3539 14.0546 7.87806 14.7012 7.87806C15.3478 7.87806 15.8719 7.3539 15.8719 6.70732C15.8719 6.36383 15.7234 6.05563 15.4878 5.84147V4.17073H17.4329ZM19 10.0244V17.4329C19 18.3004 18.3004 19 17.4329 19H4.56706C3.69961 19 3 18.3004 3 17.4329V10.0244L19 10.0244Z"
                                    :fill="`${network.operator.style == 'light' ? '#FFFFFF' : '#4A4A4A'}`"
                                  />
                                </svg>
                                Data
                              </li>
                              <li
                                class="flex items-center pr-2 font-ibm text-base font-medium"
                                :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`"
                              >
                                {{ network.data }}
                                <div class="ml-1"></div>
                              </li>
                            </ul>
                          </div>
                          <div class="items-center border-t-[1px] border-b-[1px] border-[#EEEEEE] py-5 px-5">
                            <ul class="flex justify-between">
                              <li
                                class="flex items-center justify-between pr-2 font-ibm text-base font-medium"
                                :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`"
                              >
                                <svg width="22" class="mr-1" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M14.0107 13.25H11.5616C11.1239 13.25 10.8745 13.75 11.1377 14.0997L14.5904 18.6868C14.8026 18.9688 15.226 18.9688 15.4382 18.6868L18.8909 14.0997C19.1541 13.75 18.9047 13.25 18.467 13.25H16.0179V4.0036C16.0179 3.44933 15.5686 3 15.0143 3C14.46 3 14.0107 3.44933 14.0107 4.0036V13.25ZM7.40942 3.31321C7.19715 3.0312 6.77383 3.0312 6.56156 3.31321L3.10886 7.9003C2.84566 8.24998 3.09513 8.75 3.53279 8.75H5.98189V17.9964C5.98189 18.5507 6.43122 19 6.98549 19C7.53976 19 7.98909 18.5507 7.98909 17.9964V8.75H10.4382C10.8759 8.75 11.1253 8.24998 10.8621 7.9003L7.40942 3.31321Z"
                                    :fill="`${network.operator.style == 'light' ? '#FFFFFF' : '#4A4A4A'}`"
                                  />
                                </svg>
                                Validity
                              </li>
                              <li
                                class="flex items-center pr-2 font-ibm text-base font-medium"
                                :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`"
                              >
                                {{ network.validity }}
                              </li>
                            </ul>
                          </div>
                          <div class="flex items-center justify-around border-b-[1px] border-[#EEEEEE] p-6">
                            <div
                              class="mx-auto w-full max-w-[310px] border-black font-ibm text-xs font-bold"
                              :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`"
                            >
                              <button
                                type="button"
                                class="h-11 w-full max-w-[310px] rounded-md border-[1px] p-2 hover:border-black hover:bg-black"
                                :class="`${network.operator.style == 'light' ? 'border-white text-white' : 'border-black text-black'}`"
                              >
                                US${{ network.price }} - BUY NOW
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </HeightCollapsible>
          </div>
        </div>
        <div v-else class="mx-auto mb-8">
          <div class="mx-auto">
            <section class="mt-14">
              <div class="container">
                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div v-for="network in countries.packages" :key="network.id" data-aos="fade-down" data-aos-duration="1000">
                    <div
                      class="mb-8 rounded-lg shadow-default"
                      :style="{ background: `linear-gradient(${90}deg, ${network.operator.gradient_start}, ${network.operator.gradient_end})` }"
                    >
                      <div class="flex justify-between border-b-[1px] border-[#EEEEEE] py-5 px-6">
                        <div>
                          <p class="font-ibm text-xl font-semibold" :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`">
                            {{ network.operator.title }}
                          </p>
                          <p class="font-md font-ibm text-[13px]" :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`">
                            {{ network.operator.countries?.[0]?.title }}
                          </p>
                        </div>
                        <div><img class="-mt-[40%] w-36" :src="network.operator.image?.url" /></div>
                      </div>

                      <div class="items-center py-5 px-5">
                        <ul class="flex justify-between">
                          <li
                            class="flex items-center justify-between pr-2 font-ibm text-base font-medium"
                            :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`"
                          >
                            <svg width="22" class="mr-1" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M14.7012 3C14.9167 3 15.0915 3.17472 15.0915 3.39024V6.70732C15.0915 6.92285 14.9167 7.09757 14.7012 7.09757C14.4857 7.09757 14.311 6.92285 14.311 6.70732V3.39024C14.311 3.17472 14.4857 3 14.7012 3ZM7.28658 3C7.50211 3 7.67682 3.17472 7.67682 3.39024V6.70732C7.67682 6.92285 7.50211 7.09757 7.28658 7.09757C7.07104 7.09757 6.89633 6.92285 6.89633 6.70732V3.39024C6.89633 3.17472 7.07104 3 7.28658 3ZM17.4329 4.17073C18.3004 4.17073 19 4.87033 19 5.73781V9.24391H3V5.73781C3 4.87033 3.69961 4.17073 4.56706 4.17073H5.73171H6.50609V5.83537C6.26675 6.04973 6.11584 6.36074 6.11584 6.70732C6.11584 7.3539 6.64 7.87806 7.28658 7.87806C7.93315 7.87806 8.45731 7.3539 8.45731 6.70732C8.45731 6.36074 8.3064 6.04973 8.06706 5.83537V4.17073H13.9268V5.82927C13.6838 6.04379 13.5305 6.35765 13.5305 6.70732C13.5305 7.3539 14.0546 7.87806 14.7012 7.87806C15.3478 7.87806 15.8719 7.3539 15.8719 6.70732C15.8719 6.36383 15.7234 6.05563 15.4878 5.84147V4.17073H17.4329ZM19 10.0244V17.4329C19 18.3004 18.3004 19 17.4329 19H4.56706C3.69961 19 3 18.3004 3 17.4329V10.0244L19 10.0244Z"
                                :fill="`${network.operator.style == 'light' ? '#FFFFFF' : '#4A4A4A'}`"
                              />
                            </svg>
                            Data
                          </li>
                          <li
                            class="flex items-center pr-2 font-ibm text-base font-medium"
                            :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`"
                          >
                            {{ network.data }}
                            <div class="ml-1"></div>
                          </li>
                        </ul>
                      </div>
                      <div class="items-center border-t-[1px] border-b-[1px] border-[#EEEEEE] py-5 px-5">
                        <ul class="flex justify-between">
                          <li
                            class="flex items-center justify-between pr-2 font-ibm text-base font-medium"
                            :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`"
                          >
                            <svg width="22" class="mr-1" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M14.0107 13.25H11.5616C11.1239 13.25 10.8745 13.75 11.1377 14.0997L14.5904 18.6868C14.8026 18.9688 15.226 18.9688 15.4382 18.6868L18.8909 14.0997C19.1541 13.75 18.9047 13.25 18.467 13.25H16.0179V4.0036C16.0179 3.44933 15.5686 3 15.0143 3C14.46 3 14.0107 3.44933 14.0107 4.0036V13.25ZM7.40942 3.31321C7.19715 3.0312 6.77383 3.0312 6.56156 3.31321L3.10886 7.9003C2.84566 8.24998 3.09513 8.75 3.53279 8.75H5.98189V17.9964C5.98189 18.5507 6.43122 19 6.98549 19C7.53976 19 7.98909 18.5507 7.98909 17.9964V8.75H10.4382C10.8759 8.75 11.1253 8.24998 10.8621 7.9003L7.40942 3.31321Z"
                                :fill="`${network.operator.style == 'light' ? '#FFFFFF' : '#4A4A4A'}`"
                              />
                            </svg>
                            Validity
                          </li>
                          <li
                            class="flex items-center pr-2 font-ibm text-base font-medium"
                            :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`"
                          >
                            {{ network.validity }}
                          </li>
                        </ul>
                      </div>
                      <div class="flex items-center justify-around border-b-[1px] border-[#EEEEEE] p-6">
                        <div
                          class="mx-auto w-full max-w-[310px] border-black font-ibm text-xs font-bold"
                          :class="`${network.operator.style != 'light' ? 'text-black' : 'text-white'}`"
                        >
                          <button
                            type="button"
                            class="h-11 w-full max-w-[310px] rounded-md border-[1px] p-2 hover:border-black hover:bg-black"
                            :class="`${network.operator.style == 'light' ? 'border-white text-white' : 'border-black text-black'}`"
                          >
                            US${{ network.price }} - BUY NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div v-if="loadMore == 'popular' && activeTab == 'Local' ? true : false" class="mx-auto flex items-center justify-around pb-10">
        <button
          @click="loadMore = ''"
          type="button"
          class="h-11 w-full max-w-[310px] rounded-md border-[1px] bg-black p-2 text-white hover:border-black hover:bg-black"
        >
          SHOW ALL COUNTRIES
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import HeightCollapsible from 'vue-height-collapsible/vue3';
  let apiEndpoint = 'https://www.airalo.com/api/v2';
  const loadMore = ref('popular');
  const activeTab = ref('Local');
  const countries = ref([]);
  const isOpen = ref('');
  const loadingCountry = ref(false);
  const countryDetail = ref([]);
  const countryId = ref('');
  const loadingCountryDetail = ref(false);
  const fetchLocalTab = async () => {
    let url = '';
    switch (activeTab.value) {
      case 'Local':
        url = `${apiEndpoint}/countries?type=${loadMore.value}`;
        break;
      case 'Global':
        url = `${apiEndpoint}/regions/5`;
        break;
      default:
        url = `${apiEndpoint}/regions`;
    }
    const { pending, refresh, error, data } = await useLazyFetch(url);
    loadingCountry.value = pending?._value;
    countries.value = data?._rawValue;
  };

  const fetchCountry = async () => {
    let dataType = '';
    switch (activeTab) {
      case 'Local':
        dataType = 'countries';
        break;
      default:
        dataType = 'regions';
    }
    if (countryId.value != '') {
      const { pending, refresh, error, data } = await useLazyFetch(`${apiEndpoint}/${dataType}/${countryId.value}`);
      loadingCountryDetail.value = pending?._value;
      countryDetail.value = data?._rawValue;
    }
  };

  const onToggle = (value) => {
    if (isOpen.value == value) {
      isOpen.value = '';
      countryId.value = '';
    } else {
      isOpen.value = value;
      countryId.value = value;
    }
  };
  const onTabChange = (value) => {
    activeTab.value = value;
  };

  watch(loadMore, fetchLocalTab, { immediate: true });
  watch(countryId, fetchCountry, { immediate: true });
  watch(activeTab, fetchLocalTab, { immediate: true });
</script>
