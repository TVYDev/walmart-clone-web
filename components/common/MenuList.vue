<template>
  <ul>
    <li
      v-for="(item, index) in menu"
      :key="index"
      class="
        text-sm
        py-3
        flex flex-row
        items-center
        justify-between
        cursor-pointer
      "
    >
      <NuxtLink :to="item.to || ''" class="flex flex-row items-center">
        <i :class="[item.iconClass]" class="w-6 mr-3 text-center" />
        <span :class="{ 'hover:underline': item.to }">{{ item.text }}</span>
      </NuxtLink>
      <i
        v-if="item.subMenus && item.subMenus.length"
        class="fas fa-angle-right"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
