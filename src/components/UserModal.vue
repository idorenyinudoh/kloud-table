<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-[#00000080] flex justify-center items-center"
    @click.self="$emit('close')"
  >
    <div class="w-4/5 max-w-[956px] bg-white">
      <header
        class="px-8 py-4 border border-solid border-table-border flex justify-between"
      >
        <p class="text-base font-semibold text-heavy-text">
          <span v-if="modalOptions.type === 'create'">
            Create New User(s)
          </span>
          <span v-else>
            Edit User - {{ modalOptions.firstName }} {{ modalOptions.lastName }}
          </span>
        </p>
        <button @click="$emit('close')">
          <img src="~../assets/close-icon.svg" alt="close" />
        </button>
      </header>
      <form class="pt-20 px-32 pb-14" @submit.prevent="handleFormSubmission">
        <div
          class="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5 mb-28"
        >
          <div>
            <label
              for="first-name"
              class="block w-max mb-1.5 text-xs font-normal text-light-text"
            >
              FIRST NAME *
            </label>
            <input
              type="text"
              id="first-name"
              v-model="firstName"
              class="w-full border border-solid border-[#C2C9D1] rounded px-2.5 py-2 outline-none text-sm text-[#061A48] focus:border-black transition-all duration-200 ease-linear"
              placeholder="Enter first name"
              required
            />
          </div>
          <div>
            <label
              for="last-name"
              class="block w-max mb-1.5 text-xs font-normal text-light-text"
            >
              LAST NAME
            </label>
            <input
              type="text"
              id="last-name"
              v-model="lastName"
              class="w-full border border-solid border-[#C2C9D1] rounded px-2.5 py-2 outline-none text-sm text-[#061A48] focus:border-black transition-all duration-200 ease-linear"
              placeholder="Enter last name"
            />
          </div>
          <div>
            <label
              for="email"
              class="block w-max mb-1.5 text-xs font-normal text-light-text"
            >
              EMAIl *
            </label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full border border-solid border-[#C2C9D1] rounded px-2.5 py-2 outline-none text-sm text-[#061A48] focus:border-black transition-all duration-200 ease-linear"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block w-max mb-1.5 text-xs font-normal text-light-text"
            >
              PHONE NUMBER *
            </label>
            <input
              type="text"
              id="phone"
              v-model="phone"
              class="w-full border border-solid border-[#C2C9D1] rounded px-2.5 py-2 outline-none text-sm text-[#061A48] focus:border-black transition-all duration-200 ease-linear"
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>
        <button
          v-if="modalOptions.type === 'create'"
          :disabled="disabled"
          class="blue-button block ml-auto mr-0 px-10 py-2 bg-button-background border border-solid border-button-background rounded text-white text-base font-semibold"
        >
          Create User
        </button>
        <div v-else class="flex gap-x-2.5 justify-end">
          <button
            type="button"
            class="px-4 py-1.5 border border-solid border-red text-red text-base font-normal rounded hover:border-transparent transition duration-300 ease-linear"
            @click="deleteModalIsVisible = true"
          >
            Delete User
          </button>
          <button
            class="blue-button px-10 py-2 bg-button-background border border-solid border-button-background rounded text-white text-base font-semibold"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
  <DeleteModal
    v-if="deleteModalIsVisible"
    :row="row"
    @close="deleteModalIsVisible = false"
    @delete="handleUserDeletion"
  />
</template>

<script>
import DeleteModal from "./DeleteModal.vue";

export default {
  components: {
    DeleteModal,
  },
  props: {
    modalOptions: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      deleteModalIsVisible: false,
    };
  },
  computed: {
    disabled() {
      return this.firstName === "" || this.email === "" || this.phone === "";
    },
    row() {
      return {
        index: this.modalOptions.index,
        firstName: this.modalOptions.firstName,
        lastName: this.modalOptions.lastName,
        email: this.modalOptions.email,
        phone: this.modalOptions.phone,
      };
    },
  },
  mounted() {
    if (this.modalOptions.type === "edit") {
      this.firstName = this.modalOptions.firstName;
      this.lastName = this.modalOptions.lastName;
      this.email = this.modalOptions.email;
      this.phone = this.modalOptions.phone;
    }
  },
  methods: {
    handleFormSubmission() {
      if (this.modalOptions.type === "create") {
        this.$emit("create-user", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
        });
      } else {
        this.$emit("update-user", {
          index: this.modalOptions.index,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
        });
      }
    },
    handleUserDeletion() {
      this.deleteModalIsVisible = false;
      this.$emit("close");
      this.$emit("delete", this.row);
    },
  },
};
</script>

<style scoped>
.blue-button {
  transition: all 300ms linear;
}
.blue-button:hover:not(:disabled) {
  filter: brightness(0.9);
}
.blue-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
