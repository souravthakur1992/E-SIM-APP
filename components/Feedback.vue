<template>
  <section class="overflow-hidden py-16">
    <div class="container">
      <div class="heading text-center">
        <h6 class="mb-10 font-ibm text-2xl font-semibold text-black">Customer Reviews</h6>
      </div>
    </div>

    <div class="container relative cursor-pointer px-16">
      <div
        class="team-swiper-button-prev border-primary absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 rotate-90 items-center justify-center bg-white text-black shadow-default duration-200 hover:bg-black hover:text-white"
      >
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 10.1641C7 10.3444 7.05771 10.5009 7.17758 10.6243L10.5072 14.2628C10.6537 14.4288 10.8135 14.5 11 14.5C11.1909 14.5 11.3463 14.4288 11.4928 14.2628L14.8224 10.6243C14.9423 10.5009 15 10.3491 15 10.1641C15 9.79886 14.7248 9.5 14.3829 9.5C14.2142 9.5 14.0588 9.5759 13.9345 9.70873L11.0044 12.9345L8.06548 9.70873C7.94562 9.5759 7.79023 9.5 7.61709 9.5C7.27525 9.5 7 9.79886 7 10.1641Z"
            class="fill-grey"
          />
        </svg>
      </div>
      <div
        class="team-swiper-button-next border-primary text-primary hover:bg-primary absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 -rotate-90 cursor-pointer items-center justify-center bg-white text-black shadow-default duration-200 hover:bg-black hover:text-white"
      >
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 10.1641C7 10.3444 7.05771 10.5009 7.17758 10.6243L10.5072 14.2628C10.6537 14.4288 10.8135 14.5 11 14.5C11.1909 14.5 11.3463 14.4288 11.4928 14.2628L14.8224 10.6243C14.9423 10.5009 15 10.3491 15 10.1641C15 9.79886 14.7248 9.5 14.3829 9.5C14.2142 9.5 14.0588 9.5759 13.9345 9.70873L11.0044 12.9345L8.06548 9.70873C7.94562 9.5759 7.79023 9.5 7.61709 9.5C7.27525 9.5 7 9.79886 7 10.1641Z"
            class="fill-grey"
          />
        </svg>
      </div>
      <swiper
        :loop="true"
        :spaceBetween="30"
        centered-slides="true"
        centered-slides-bounds="true"
        :breakpoints="{
          1200: {
            slidesPerView: 1,
          },
          1201: {
            slidesPerView: 3,
          },
        }"
        :navigation="{
          nextEl: '.team-swiper-button-next',
          prevEl: '.team-swiper-button-prev',
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="[Navigation, Pagination, EffectFade]"
        class="swiper team-member text-center"
      >
        <swiper-slide class="relative" v-for="item in feedback" :key="item?.id">
          <div class="rounded-lg">
            <div class="flex justify-between">
              <ul class="flex items-center gap-5">
                <li class="title flex items-center py-4 px-6 pr-2 font-ibm text-base font-medium text-black">
                  <span> <img class="image h-7 pr-5" :src="item?.image" alt="logo" /> </span>
                  {{ item?.title }}
                </li>
              </ul>
            </div>

            <div class="title items-center py-2 px-5">
              <ul class="flex justify-between">
                <li class="title flex items-center justify-between pr-2 font-ibm text-base font-medium">{{ item?.excerpt }}</li>
              </ul>
            </div>
            <div class="title py-2 px-5">
              <ul class="flex justify-between">
                <li class="description title flex pr-2 text-left font-ibm text-base font-normal text-grey">
                  {{ item?.description }}
                </li>
              </ul>
            </div>
            <div class="flex justify-between px-5">
              <div class="title description flex items-center font-ibm text-[15px] font-semibold text-grey">by loremipsum, 21 June 2021</div>
              <div class="title font-xs flex items-center justify-between py-5 px-5 font-ibm text-[15px] font-semibold text-black">
                <div v-for="index in 5" :key="index" class="flex pr-1">
                  <span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.08105 9.90818C8.17865 9.82911 8.23846 9.72534 8.2605 9.59685C8.28254 9.46837 8.26522 9.31517 8.20855 9.13727L7.283 6.25624L9.64411 4.4871C9.78892 4.37508 9.89045 4.2606 9.94869 4.14365C10.0069 4.02669 10.0156 3.90727 9.97466 3.78537C9.93689 3.66347 9.86133 3.57205 9.748 3.5111C9.63466 3.45015 9.48985 3.42133 9.31355 3.42462L6.41411 3.44439L5.53577 0.548533C5.47911 0.367336 5.4067 0.230614 5.31855 0.138369C5.2304 0.0461229 5.12337 0 4.99744 0C4.87466 0 4.7692 0.0461229 4.68105 0.138369C4.5929 0.230614 4.5205 0.367336 4.46383 0.548533L3.5855 3.44439L0.690773 3.42462C0.511328 3.42133 0.365726 3.45015 0.253967 3.5111C0.142208 3.57205 0.0658652 3.66183 0.0249392 3.78043C-0.0159867 3.90562 -0.00654225 4.02669 0.0532726 4.14365C0.113087 4.2606 0.215402 4.37508 0.360217 4.4871L2.72133 6.25624L1.79577 9.13727C1.73911 9.31517 1.721 9.46837 1.74147 9.59685C1.76193 9.72534 1.82096 9.82911 1.91855 9.90818C2.01929 9.98725 2.13184 10.0153 2.25619 9.99219C2.38054 9.96913 2.51513 9.90159 2.65994 9.78958L4.99744 7.99079L7.33966 9.78958C7.48763 9.90159 7.62378 9.96913 7.74814 9.99219C7.87249 10.0153 7.98346 9.98725 8.08105 9.90818Z"
                        :fill="`${index > item?.star ? (index <= item?.star ? `#ffcc00` : `#dddddd`) : item?.star >= index ? `#ffcc00` : `#dddddd`}`"
                      />
                    </svg>
                  </span>
                </div>
                {{ item?.star }}
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="mx-auto flex items-center justify-around py-10">
      <button
        type="button"
        class="h-11 w-full max-w-[162px] rounded-md border-[1px] border-black bg-background p-2 text-xs font-bold text-black hover:bg-black hover:text-white"
      >
        SHOW ALL REVIEWS
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { EffectFade, Navigation, Pagination } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  defineProps({
    feedback: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            title: 'USA',
            image: 'https://cdn.airalo.com/images/600de234-ec12-4e1f-b793-c70860e4545a.png',
            excerpt: 'Lorem ipsum',
            star: 5,
            description:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar, quam eu elementum dictum, lectus nulla laoreet ex, eu ultrices lectus ipsum vitae mauris. Nullam interdum purus sed est blandit, vitae tincidunt dui commodo. Etiam nec sapien hendrerit, iaculis massa eu, placerat turpis.',
          },
          {
            id: 2,
            title: 'Canada',
            image: '/assets/home/canada.svg',
            excerpt: 'Lorem ipsum',
            star: 4,
            description:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar, quam eu elementum dictum, lectus nulla laoreet ex, eu ultrices lectus ipsum vitae mauris. Nullam interdum purus sed est blandit, vitae tincidunt dui commodo. Etiam nec sapien hendrerit, iaculis massa eu, placerat turpis.',
          },
          {
            id: 3,
            title: 'Africa',
            image: 'https://cdn.airalo.com/images/44b29a31-1728-4a33-86dc-11ca4ca2d456.png',
            excerpt: 'Lorem ipsum',
            star: 3,
            description:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar, quam eu elementum dictum, lectus nulla laoreet ex, eu ultrices lectus ipsum vitae mauris. Nullam interdum purus sed est blandit, vitae tincidunt dui commodo. Etiam nec sapien hendrerit, iaculis massa eu, placerat turpis.',
          },
          {
            id: 4,
            title: 'India',
            image: 'https://cdn.airalo.com/images/054cac1d-abf6-4d8a-82e3-a5e16271b782.png',
            excerpt: 'Lorem ipsum',
            star: 4,
            description:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar, quam eu elementum dictum, lectus nulla laoreet ex, eu ultrices lectus ipsum vitae mauris. Nullam interdum purus sed est blandit, vitae tincidunt dui commodo. Etiam nec sapien hendrerit, iaculis massa eu, placerat turpis.',
          },
        ];
      },
    },
  });
</script>
