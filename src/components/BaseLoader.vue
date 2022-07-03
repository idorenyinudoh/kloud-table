<template>
  <div
    class="w-12 h-12 mx-auto my-12 border border-solid border-t-transparent border-x-button-background border-b-button-background rounded-full"
  />
</template>

<style scoped>
div {
  animation: spin 1.5s infinite linear;
}
@keyframes spin {
  100% {
    transform: rotate(1turn);
  }
}
</style>
