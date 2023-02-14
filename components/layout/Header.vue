<template>
  <header class="sticky top-10 z-50 bg-black/10 transition duration-300">
    <div class="container">
      <div class="flex items-center justify-between py-5 sm:py-0" :class="{ 'sticky-header': showTopButton }">
        <NuxtLink to="/"><img src="/Logo.png" alt="logo" class="h-7" /></NuxtLink>
        <div class="flex items-center">
          <ul class="flex items-center gap-5">
            <li class="flex items-center pr-2 font-ibm text-base font-medium text-white">
              <span class="pr-2"> <img src="/assets/home/log-in.png" alt="logo" /> </span>
              Log in / Sign up
            </li>
            <li class="first-letter: text-[26px] font-thin leading-[0] text-white"><span>|</span></li>
            <li class="flex items-center pr-2 font-ibm text-base font-medium text-white">
              <span class="pr-2"> <img src="/assets/home/earth.png" alt="logo" /> </span>
              English
              <div class="ml-1">
                <img src="/assets/home/arrow-down.svg" alt="logo" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import { onMounted, ref } from 'vue';

  const showTopButton = ref(false);
  onMounted(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        showTopButton.value = true;
      } else {
        showTopButton.value = false;
      }
    };

    store.toggleMainLoader(false);
  });
</script>
