<template>
  <div>
    <header>
      <CommonTabs :tabs="navTabs" class="bg-primary text-white" />
      <NavBar />
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      navTabs: [
        {
          text: 'Pickup & delivery',
          active: false,
        },
        {
          text: 'Walmart.com',
          active: true,
        },
      ],
    };
  },
});
</script>
