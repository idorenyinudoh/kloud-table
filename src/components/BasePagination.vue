<template>
  <div class="flex gap-x-2.5 items-center">
    <p class="text-xs font-normal text-light-text">
      <strong class="font-semibold text-heavy-text">
        {{ indexOfFirstRow }}
      </strong>
      -
      <strong class="font-semibold text-heavy-text">
        {{ indexOfLastRow }}
      </strong>
      of
      <strong class="font-semibold text-heavy-text">{{ total }}</strong>
      Entries
    </p>
    <div class="w-44 h-7 grid grid-cols-6">
      <button
        class="border border-solid border-table-border rounded-l flex justify-center items-center bg-white hover:brightness-95 transition-all duration-300 ease-linear"
      >
        <img src="~../assets/previous-icon.svg" alt="previous" />
      </button>
      <button
        class="font-roboto text-button-background border border-solid border-table-border text-xs font-normal bg-active-page-background hover:brightness-95 transition-all duration-300 ease-linear"
      >
        1
      </button>
      <button
        class="font-roboto text-page-foreground border border-solid border-table-border text-xs font-normal bg-white hover:brightness-95 transition-all duration-300 ease-linear"
      >
        5
      </button>
      <button
        class="font-roboto text-page-foreground border border-solid border-table-border text-[12px] leading-[2px] p-[9px] flex font-normal bg-white hover:brightness-95 transition-all duration-300 ease-linear"
      >
        ...
      </button>
      <button
        class="font-roboto text-page-foreground border border-solid border-table-border text-xs font-normal bg-white hover:brightness-95 transition-all duration-300 ease-linear"
      >
        10
      </button>
      <button
        class="border border-solid border-table-border rounded-r flex justify-center items-center bg-white hover:brightness-95 transition-all duration-300 ease-linear"
      >
        <img src="~../assets/next-icon.svg" alt="next" />
      </button>
    </div>
    <div
      class="h-7 border border-solid border-table-border px-2.5 bg-white rounded flex gap-x-1.5 items-center"
    >
      <p class="text-xs font-semibold">Rows:</p>
      <div class="relative flex">
        <select
          class="pr-4 text-xs font-normal text-light-text appearance-none outline-none"
          v-model.number="rowsPerPage"
          @change="changeRowsPerPage"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        <svg
          class="absolute top-[5px] right-0 pointer-events-none cursor-pointer"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1.25L5 4.75L8.5 1.25"
            stroke="#C3C8D2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
  emits: ["change-rows-per-page"],
  data() {
    return {
      rowsPerPage: this.perPage,
    };
  },
  computed: {
    indexOfFirstRow() {
      return (this.page - 1) * this.perPage + 1;
    },
    indexOfLastRow() {
      return Math.min(this.page * this.perPage, this.total);
    },
  },
  methods: {
    changeRowsPerPage() {
      this.$emit("change-rows-per-page", this.rowsPerPage);
    },
  },
};
</script>
