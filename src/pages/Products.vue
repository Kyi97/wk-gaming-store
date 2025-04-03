<!-- pages/ProductPage.vue -->
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { productService } from "../services/productService";
import Table from "../components/Table.vue";

const products = ref<any[]>([]);

const columns = [
  { field: "id", header: "No", sortable: true },
  { field: "name", header: "Name", sortable: true },
  { field: "category", header: "Category", sortable: true },
  { field: "price", header: "Price", sortable: true },
  { field: "status", header: "Status", statusColumn: true },
];

onMounted(async () => {
  try {
    products.value = await productService.getProducts();
    console.log("Products loaded:", products.value);
  } catch (error) {
    console.error("Error loading products:", error);
  }
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Products</h1>
    <Table
      :columns="columns"
      :data="products"
      @update:data="(newData) => (products = newData)"
      :searchPlaceholder="'Search Products'"
      class="pt-10"
    />
  </div>
</template>
