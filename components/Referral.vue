<template>
  <section class="container pt-16">
    <div class="min-h-[450px] bg-referal bg-cover bg-no-repeat bg-blend-normal">
      <div class="mx-auto flex flex-col items-start justify-center pt-[10%] pl-24 max-md:items-center max-md:justify-center max-md:pt-[20%] max-md:pl-0">
        <h6 class="mb-6 w-[100%] max-w-[445px] font-ibm text-3xl font-semibold text-white">{{ title }}</h6>
        <h6 class="mb-6 w-[100%] max-w-[445px] font-ibm text-base font-normal text-white">{{ lead }}</h6>
        <div class="flex items-center justify-around pb-10">
          <button
            type="button"
            class="h-11 w-full max-w-[310px] rounded-md border-[1px] bg-opacity-0 px-8 text-[11px] text-white hover:border-black hover:bg-black"
          >
            FIND OUT HOW
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      default: 'Get free eSIMs',
    },
    lead: {
      type: String,
      default: 'You can earn $3 Airmoney credits by sharing your referral code with friends.',
    },
    button: {
      type: String,
      default: 'FIND OUT HOW',
    },
  });
</script>
