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
    <Hero :items="heros" />
    <Logo />
    <Logo />
    <Logo />
    <Logo />
    <Logo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      heros: [
        {
          id: 1,
          image:
            'https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg',
          link: '#',
        },
        {
          id: 2,
          image:
            'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg',
          link: '#',
        },
        {
          id: 3,
          image:
            'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg',
          link: '#',
        },
      ],
    };
  },
});
</script>
