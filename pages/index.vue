<template>
  <div class="overflow-y-hidden bg-background">
    <Hero :activeTab="activeTab" :onTabChange="onTabChange" />
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
    <Social />
    <Referral />
    <Feedback />
  </div>
</template>
<script setup>
  import Countries from '@/components/Countries.vue';
  import Feedback from '@/components/Feedback.vue';
  import Hero from '@/components/Hero.vue';
  import Referral from '@/components/Referral.vue';
  import Social from '@/components/Social.vue';
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
  const fetchLocalTab = async () => {
    loadingCountry.value = true;
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
    const { pending, refresh, error, data } = await useLazyFetch(url, {
      server: loadMore.value == 'popular' ? true : false,
      initialCache: false,
    });
    countries.value = data?._rawValue;
    loadingCountry.value = pending?._rawValue;
  };

  const fetchCountry = async () => {
    loadingCountryDetail.value = true;
    let url = '';
    switch (activeTab.value) {
      case 'Local':
        url = `${apiEndpoint}/countries/${countryId.value}`;
        break;
      case 'Global':
        url = `${apiEndpoint}/regions/5`;
        break;
      default:
        url = `${apiEndpoint}/regions/${countryId.value}`;
    }
    if (countryId.value != '') {
      const { pending, refresh, error, data } = await useLazyFetch(url, {
        server: false,
        initialCache: false,
      });
      countryDetail.value = data?._rawValue;
      loadingCountryDetail.value = pending?._rawValue;
    } else {
      countryDetail.value = [];
      loadingCountryDetail.value = false;
    }
  };

  const onToggle = (value) => {
    if (isOpen.value == value) {
      countryId.value = '';
      isOpen.value = '';
      countryDetail.value = [];
    } else {
      countryId.value = value;
      isOpen.value = value;
      fetchCountry();
    }
  };
  const onUpdate = (value) => {
    collapseState.value = value;
  };
  const onTabChange = (value) => {
    countryId.value = '';
    activeTab.value = value;
    fetchLocalTab();
  };

  watch(loadMore, fetchLocalTab, { immediate: true });
</script>
