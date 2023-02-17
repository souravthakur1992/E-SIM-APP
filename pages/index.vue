<template>
  <div class="overflow-y-hidden bg-background">
    <!-- Hero Section -->
    <Hero :activeTab="activeTab" :onTabChange="onTabChange" />
    <!-- Countries Filter  -->
    <Countries
      :loadingCountry="loadingCountry"
      :onToggle="onToggle"
      :isOpen="isOpen"
      :loadMore="loadMore"
      :onTabChange="onTabChange"
      :activeTab="activeTab"
      :onUpdate="onUpdate"
      :onLoadMore="onLoadMore"
      :countryDetail="countryDetail"
      :countries="countries"
    />
    <!-- Social Block -->
    <Social />
    <!-- Referral Block -->
    <Referral />
    <!-- Feedback block -->
    <Feedback />
  </div>
</template>
<script setup>
  // Component Import
  import Countries from '@/components/Countries.vue';
  import Feedback from '@/components/Feedback.vue';
  import Hero from '@/components/Hero.vue';
  import Referral from '@/components/Referral.vue';
  import Social from '@/components/Social.vue';
  // backend API
  let apiEndpoint = 'https://www.airalo.com/api/v2';
  const loadMore = ref('popular');
  const activeTab = ref('Local');
  const countries = ref([]);
  const collapseState = ref('');
  const isOpen = ref('');
  const loadingCountry = ref(false);
  const countryDetail = ref([]);
  const countryId = ref('');
  const loadingCountryDetail = ref(false);

  // Api Action on tab Change
  const fetchLocalTab = async () => {
    loadingCountry.value = true;
    let url = '';
    // Url change on tab change
    switch (activeTab.value) {
      case 'Local':
        url = `${apiEndpoint}/countries?type=${loadMore.value}`;
        break;
      case 'Global':
        url = `${apiEndpoint}/regions/world`;
        break;
      default:
        url = `${apiEndpoint}/regions`;
    }
    // api call
    const { pending, data } = await useLazyFetch(url, {
      server: loadMore.value == 'popular' ? true : false,
      initialCache: false,
    });
    //set data
    countries.value = data?._rawValue;
    loadingCountry.value = pending?._rawValue;
  };

  // Api Action on for specific country sim
  const fetchCountry = async () => {
    loadingCountryDetail.value = true;
    let url = '';
    // Url change on tab change
    switch (activeTab.value) {
      case 'Local':
        url = `${apiEndpoint}/countries/${countryId.value}`;
        break;
      case 'Global':
        url = `${apiEndpoint}/regions/world`;
        break;
      default:
        url = `${apiEndpoint}/regions/${countryId.value}`;
    }
    if (countryId.value != '') {
      // api call
      const { pending, data } = await useFetch(url, {
        server: false,
        initialCache: false,
      });
      //set data
      countryDetail.value = data?._rawValue;
      loadingCountryDetail.value = pending?._rawValue;
    } else {
      //set data
      countryDetail.value = [];
      loadingCountryDetail.value = false;
    }
  };

  // Action on for Accordian click
  const onToggle = (value) => {
    if (isOpen.value == value) {
      countryId.value = '';
      isOpen.value = '';
      countryDetail.value = [];
    } else {
      countryDetail.value = [];
      countryId.value = value;
      isOpen.value = value;
      fetchCountry();
    }
  };

  // Action on for Load more button
  const onLoadMore = (value) => {
    loadMore.value = value;
  };

  // Action on tab change
  const onTabChange = (value) => {
    countryId.value = '';
    countryDetail.value = [];
    countries.value = [];
    activeTab.value = value;
    isOpen.value = '';
    fetchLocalTab();
  };

  watch(loadMore, fetchLocalTab, { immediate: true });
</script>
