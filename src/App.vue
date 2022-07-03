<template>
  <TheHeader />
  <BaseLoader v-if="isLoading" />
  <TheTable v-else :data="tableData" />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheTable from "./components/TheTable.vue";
import BaseLoader from "./components/BaseLoader.vue";

export default {
  components: {
    TheHeader,
    TheTable,
    BaseLoader,
  },
  data() {
    return {
      isLoading: false,
      tableData: {
        headers: ["name", "email", "phone-number"],
        rows: [],
        actionsExist: true,
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      await response.json().then((data) => {
        data.forEach((row) => {
          this.tableData.rows.push({
            name: row.name,
            email: row.email,
            "phone-number": row.phone,
          });
        });
        this.isLoading = false;
      });
    },
  },
};
</script>
