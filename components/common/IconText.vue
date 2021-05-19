<template>
  <div class="flex flex-row items-center cursor-pointer">
    <slot>
      <i class="far fa-user" />
    </slot>
    <div class="ml-2 text-xs whitespace-nowrap">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
