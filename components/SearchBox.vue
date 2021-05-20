<template>
  <CommonDropdownCard>
    <template #default="{ dropdownToggler }">
      <div class="flex flex-row items-center rounded-full overflow-hidden">
        <button
          class="hidden lg:block bg-white text-black px-5 py-1"
          @click="dropdownToggler"
        >
          <span class="text-xs whitespace-nowrap">
            <span v-if="selectedCategory.value" class="mr-2">
              {{ selectedCategory.text }}
            </span>
            <i class="fas fa-caret-down text-xs" />
          </span>
        </button>
        <!-- TODO: Find solution to set button with utility class when input is focused -->
        <input
          type="text"
          class="
            px-3
            py-2
            lg:pl-0
            md:pr-3
            flex-grow
            w-full
            text-xs
            outline-none
          "
          placeholder="Search Walmart.com"
        />
        <button class="bg-accent px-3 py-1">
          <i class="fas fa-search text-primary text-sm" />
        </button>
      </div>
    </template>
    <template #content="{ dropdownToggler }">
      <div class="px-2 my-3">
        <h2 class="text-sm font-bold mb-3">Search in ...</h2>
        <ul class="grid grid-flow-col grid-rows-9 gap-3 text-xs">
          <li
            v-for="category in categories"
            :key="category.value"
            class="hover:underline text-gray-500 cursor-pointer"
            @click="selectCategory(category, dropdownToggler)"
          >
            {{ category.text }}
          </li>
        </ul>
      </div>
    </template>
  </CommonDropdownCard>
</template>

<script lang="ts">
import Vue from 'vue';

interface Category {
  text: String;
  value: Number;
}

export default Vue.extend({
  data() {
    return {
      selectedCategory: {} as Category,
      // TODO: Replace with data of categories from server
      categories: [
        {
          text: 'All Departments',
          value: -1,
        },
        {
          text: 'Auto & Tire',
          value: 2,
        },
        {
          text: 'Baby',
          value: 3,
        },
        {
          text: 'Beauty',
          value: 4,
        },
        {
          text: 'Books',
          value: 5,
        },
        {
          text: 'Cell Phones',
          value: 6,
        },
        {
          text: 'Clothing',
          value: 7,
        },
        {
          text: 'Electronics',
          value: 8,
        },
        {
          text: 'Food',
          value: 9,
        },
        {
          text: 'Gifts & Registry',
          value: 10,
        },
        {
          text: 'Health',
          value: 11,
        },
        {
          text: 'Home',
          value: 12,
        },
        {
          text: 'Home Improvement',
          value: 13,
        },
        {
          text: 'Household Essentials',
          value: 14,
        },
        {
          text: 'Jewelry',
          value: 15,
        },
        {
          text: 'Movies',
          value: 16,
        },
        {
          text: 'Music',
          value: 17,
        },
        {
          text: 'Office',
          value: 18,
        },
        {
          text: 'Party & Occasions',
          value: 19,
        },
        {
          text: 'Patio & Garden',
          value: 20,
        },
        {
          text: 'Pets',
          value: 21,
        },
        {
          text: 'Pharmacy',
          value: 22,
        },
        {
          text: 'Photo Center',
          value: 23,
        },
        {
          text: 'Sports & Outdoors',
          value: 24,
        },
        {
          text: 'Toys',
          value: 25,
        },
        {
          text: 'Video Games',
          value: 26,
        },
      ],
    };
  },
  methods: {
    selectCategory(category: Category, dropdownCardToggler: Function) {
      this.selectedCategory =
        category.value !== -1 ? category : ({} as Category);

      dropdownCardToggler();
    },
  },
});
</script>
