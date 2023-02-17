<template>
  <div>
    <footer class="bg-background">
      <div class="container">
        <div class="grid gap-x-[3.38rem] gap-y-20 sm:grid-cols-3 lg:grid-cols-6">
          <div class="relative">
            <img src="/assets/home/logo-black.png" alt="plurk" class="h-7" />
            <p class="pt-5 font-ibm text-[13px] font-normal leading-5 text-grey">
              Airalo is the world’s first eSIM store for travelers to access over 190+ eSIMs at the most affordable rates from around the world, all via eSIM
              compatible devices.
            </p>
          </div>
          <div v-for="menu in menus" :key="menu?.id" class="flex justify-center">
            <ul class="flex flex-col gap-3 font-bold">
              <li class="font-md mb-1 text-lg text-black dark:text-white">{{ menu?.title }}</li>
              <li v-for="(subMenu, index) in menu?.subMenus" :key="index + 'subMenu'">
                <NuxtLink
                  :to="subMenu.url"
                  class="hover:text-secondary inline-block font-ibm text-[13px] font-normal leading-5 text-grey transition hover:scale-110"
                  >{{ subMenu.name }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-10 border-t-2 border-line pt-5">
          <div class="flex flex-col items-center justify-between text-center font-ibm text-[13px] font-semibold tracking-[1px] text-black sm:flex-row">
            <div class="">
              <ul class="flex flex-col items-center gap-8 sm:flex-row">
                <li>COPYRIGHT © {{ new Date().getFullYear() }} <a href="javascript:" class="text-primary hover:text-secondary transition">AIRALO.</a></li>
                <li>PRIVACY POLICY</li>
                <li>TERMS & CONDITIONS</li>
              </ul>
            </div>
            <div>
              <ul class="flex flex-col items-center gap-4 sm:flex-row">
                <li>Follow US:</li>
                <li v-for="image in socialImage" :key="image?.id">
                  <a href="javascript:">
                    <img :src="image?.url" alt="plurk" class="h-7" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mb-10 pt-10">
          <div class="flex items-center justify-between text-center font-ibm text-[13px] font-semibold tracking-[1px] text-black">
            <div class="mx-auto">
              <ul class="flex flex-col items-center gap-8 sm:flex-row">
                <li v-for="payment in payments" :key="payment?.id">
                  <a href="javascript:">
                    <img :src="payment.url" alt="plurk" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    menus: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            title: 'Store',
            subMenus: [
              {
                name: 'Local eSIMs',
                url: '/',
              },
              {
                name: 'Regional eSIMs',
                url: '/',
              },
              {
                name: 'Global eSIM',
                url: '/',
              },
              {
                name: 'Why Airalo',
                url: '/',
              },
              {
                name: 'How Airalo Works',
                url: '/',
              },
            ],
          },
          {
            id: 2,
            title: 'My eSIMs',
            subMenus: [
              {
                name: 'My eSIMs',
                url: '/',
              },
            ],
          },
          {
            id: 1,
            title: 'Profile',
            subMenus: [
              {
                name: 'Account Information',
                url: '/',
              },
              {
                name: 'Identity Authentication',
                url: '/',
              },
              {
                name: 'Airmoney & Vouchers',
                url: '/',
              },
              {
                name: 'Saved Cards',
                url: '/',
              },
              {
                name: 'Refer & Earn',
                url: '/',
              },
            ],
          },
          {
            id: 3,
            title: 'More Info',
            subMenus: [
              {
                name: 'About Airalo',
                url: '/',
              },
              {
                name: 'Help Center',
                url: '/',
              },
              {
                name: 'Contact Us',
                url: '/',
              },
              {
                name: 'FAQ',
                url: '/',
              },
              {
                name: 'Customer Reviews',
                url: '/',
              },
              {
                name: 'Press Kit',
                url: '/',
              },
            ],
          },
          {
            id: 4,
            title: 'Partnerships',
            subMenus: [
              {
                name: 'Carriers',
                url: '/',
              },
              {
                name: 'Travel Partners',
                url: '/',
              },
              {
                name: 'Corporates',
                url: '/',
              },
              {
                name: 'Affiliates',
                url: '/',
              },
              {
                name: 'Other',
                url: '/',
              },
            ],
          },
        ];
      },
    },
    socialImage: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            url: '/assets/home/vk.svg',
          },
          {
            id: 2,
            url: '/assets/home/facebook.svg',
          },
          {
            id: 3,
            url: '/assets/home/instagram.svg',
          },
          {
            id: 4,
            url: '/assets/home/twitter.svg',
          },
          {
            id: 5,
            url: '/assets/home/linkedin.svg',
          },
        ];
      },
    },
    payments: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            url: '/assets/home/american_express.svg',
          },
          {
            id: 2,
            url: '/assets/home/master_card.svg',
          },
          {
            id: 3,
            url: '/assets/home/visa.svg',
          },
        ];
      },
    },
  });
</script>
