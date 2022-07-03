<template>
  <header class="bg-purple px-14 pt-14 pb-12 mb-5 relative">
    <div class="absolute bottom-7 -top-10 px-4 py-5 bg-white h-max">
      <img src="~../assets/logo.png" alt="logo" />
    </div>
    <h1 class="text-center text-5xl text-heading-color mb-6 font-semibold">
      KLOUD COMMERCE CHALLENGE
    </h1>
    <p
      class="font-normal h-8 w-full text-2xl text-white opacity-70 text-center mb-6 relative flex justify-center items-center"
    >
      <transition name="fade">
        <span v-if="activeHeaderTextIndex === 0" class="absolute">
          {{ headerTexts[0] }}
        </span>
        <span v-else-if="activeHeaderTextIndex === 1" class="absolute">
          {{ headerTexts[1] }}
        </span>
        <span v-else-if="activeHeaderTextIndex === 2" class="absolute">
          {{ headerTexts[2] }}
        </span>
      </transition>
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

<style scoped>
.fade-enter-active {
  animation: fade 0.5s linear forwards;
}
.fade-leave-active {
  animation: fade 0.5s linear forwards reverse;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
