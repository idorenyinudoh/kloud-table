<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-[#00000080] flex justify-center items-center"
    @click.self="$emit('close')"
  >
    <div class="w-2/4 max-w-[544px] pb-32 bg-white">
      <button class="block mr-7 ml-auto mt-7 mb-16" @click="$emit('close')">
        <img src="~../assets/close-icon.svg" alt="close" />
      </button>
      <img
        class="block mx-auto mb-8"
        src="~../assets/success-icon.svg"
        alt="close"
      />
      <p class="w-max mx-auto mb-2.5 text-xl font-semibold text-heavy-text">
        Successful
      </p>
      <p
        class="w-max-[346px] w-max mx-auto mb-7 text-base font-normal text-light-text text-center"
      >
        <span v-if="type === 'create'"
          >You have successfully created a new user</span
        >
        <span v-else-if="type === 'edit'">
          You have successfully updated the user <br />
          details
        </span>
        <span v-else>You have successfully deleted this user</span>
      </p>
      <button
        v-if="type === 'create' || type === 'edit'"
        class="block w-[346px] mx-auto p-3 bg-[#F5FAFF] text-sm font-medium font-roboto text-button-background rounded"
        @click="$emit('close')"
      >
        View Details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>
