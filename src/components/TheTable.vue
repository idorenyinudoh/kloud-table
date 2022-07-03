<template>
  <div class="bg-white">
    <header
      class="py-3 px-5 flex justify-between border border-solid border-table-border items-center"
    >
      <p class="font-semibold text-base opacity-50">View All Users</p>
      <button
        class="px-4 py-1.5 bg-button-background text-white font-normal text-base rounded"
      >
        Create New User
      </button>
    </header>
    <div class="pt-5 px-5 pb-9">
      <div
        class="mb-2.5 p-2.5 bg-table-nav-background rounded flex justify-between items-center"
      >
        <button
          class="p-2.5 border border-solid border-table-border bg-white ml-8"
        >
          <img src="~../assets/search-icon.svg" alt="search" />
        </button>
        <div class="flex gap-x-2.5 items-center">
          <p class="text-xs font-normal text-light-text">
            <strong class="font-semibold text-heavy-text">1</strong>
            -
            <strong class="font-semibold text-heavy-text">50</strong>
            of
            <strong class="font-semibold text-heavy-text">2000</strong>
            Entries
          </p>
          <div class="w-44 h-7 grid grid-cols-6">
            <button
              class="border border-solid border-table-border rounded-l flex justify-center items-center bg-white"
            >
              <img src="~../assets/previous-icon.svg" alt="previous" />
            </button>
            <button
              class="font-roboto text-button-background border border-solid border-table-border text-xs font-normal bg-active-page-background"
            >
              1
            </button>
            <button
              class="font-roboto text-page-foreground border border-solid border-table-border text-xs font-normal bg-white"
            >
              5
            </button>
            <button
              class="font-roboto text-page-foreground border border-solid border-table-border text-[12px] leading-[2px] p-[9px] flex font-normal bg-white"
            >
              ...
            </button>
            <button
              class="font-roboto text-page-foreground border border-solid border-table-border text-xs font-normal bg-white"
            >
              10
            </button>
            <button
              class="border border-solid border-table-border rounded-r flex justify-center items-center bg-white"
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
              >
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
      </div>
      <div class="overflow-auto">
        <table class="w-full mb-6">
          <thead>
            <tr
              class="h-10 border border-solid border-table-border bg-table-header-background"
            >
              <th class="text-xs font-semibold text-heavy-text p-0">S/N</th>
              <th
                v-for="(header, index) in data.headers"
                :key="index"
                class="text-xs font-semibold text-heavy-text p-0 uppercase"
              >
                {{ header.split("-").join(" ") }}
              </th>
              <th
                v-if="data.actionsExist"
                class="text-xs font-semibold text-heavy-text p-0"
              >
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, index) in displayedRows"
              :key="index"
              class="h-[60px] border border-solid border-table-border"
            >
              <td class="p-3.5 text-sm text-light-text font-roboto">
                <p class="w-max m-auto">{{ index + 1 }}</p>
              </td>
              <td
                v-for="(header, headerIndex) in data.headers"
                :key="headerIndex"
                :class="[header, 'p-3.5']"
              >
                <p
                  v-if="header === 'name'"
                  class="w-7 h-7 flex justify-center items-center text-xs text-white font-semibold bg-initial-background rounded-full"
                >
                  {{ row[header].split(" ")[0][0]
                  }}{{ row[header].split(" ")[1][0] }}
                </p>
                <p class="text-light-text">
                  {{ row[header] }}
                </p>
              </td>
              <td
                v-if="data.actionsExist"
                class="w-max m-auto p-3.5 flex gap-x-2"
              >
                <button
                  class="w-7 h-7 bg-[#F5FAFF] rounded flex justify-center items-center"
                >
                  <img src="~../assets/edit-icon.svg" alt="edit" />
                </button>
                <button
                  class="w-7 h-7 bg-[#FEF5F4] rounded flex justify-center items-center"
                >
                  <img src="~../assets/delete-icon.svg" alt="delete" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex gap-x-2.5 items-center justify-end">
        <p class="text-xs font-normal text-light-text">
          <strong class="font-semibold text-heavy-text">1</strong>
          -
          <strong class="font-semibold text-heavy-text">50</strong>
          of
          <strong class="font-semibold text-heavy-text">2000</strong>
          Entries
        </p>
        <div class="w-44 h-7 grid grid-cols-6">
          <button
            class="border border-solid border-table-border rounded-l flex justify-center items-center bg-white"
          >
            <img src="~../assets/previous-icon.svg" alt="previous" />
          </button>
          <button
            class="font-roboto text-button-background border border-solid border-table-border text-xs font-normal bg-active-page-background"
          >
            1
          </button>
          <button
            class="font-roboto text-page-foreground border border-solid border-table-border text-xs font-normal bg-white"
          >
            5
          </button>
          <button
            class="font-roboto text-page-foreground border border-solid border-table-border text-[12px] leading-[2px] p-[9px] flex font-normal bg-white"
          >
            ...
          </button>
          <button
            class="font-roboto text-page-foreground border border-solid border-table-border text-xs font-normal bg-white"
          >
            10
          </button>
          <button
            class="border border-solid border-table-border rounded-r flex justify-center items-center bg-white"
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
            >
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      displayedRows: [],
    };
  },
  mounted() {
    this.displayedRows = this.data.rows.slice(0, 50);
  },
};
</script>

<style scoped>
.name {
  width: max-content;
  margin: auto;
  display: flex;
  column-gap: 14px;
  align-items: center;
}
.name p:last-of-type {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #0d3693;
}
.email p,
.phone-number p {
  width: max-content;
  margin: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
</style>
