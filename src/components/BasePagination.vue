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
        @click="setPage(page - 1)"
      >
        <img src="~../assets/previous-icon.svg" alt="previous" />
      </button>
      <template v-for="(item, index) in totalPages" :key="index">
        <button
          v-if="shownPages.includes(item)"
          :class="[
            'font-roboto',
            item === page ? 'text-button-background' : 'text-page-foreground',
            item === page ? 'bg-active-page-background' : 'bg-white',
            'border',
            'border-solid',
            'border-table-border',
            'text-xs',
            'font-normal',
            'hover:brightness-95',
            'transition-all',
            'duration-300',
            'ease-linear',
          ]"
          @click="setPage(item)"
        >
          {{ item }}
        </button>
      </template>
      <button
        v-if="page !== totalPages && totalPages > 3"
        class="font-roboto text-page-foreground border border-solid border-table-border text-[12px] leading-[2px] p-[9px] flex font-normal bg-white hover:brightness-95 transition-all duration-300 ease-linear"
      >
        ...
      </button>
      <button
        v-if="page !== totalPages && totalPages !== page + 1"
        class="font-roboto text-page-foreground border border-solid border-table-border text-xs font-normal bg-white hover:brightness-95 transition-all duration-300 ease-linear"
        @click="setPage(totalPages)"
      >
        {{ totalPages }}
      </button>
      <button
        class="border border-solid border-table-border rounded-r flex justify-center items-center bg-white hover:brightness-95 transition-all duration-300 ease-linear"
        @click="setPage(page + 1)"
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
          <option value="5">5</option>
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
  emits: ["change-rows-per-page", "change-page"],
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
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    shownPages() {
      if (this.page === 1 || this.totalPages <= 2) {
        return [1, 2];
      } else {
        return [this.totalPages - 1, this.totalPages];
      }
    },
  },
  methods: {
    changeRowsPerPage() {
      this.$emit("change-rows-per-page", this.rowsPerPage);
    },
    setPage(page) {
      if (page < 1 || page > this.totalPages) {
        return;
      }
      this.$emit("change-page", page);
    },
  },
};
</script>
