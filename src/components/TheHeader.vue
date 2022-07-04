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
        v-for="(text, index) in headerTexts"
        :key="index"
        :class="[
          'bg-white',
          'w-8',
          'transition-all',
          'duration-300',
          'ease-linear',
          {
            'opacity-30': index !== 0,
            'translate-x-0':
              activeHeaderTextIndex === 0 ||
              (index === 2 && activeHeaderTextIndex === 1),
            'translate-x-[48px]': index === 0 && activeHeaderTextIndex === 1,
            'translate-x-[96px]': index === 0 && activeHeaderTextIndex === 2,
            '-translate-x-[48px]':
              (index === 1 &&
                (activeHeaderTextIndex === 1 || activeHeaderTextIndex === 2)) ||
              (index === 2 && activeHeaderTextIndex === 2),
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
    }, 3000);
  },
};
</script>

<style scoped>
.fade-enter-active {
  animation: fade 300ms linear forwards;
}
.fade-leave-active {
  animation: fade 300ms linear forwards reverse;
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
