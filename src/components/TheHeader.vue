<template>
  <header class="bg-purple px-14 pt-14 pb-12 mb-5 relative">
    <div class="absolute bottom-7 -top-10 px-4 py-5 bg-white h-max">
      <img src="~../assets/logo.png" alt="logo" />
    </div>
    <h1 class="text-center text-5xl text-heading-color mb-6 font-semibold">
      KLOUD COMMERCE CHALLENGE
    </h1>
    <p class="font-normal text-2xl text-white opacity-70 text-center mb-6">
      {{ headerTexts[activeHeaderTextIndex] }}
    </p>
    <div class="flex gap-4 h-1.5 w-32 m-auto">
      <div
        :class="[
          'bg-white',
          'w-8',
          {
            'order-1': activeHeaderTextIndex === 0,
            'order-2': activeHeaderTextIndex === 1,
            'order-3': activeHeaderTextIndex === 2,
          },
        ]"
      ></div>
      <div
        :class="[
          'bg-white',
          'w-8',
          'opacity-30',
          {
            'order-1': activeHeaderTextIndex === 1,
            'order-2': activeHeaderTextIndex === 2,
            'order-3': activeHeaderTextIndex === 0,
          },
        ]"
      ></div>
      <div
        :class="[
          'bg-white',
          'w-8',
          'opacity-30',
          {
            'order-1': activeHeaderTextIndex === 2,
            'order-2': activeHeaderTextIndex === 1,
            'order-3': activeHeaderTextIndex === 0,
          },
        ]"
      ></div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerTexts: ["Have fun", "Create", "Explore"],
      activeHeaderTextIndex: 0,
    };
  },
  mounted() {
    setInterval(() => {
      if (this.activeHeaderTextIndex < this.headerTexts.length - 1) {
        this.activeHeaderTextIndex++;
      } else {
        this.activeHeaderTextIndex = 0;
      }
    }, 2000);
  },
};
</script>
