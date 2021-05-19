<template>
  <nav class="flex flex-row items-center justify-between py-3 px-5 bg-primary">
    <div class="flex flex-row items-center">
      <i class="fas fa-bars text-white cursor-pointer" />
      <NuxtLink to="#" class="mx-3">
        <img class="w-7 md:hidden" src="~/assets/images/walmart-icon.svg" />
        <img
          class="w-28 hidden md:inline-block"
          src="~/assets/images/walmart.svg"
        />
      </NuxtLink>
    </div>
    <div class="flex-grow border-2 mx-3 text-white sm:flex-grow-0 sm:w-1/2">
      Search Box
    </div>
    <div class="flex flex-row">
      <div class="hidden md:flex flex-row text-white items-center mx-3">
        <i class="far fa-user" />
        <div class="ml-2 text-xs font-semibold">Account</div>
      </div>
      <div class="hidden md:flex flex-row text-white items-center mx-3">
        <i class="far fa-heart" />
        <div class="ml-2 text-xs font-semibold whitespace-nowrap">My Items</div>
      </div>
      <i class="fas fa-shopping-cart text-white cursor-pointer" />
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
