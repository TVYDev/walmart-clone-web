<template>
  <div>
    <CommonBanner>
      <div class="flex flex-row items-center justify-center">
        <img
          src="~/assets/images/walmart-plus.svg"
          alt=""
          class="h-7 md:h-11 mr-3"
        />
        <div class="text-xs md:text-sm text-white">
          <div class="md:hidden mb-2">
            W+ no order minimum shipping. <br />
            Restrictions apply.
          </div>
          <div class="hidden md:block">
            Free shipping with no order minimum required. Restrictions apply.
          </div>
          <NuxtLink to="#" class="underline">Try it free</NuxtLink>
        </div>
      </div>
    </CommonBanner>
    <Logo />
    <Logo />
    <Logo />
    <Logo />
    <Logo />
  </div>
</template>
