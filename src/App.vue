<template>
  <TheHeader />
  <TheTable :data="tableData" />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheTable from "./components/TheTable.vue";

export default {
  components: {
    TheHeader,
    TheTable,
  },
  data() {
    return {
      tableData: {
        headers: ["name", "email", "phone-number"],
        rows: [
          {
            name: "Peter Lawanson",
            email: "oriade1@gmail.com",
            "phone-number": "+234 000 0000",
          },
          {
            name: "Peter Lawanson",
            email: "oriade1@gmail.com",
            "phone-number": "+234 000 0000",
          },
          {
            name: "Peter Lawanson",
            email: "oriade1@gmail.com",
            "phone-number": "+234 000 0000",
          },
          {
            name: "Peter Lawanson",
            email: "oriade1@gmail.com",
            "phone-number": "+234 000 0000",
          },
          {
            name: "Peter Lawanson",
            email: "oriade1@gmail.com",
            "phone-number": "+234 000 0000",
          },
          {
            name: "Peter Lawanson",
            email: "oriade1@gmail.com",
            "phone-number": "+234 000 0000",
          },
          {
            name: "Peter Lawanson",
            email: "oriade1@gmail.com",
            "phone-number": "+234 000 0000",
          },
          {
            name: "Peter Lawanson",
            email: "oriade1@gmail.com",
            "phone-number": "+234 000 0000",
          },
          {
            name: "Peter Lawanson",
            email: "oriade1@gmail.com",
            "phone-number": "+234 000 0000",
          },
          {
            name: "Peter Lawanson",
            email: "oriade1@gmail.com",
            "phone-number": "+234 000 0000",
          },
        ],
        actionsExist: true,
      },
    };
  },
};
</script>
