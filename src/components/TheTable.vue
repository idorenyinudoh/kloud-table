<template>
  <div class="bg-white">
    <header
      class="py-3 px-5 flex justify-between border border-solid border-table-border items-center"
    >
      <p class="font-semibold text-base opacity-50">View All Users</p>
      <button
        class="px-4 py-1.5 bg-button-background text-white font-normal text-base rounded hover:brightness-90 transition-all duration-300 ease-linear"
        @click="showCreateModal"
      >
        Create New User
      </button>
    </header>
    <div class="pt-5 px-5 pb-9">
      <div
        class="mb-2.5 p-2.5 bg-table-nav-background rounded flex justify-between items-center"
      >
        <button
          class="p-2.5 border border-solid border-table-border bg-white ml-8 hover:brightness-95 transition-all duration-300 ease-linear"
        >
          <img src="~../assets/search-icon.svg" alt="search" />
        </button>
        <BasePagination
          :total="totalRows"
          :perPage="rowsPerPage"
          :page="currentPage"
          @change-rows-per-page="changeRowsPerPage"
          @change-page="changePage"
        />
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
                <p class="w-max m-auto">{{ row.index + 1 }}</p>
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
                  class="w-7 h-7 bg-[#F5FAFF] rounded flex justify-center items-center hover:brightness-95 transition-all duration-300 ease-linear"
                  @click="showEditModal(row)"
                >
                  <img src="~../assets/edit-icon.svg" alt="edit" />
                </button>
                <button
                  class="w-7 h-7 bg-[#FEF5F4] rounded flex justify-center items-center hover:brightness-95 transition-all duration-300 ease-linear"
                  @click="showDeleteModal(row)"
                >
                  <img src="~../assets/delete-icon.svg" alt="delete" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <BasePagination
        :total="totalRows"
        :perPage="rowsPerPage"
        :page="currentPage"
        @change-rows-per-page="changeRowsPerPage"
        @change-page="changePage"
        class="justify-end"
      />
    </div>
  </div>
  <UserModal
    v-if="modalIsVisible"
    :modalOptions="modalOptions"
    @close="closeModal"
    @create-user="createUser"
    @update-user="updateUser"
    @delete="deleteUser"
  />
  <SuccessModal
    v-if="successModalIsVisible"
    :type="successModalType"
    @close="toggleSuccessModal"
  />
  <DeleteModal
    v-if="deleteModalIsVisible"
    :row="rowToBeDeleted"
    @close="deleteModalIsVisible = false"
    @delete="deleteUser"
  />
</template>

<script>
import BasePagination from "./BasePagination.vue";
import UserModal from "./UserModal.vue";
import SuccessModal from "./SuccessModal.vue";
import DeleteModal from "./DeleteModal.vue";

export default {
  components: {
    BasePagination,
    UserModal,
    SuccessModal,
    DeleteModal,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rowsPerPage: 10,
      currentPage: 1,
      allRows: [],
      displayedRows: [],
      modalIsVisible: false,
      modalOptions: {},
      successModalIsVisible: false,
      successModalType: "",
      deleteModalIsVisible: false,
      rowToBeDeleted: {},
    };
  },
  computed: {
    totalRows() {
      return this.allRows.length;
    },
  },
  mounted() {
    this.data.rows.forEach((row) => {
      this.allRows.push(row);
    });
    this.assignIndices();
    this.setRowsToDisplay();
  },
  methods: {
    assignIndices() {
      this.allRows.forEach((row, index) => {
        row.index = index;
      });
    },
    setRowsToDisplay() {
      this.displayedRows = this.allRows.slice(
        (this.currentPage - 1) * this.rowsPerPage,
        this.currentPage * this.rowsPerPage
      );
    },
    showCreateModal() {
      this.modalIsVisible = true;
      this.modalOptions.type = "create";
    },
    showEditModal(row) {
      this.modalIsVisible = true;
      this.modalOptions = {
        type: "edit",
        index: row.index,
        firstName: row.name.split(" ")[0],
        lastName: row.name.split(" ")[1],
        email: row.email,
        phone: row["phone-number"],
      };
    },
    showDeleteModal(row) {
      this.deleteModalIsVisible = true;
      this.rowToBeDeleted = row;
    },
    closeModal() {
      this.modalIsVisible = false;
    },
    createUser(user) {
      this.allRows.push({
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        "phone-number": user.phone,
      });
      this.assignIndices();
      this.setRowsToDisplay();
      this.closeModal();
      this.successModalType = "create";
      this.toggleSuccessModal();
    },
    updateUser(user) {
      console.log(user);
      this.allRows.find((row, index) => {
        if (index === user.index) {
          row.name = `${user.firstName} ${user.lastName}`;
          row.email = user.email;
          row["phone-number"] = user.phone;
        }
      });
      this.setRowsToDisplay();
      this.closeModal();
      this.successModalType = "edit";
      this.toggleSuccessModal();
    },
    deleteUser(user) {
      if (this.displayedRows.length === 1) {
        this.displayedRows = [];
        if (this.allRows.length === 1) {
          this.allRows = [];
        } else {
          this.allRows.splice(user.index, 1);
        }
        this.currentPage -= 1;
        this.setRowsToDisplay();
        console.log(this.currentPage, this.displayedRows);
      } else {
        this.displayedRows.splice(user.index, 1);
        this.allRows.splice(user.index, 1);
      }
      this.assignIndices();
      this.setRowsToDisplay();
      this.deleteModalIsVisible = false;
      this.successModalType = "delete";
      this.toggleSuccessModal();
    },
    toggleSuccessModal() {
      this.successModalIsVisible = !this.successModalIsVisible;
    },
    changeRowsPerPage(rowsPerPage) {
      this.rowsPerPage = rowsPerPage;
      this.currentPage = 1;
      this.setRowsToDisplay();
    },
    changePage(page) {
      this.currentPage = page;
      this.setRowsToDisplay();
    },
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
