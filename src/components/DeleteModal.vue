<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-[#00000080] flex justify-center items-center"
    @click.self="$emit('close')"
  >
    <div class="w-2/4 max-w-[544px] bg-white">
      <button class="block mr-7 ml-auto mt-7 mb-10" @click="$emit('close')">
        <img src="~../assets/close-icon.svg" alt="close" />
      </button>
      <p
        class="w-[242px] mx-auto mb-8 text-xl font-semibold text-heavy-text text-center"
      >
        Are you sure you want to <br />
        Disable User?
      </p>
      <div class="w-[242px] mx-auto mb-14 grid grid-cols-2 gap-x-2">
        <button
          class="p-2 bg-button-background rounded text-base text-white font-normal hover:brightness-90 transition-all duration-300 ease-linear"
          @click="$emit('delete', row)"
        >
          Yes
        </button>
        <button
          class="p-2 rounded text-base text-light-text font-normal"
          @click="$emit('close')"
        >
          No, Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      required: true,
    },
  },
  emits: ["close", "delete"],
};
</script>
