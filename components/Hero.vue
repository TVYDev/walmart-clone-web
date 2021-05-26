<template>
  <section class="h-104 text-center">
    <div
      class="
        flex
        overflow-x-scroll
        h-full
        scroll-snap-x-mandatory
        scrollbar-none
      "
    >
      <div
        v-for="i in 10"
        :id="'#' + i"
        :key="i"
        class="border-2 border-red-400 flex-100 scroll-snap-align-start"
      >
        <h1>{{ i }}</h1>
      </div>
    </div>
    <span
      class="
        relative
        -top-10
        bg-black
        text-white
        bg-opacity-50
        px-6
        py-1
        rounded-full
        z-0
      "
    >
      <i class="mx-1 align-middle relative -top-0.5 text-xs fas fa-play" />
      <i
        v-for="item in items"
        :key="item.id"
        class="mx-1 align-middle relative -top-0.5 fas fa-circle cursor-pointer"
        :class="[selectedItem.id === item.id ? 'text-3xs' : 'text-4xs']"
        @click="selectedItem = item"
      />
    </span>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedItem: {} as any,
    };
  },
  mounted() {
    if (this.items.length) {
      this.selectedItem = this.items[0];
    }
  },
});
</script>
