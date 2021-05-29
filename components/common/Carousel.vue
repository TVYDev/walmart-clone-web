<template>
  <Splide>
    <SplideSlide v-for="i in 10" :key="i">
      <h1 class="py-10">{{ i }}</h1>
    </SplideSlide>
  </Splide>
</template>
