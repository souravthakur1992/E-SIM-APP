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
                @click="activeTab = 'Local'"
              >
                Local
              </button>
            </li>
            <li class="filter" :class="{ active: activeTab === 'Regional' }">
              <button
                type="button"
                class="btn rounded-none px-5 py-1 font-ibm text-sm font-medium capitalize text-tabGrey hover:rounded-[4px] hover:bg-black hover:text-white"
                @click="activeTab = 'Regional'"
              >
                Regional
              </button>
            </li>
            <li class="filter" :class="{ active: activeTab === 'Global' }">
              <button
                type="button"
                class="btn rounded-none px-5 py-1 font-ibm text-sm capitalize text-tabGrey hover:rounded-[4px] hover:bg-black hover:text-white"
                @click="activeTab = 'Global'"
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
        <p class="mt-10 mb-5 font-ibm text-2xl font-semibold text-black">Popular Countries</p>
      </div>
      <div class="mx-auto mb-10">
        <div class="mt-2.5 flex flex-col rounded-md px-5 py-4 shadow-default">
          <button type="button" @click="onToggle" class="relative !flex w-full items-center justify-between gap-2 text-lg font-bold text-black">
            <ul class="flex items-center gap-5">
              <li class="flex items-center pr-2 font-ibm text-base font-medium text-black">
                <span class="pr-5"> <img src="/assets/home/canada.svg" alt="logo" /> </span>
                Canada
              </li>
            </ul>
            <div class="border-gray text-gray grid h-6 w-6 flex-shrink-0 place-content-center transition" :class="{ 'rotate-180': isOpen }">
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
        <HeightCollapsible
          transition="height 300ms ease-in-out"
          tag="section"
          :isOpen="isOpen"
          :aria-hidden="isOpen ? 'false' : 'true'"
          class="app__collapse"
          @update="onUpdate"
        >
          <section class="to-transparent bg-gradient-to-t from-white/[55%] py-14 dark:bg-none lg:py-12">
            <div class="container">
              <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div class="rounded-lg shadow-default">
                    <div class="flex items-center justify-around border-b-[1px] border-[#EEEEEE] p-5">
                      <div>
                        <p class="font-ibm text-xl font-semibold text-black">Tuque Mobile</p>
                        <p class="font-md font-ibm text-[13px] text-black">Canada</p>
                      </div>
                      <div><img class="-mt-[40%] w-36" src="https://cdn.airalo.com/images/66dfa7f5-f415-4262-8ef7-8f61ff1b2319.png" alt="logo" /></div>
                    </div>

                    <div class="items-center py-2 px-2">
                      <ul class="flex justify-between">
                        <li class="flex items-center pr-2 font-ibm text-base font-medium text-black">
                          <span class="pr-2"> <img src="/assets/home/log-in.png" alt="logo" /> </span>
                          Data
                        </li>
                        <li class="flex items-center pr-2 font-ibm text-base font-medium text-black">
                          <span class="pr-2"> <img src="/assets/home/earth.png" alt="logo" /> </span>
                          1 GB
                          <div class="ml-1">
                            <img src="/assets/home/arrow-down.svg" alt="logo" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="items-center border-t-[1px] border-b-[1px] border-[#EEEEEE] py-2 px-2">
                      <ul class="flex justify-between">
                        <li class="flex items-center pr-2 font-ibm text-base font-medium text-black">
                          <span class="pr-2"> <img src="/assets/home/log-in.png" alt="logo" /> </span>
                          Data
                        </li>
                        <li class="flex items-center pr-2 font-ibm text-base font-medium text-black">
                          <span class="pr-2"> <img src="/assets/home/earth.png" alt="logo" /> </span>
                          1 GB
                          <div class="ml-1">
                            <img src="/assets/home/arrow-down.svg" alt="logo" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="flex items-center justify-around border-b-[1px] border-[#EEEEEE] p-5">
                      <div class="border-black p-5 font-ibm text-xs font-bold text-black">
                        <button type="button" class="w-full max-w-[100%] rounded-md border-[1px] border-black p-2">SHOW SUPPORTED DEVICES</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </HeightCollapsible>
        <div class="mt-2.5 flex flex-col rounded-md px-5 py-4 shadow-default">
          <button type="button" class="relative !flex w-full items-center justify-between gap-2 text-lg font-bold text-black">
            <ul class="flex items-center gap-5">
              <li class="flex items-center pr-2 font-ibm text-base font-medium text-black">
                <span class="pr-5"> <img src="/assets/home/canada.svg" alt="logo" /> </span>
                Canada
              </li>
            </ul>
            <div class="border-gray text-gray grid h-6 w-6 flex-shrink-0 place-content-center transition">
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
          <!-- <vue-collapsible>
            <div class="lg:w-4/5">
              <p class="text-gray px-0 pb-0 pt-0 text-sm font-bold leading-[18px]">answer</p>
            </div>
          </vue-collapsible> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeightCollapsible from 'vue-height-collapsible/vue3';
  export default {
    name: 'HomePage',
    components: {
      HeightCollapsible,
    },
    data() {
      return {
        isOpen: false,
        collapseState: '',
        selectedTab: 'Local',
      };
    },
    methods: {
      onToggle() {
        this.isOpen = !this.isOpen;
      },
      onUpdate({ state }) {
        this.collapseState = state;
      },
    },
  };
</script>
