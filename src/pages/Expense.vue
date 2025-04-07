<script setup lang="ts">
import Table from "../components/Table.vue";
import { ref, onMounted } from "vue";
import { expenseService } from "../services/expenseService";

const expenses = ref<any[]>([]);

const columns = [
  { field: "id", header: "No", sortable: true },
  { field: "game", header: "Game", sortable: true },
  { field: "category", header: "Category", sortable: true },
  { field: "price", header: "Price", sortable: true },
  { field: "date", header: "Date", sortable: true },
];

onMounted(async () => {
  try {
    expenses.value = await expenseService.getExpenses();
    console.log("Expenses loaded:", expenses.value);
  } catch (error) {
    console.error("Error loading expenses:", error);
  }
});
</script>
<template>
  <div>
    <h1 class="text-2xl font-bold">Expenses</h1>
    <Table
      :columns="columns"
      :data="expenses"
      @update:data="(newData) => (expenses = newData)"
      :searchPlaceholder="'Search'"
      class="pt-10"
    />
  </div>
</template>
