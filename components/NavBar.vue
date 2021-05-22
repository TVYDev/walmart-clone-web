<template>
  <nav
    class="flex flex-row items-center justify-between py-3.5 px-5 bg-primary"
  >
    <div class="flex flex-row items-center">
      <i
        class="fas fa-bars text-white cursor-pointer hover:text-accent"
        @click="openSideBar"
      />
      <NuxtLink to="#" class="mx-3">
        <img
          class="w-7 md:hidden navbar__brand-icon"
          src="~/assets/images/walmart-icon.svg"
        />
        <img
          class="w-28 ml-3 hidden md:inline-block navbar__brand-icon-full"
          src="~/assets/images/walmart.svg"
        />
      </NuxtLink>
    </div>
    <div class="flex-grow mx-2 sm:flex-grow-0 sm:w-1/2">
      <SearchBox />
    </div>
    <div class="flex flex-row text-white">
      <CommonIconText text="Account" class="hidden md:flex font-semibold mx-3">
        <i class="far fa-user" />
      </CommonIconText>
      <CommonIconText text="My Items" class="hidden md:flex font-semibold mx-3">
        <i class="far fa-heart" />
      </CommonIconText>
      <CommonBadge text="0">
        <i class="fas fa-shopping-cart cursor-pointer" />
      </CommonBadge>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
  methods: {
    ...mapMutations({
      openSideBar: 'ui/openSideBar',
    }),
  },
});
</script>
