<template>
  <section class="pt-16">
    <div class="container px-8">
      <div class="flex flex-wrap items-center justify-between max-lg:justify-center">
        <div>
          <h6 class="mb-6 w-[100%] max-w-[445px] font-ibm text-3xl font-semibold text-black">{{ title }}</h6>
          <ul class="flex items-center gap-2">
            <li v-for="item in images" :key="item?.id" class="flex items-center pr-2 font-ibm text-base font-medium text-black">
              <span> <img class="h-11" :src="item?.url" alt="logo" /></span>
            </li>
          </ul>
        </div>
        <img :src="backgroundImage" alt="creative-agency" class="max-lg:mt-10" data-aos="'fade-right'" data-aos-duration="1000" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      default: 'Download Airalo app to manage and top up your eSIMs anytime, anywhere.',
    },
    images: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            url: `/assets/home/google-store.png`,
          },
          {
            id: 2,
            url: `/assets/home/apple-store.png`,
          },
        ];
      },
    },
    backgroundImage: {
      type: String,
      default: `/assets/home/marketing-Image.png`,
    },
  });
</script>
