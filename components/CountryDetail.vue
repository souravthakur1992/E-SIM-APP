<template>
  <section class="mt-14">
    <div class="container">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="network in packages" :key="network?.id" data-aos="fade-down" data-aos-duration="600">
          <div
            class="mb-8 rounded-lg shadow-default"
            :style="{ background: `linear-gradient(${90}deg, ${network?.operator?.gradient_start}, ${network?.operator?.gradient_end})` }"
          >
            <div class="flex justify-between border-b-[1px] border-[#EEEEEE] py-5 px-6">
              <div>
                <p class="font-ibm text-xl font-semibold" :class="`${network?.operator?.style != 'light' ? 'text-black' : 'text-white'}`">
                  {{ network?.operator?.title }}
                </p>
                <p
                  v-if="network?.operator?.countries?.length == 1"
                  class="font-md font-ibm text-[13px]"
                  :class="`${network?.operator?.style != 'light' ? 'text-black' : 'text-white'}`"
                >
                  {{ network?.operator?.countries?.[0]?.title }}
                </p>
                <ul v-else class="font-md flex items-center gap-5">
                  <li
                    class="pr-2font-ibm flex items-center text-[13px] font-medium"
                    :class="`${network?.operator?.style != 'light' ? 'text-black' : 'text-white'}`"
                  >
                    {{ network?.operator?.countries?.length }} Countries
                    <span class="pl-2">
                      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.9971 12.5C9.28565 12.5 12 9.78433 12 6.5C12 3.21567 9.27985 0.5 5.9913 0.5C2.70855 0.5 0 3.21567 0 6.5C0 9.78433 2.71435 12.5 5.9971 12.5ZM6.49009 9.09961C6.2059 9.09961 6.0029 8.88491 6.0029 8.59478C6.0029 8.44971 6.0609 8.31625 6.1595 8.2234L6.89029 7.52708L7.56307 6.98743L6.32769 7.04545H3.39874C3.08555 7.04545 2.86515 6.81335 2.86515 6.5C2.86515 6.18085 3.09135 5.94874 3.39874 5.94874H6.32769L7.56307 6.00677L6.88449 5.46712L6.1595 4.77079C6.0667 4.67795 6.0029 4.54449 6.0029 4.39942C6.0029 4.10928 6.2059 3.90039 6.49009 3.90039C6.64089 3.90039 6.75689 3.94101 6.86129 4.04545L8.90865 6.0648C9.05365 6.19826 9.11165 6.33172 9.11165 6.4942C9.11165 6.66828 9.04785 6.80174 8.90865 6.9352L6.86129 8.94874C6.75689 9.04739 6.64089 9.09961 6.49009 9.09961Z"
                          :fill="`${network?.operator?.style == 'light' ? '#FFFFFF' : '#4A4A4A'}`"
                        />
                      </svg>
                    </span>
                  </li>
                </ul>
              </div>
              <div><img class="-mt-[40%] w-36" :src="network?.operator?.image?.url" /></div>
            </div>

            <div class="items-center py-5 px-5">
              <ul class="flex justify-between">
                <li
                  class="flex items-center justify-between pr-2 font-ibm text-base font-medium"
                  :class="`${network?.operator?.style != 'light' ? 'text-black' : 'text-white'}`"
                >
                  <svg width="22" class="mr-1" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.7012 3C14.9167 3 15.0915 3.17472 15.0915 3.39024V6.70732C15.0915 6.92285 14.9167 7.09757 14.7012 7.09757C14.4857 7.09757 14.311 6.92285 14.311 6.70732V3.39024C14.311 3.17472 14.4857 3 14.7012 3ZM7.28658 3C7.50211 3 7.67682 3.17472 7.67682 3.39024V6.70732C7.67682 6.92285 7.50211 7.09757 7.28658 7.09757C7.07104 7.09757 6.89633 6.92285 6.89633 6.70732V3.39024C6.89633 3.17472 7.07104 3 7.28658 3ZM17.4329 4.17073C18.3004 4.17073 19 4.87033 19 5.73781V9.24391H3V5.73781C3 4.87033 3.69961 4.17073 4.56706 4.17073H5.73171H6.50609V5.83537C6.26675 6.04973 6.11584 6.36074 6.11584 6.70732C6.11584 7.3539 6.64 7.87806 7.28658 7.87806C7.93315 7.87806 8.45731 7.3539 8.45731 6.70732C8.45731 6.36074 8.3064 6.04973 8.06706 5.83537V4.17073H13.9268V5.82927C13.6838 6.04379 13.5305 6.35765 13.5305 6.70732C13.5305 7.3539 14.0546 7.87806 14.7012 7.87806C15.3478 7.87806 15.8719 7.3539 15.8719 6.70732C15.8719 6.36383 15.7234 6.05563 15.4878 5.84147V4.17073H17.4329ZM19 10.0244V17.4329C19 18.3004 18.3004 19 17.4329 19H4.56706C3.69961 19 3 18.3004 3 17.4329V10.0244L19 10.0244Z"
                      :fill="`${network?.operator?.style == 'light' ? '#FFFFFF' : '#4A4A4A'}`"
                    />
                  </svg>
                  Data
                </li>
                <li
                  class="flex items-center pr-2 font-ibm text-base font-medium"
                  :class="`${network?.operator?.style != 'light' ? 'text-black' : 'text-white'}`"
                >
                  {{ network?.data }}
                  <div class="ml-1"></div>
                </li>
              </ul>
            </div>
            <div class="items-center border-t-[1px] border-b-[1px] border-[#EEEEEE] py-5 px-5">
              <ul class="flex justify-between">
                <li
                  class="flex items-center justify-between pr-2 font-ibm text-base font-medium"
                  :class="`${network?.operator?.style != 'light' ? 'text-black' : 'text-white'}`"
                >
                  <svg width="22" class="mr-1" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.0107 13.25H11.5616C11.1239 13.25 10.8745 13.75 11.1377 14.0997L14.5904 18.6868C14.8026 18.9688 15.226 18.9688 15.4382 18.6868L18.8909 14.0997C19.1541 13.75 18.9047 13.25 18.467 13.25H16.0179V4.0036C16.0179 3.44933 15.5686 3 15.0143 3C14.46 3 14.0107 3.44933 14.0107 4.0036V13.25ZM7.40942 3.31321C7.19715 3.0312 6.77383 3.0312 6.56156 3.31321L3.10886 7.9003C2.84566 8.24998 3.09513 8.75 3.53279 8.75H5.98189V17.9964C5.98189 18.5507 6.43122 19 6.98549 19C7.53976 19 7.98909 18.5507 7.98909 17.9964V8.75H10.4382C10.8759 8.75 11.1253 8.24998 10.8621 7.9003L7.40942 3.31321Z"
                      :fill="`${network?.operator?.style == 'light' ? '#FFFFFF' : '#4A4A4A'}`"
                    />
                  </svg>
                  Validity
                </li>
                <li
                  class="flex items-center pr-2 font-ibm text-base font-medium"
                  :class="`${network?.operator?.style != 'light' ? 'text-black' : 'text-white'}`"
                >
                  {{ network?.validity }}
                </li>
              </ul>
            </div>
            <div class="flex items-center justify-around border-b-[1px] border-[#EEEEEE] p-6">
              <div
                class="mx-auto w-full max-w-[310px] border-black font-ibm text-xs font-bold"
                :class="`${network?.operator?.style != 'light' ? 'text-black' : 'text-white'}`"
              >
                <button
                  type="button"
                  class="h-11 w-full max-w-[310px] rounded-md border-[1px] p-2 hover:border-black hover:bg-black hover:text-white hover:text-white"
                  :class="`${network?.operator?.style == 'light' ? 'border-white text-white' : 'border-black text-black'}`"
                >
                  US${{ network?.price }} - BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
  // Page Props
  defineProps({
    packages: {
      type: Array,
      default: () => {
        return [];
      },
    },
  });
</script>
