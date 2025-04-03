<!-- pages/ProductPage.vue -->
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { rentedService } from "../services/rentedService";
import Table from "../components/Table.vue";

const rentedGames = ref<any[]>([]);

const columns = [
  { field: "id", header: "No", sortable: true },
  { field: "name", header: "Name", sortable: true },
  { field: "category", header: "Category", sortable: true },
  { field: "price", header: "Price", sortable: true },
  { field: "rentedBy", header: "Rented By", sortable: true },
  { field: "rentedDate", header: "Rented Date", sortable: true },
  { field: "returnDate", header: "Return Date", sortable: true },
];

onMounted(async () => {
  try {
    rentedGames.value = await rentedService.getRentedGames();
    console.log("Rented Games loaded:", rentedGames.value);
  } catch (error) {
    console.error("Error loading games:", error);
  }
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Renting List</h1>
    <Table
      :columns="columns"
      :data="rentedGames"
      @update:data="(newData) => (rentedGames = newData)"
      :searchPlaceholder="'Search'"
      class="pt-10"
    />
  </div>
</template>
