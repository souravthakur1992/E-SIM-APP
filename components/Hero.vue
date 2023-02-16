<template>
  <slot>
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
              <div class="mt-10 flex justify-between rounded-lg bg-white pl-8 pr-1.5 shadow md:mt-10 lg:max-w-[540px]">
                <div class="flex items-center gap-2.5">
                  <div>
                    <input type="search" placeholder="Label" class="h-12 border-0 font-ibm font-normal text-black outline-0" />
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
            class="filters realestate-filter mx-auto mt-7 flex h-11 w-full max-w-[350px] flex-row justify-evenly gap-5 overflow-auto whitespace-nowrap rounded-md bg-white px-3 py-2 font-medium shadow"
          >
            <li class="filter" :class="{ active: activeTab === 'Local' }">
              <button
                type="button"
                class="btn rounded-none px-6 py-1 font-ibm text-sm font-medium capitalize text-tabGrey hover:rounded-[4px] hover:bg-black hover:text-white"
                @click="onTabChange('Local')"
              >
                Local
              </button>
            </li>
            <li class="filter" :class="{ active: activeTab === 'Regional' }">
              <button
                type="button"
                class="btn rounded-none px-6 py-0.5 font-ibm text-sm font-medium capitalize text-tabGrey hover:rounded-[4px] hover:bg-black hover:text-white"
                @click="onTabChange('Regional')"
              >
                Regional
              </button>
            </li>
            <li class="filter" :class="{ active: activeTab === 'Global' }">
              <button
                type="button"
                class="btn rounded-none px-6 py-0.5 font-ibm text-sm capitalize text-tabGrey hover:rounded-[4px] hover:bg-black hover:text-white"
                @click="onTabChange('Global')"
              >
                Global
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </slot>
</template>
<script setup lang="ts">
  defineProps({
    activeTab: {
      type: String,
      default: 'Local',
    },
    onTabChange: {
      type: Function,
      default: () => ({}),
    },
  });
</script>
