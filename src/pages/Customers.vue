<!-- pages/ProductPage.vue -->
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { customerService } from "../services/customerService";
import Table from "../components/Table.vue";

const customers = ref<any[]>([]);

const columns = [
  { field: "id", header: "No", sortable: true },
  { field: "name", header: "Name", sortable: true },
  { field: "totalSpent", header: "Total Spent", sortable: true },
  { field: "firstRentedDate", header: "First Rented Date", sortable: true },
  { field: "rentedTimes", header: "Rented Times", sortable: true },
];

onMounted(async () => {
  try {
    customers.value = await customerService.getCustomerList();
    console.log("Customers loaded:", customers.value);
  } catch (error) {
    console.error("Error loading customers:", error);
  }
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Customers</h1>
    <Table
      :columns="columns"
      :data="customers"
      @update:data="(newData) => (customers = newData)"
      :searchPlaceholder="'Search'"
      class="pt-10"
    />
  </div>
</template>
