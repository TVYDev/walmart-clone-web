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
    <div class="flex flex-row text-white">
      <CommonIconText text="Account" class="hidden md:flex font-semibold mx-3">
        <i class="far fa-user" />
      </CommonIconText>
      <CommonIconText text="My Items" class="hidden md:flex font-semibold mx-3">
        <i class="far fa-heart" />
      </CommonIconText>
      <i class="fas fa-shopping-cart cursor-pointer" />
    </div>
  </nav>
</template>
