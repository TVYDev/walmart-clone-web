<template>
  <div class="flex flex-row items-center rounded-full overflow-hidden">
    <button class="hidden md:block bg-white text-black px-5 py-1">
      <i class="fas fa-caret-down text-xs" />
    </button>
    <!-- TODO: Find solution to set button with utility class when input is focused -->
    <input
      type="text"
      class="px-3 py-2 md:pl-0 md:pr-3 flex-grow w-full text-xs outline-none"
      placeholder="Search Walmart.com"
    />
    <button class="bg-accent px-3 py-1">
      <i class="fas fa-search text-primary text-sm" />
    </button>
  </div>
</template>
