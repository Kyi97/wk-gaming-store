<script setup lang="ts">
import Table from "../components/Table.vue";
import { ref, onMounted } from "vue";
import { incomeService } from "../services/incomeService";

const incomes = ref<any[]>([]);

const columns = [
  { field: "id", header: "No", sortable: true },
  { field: "customer_name", header: "Customer Name", sortable: true },
  { field: "game_name", header: "Game Name", sortable: true },
  { field: "price", header: "Price", sortable: true },
  { field: "period", header: "Period", statusColumn: true },
  { field: "date", header: "Date", sortable: true },
];

onMounted(async () => {
  try {
    incomes.value = await incomeService.getIncomes();
    console.log("Incomes loaded:", incomes.value);
  } catch (error) {
    console.error("Error loading incomes:", error);
  }
});
</script>
<template>
  <div>
    <h1 class="text-2xl font-bold">Income</h1>
    <Table
      :columns="columns"
      :data="incomes"
      @update:data="(newData) => (incomes = newData)"
      :searchPlaceholder="'Search'"
      class="pt-10"
    />
  </div>
</template>
