<!-- components/ProductTable.vue -->
<script setup lang="ts">
import { ref, defineEmits, defineProps } from "vue";
import { FilterMatchMode } from "primevue/api";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Tag from "primevue/tag";
import type { DataTableEditingRows } from "primevue/datatable";
import { isEditing } from "../composables/useAppState";

const props = defineProps<{
  columns: Array<{
    field: string;
    header: string;
    sortable?: boolean;
    status?: string;
  }>;
  data: Array<any>;
  searchPlaceHolder?: string;
}>();

const emit = defineEmits<{
  "update:data": [any[]];
  "update:editingRows": [any[] | DataTableEditingRows];
}>();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const editingRows = ref([]);

const onRowEditInit = () => {
  isEditing.value = true;
};

const onRowEditCancel = () => {
  isEditing.value = false;
};

const onRowEditSave = (event: any) => {
  const { newData, index } = event;
  const updatedData = props.data.map((item, i) =>
    i === index ? { ...newData } : item
  );
  emit("update:data", updatedData);
  isEditing.value = false;
};

const getStatusSeverity = (status: string) => {
  switch (status) {
    case "available":
      return "success";
    case "out of stock":
      return "danger";
    default:
      return "info";
  }
};
</script>

<template>
  <div>
    <DataTable
      :value="data"
      editMode="row"
      v-model:editingRows="editingRows"
      @update:editingRows="(val) => emit('update:editingRows', val)"
      @row-edit-save="onRowEditSave"
      @row-edit-init="onRowEditInit"
      @row-edit-cancel="onRowEditCancel"
      paginator
      :rows="10"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      dataKey="id"
      :filters="filters"
      stripedRows
      showGridlines
    >
      <template #header>
        <div class="flex justify-end">
          <InputText
            v-model="filters.global.value"
            :placeholder="searchPlaceHolder || 'Search'"
          />
        </div>
      </template>
      <Column
        v-for="col in columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable"
      >
        <template v-if="col.statusColumn" #body="{ data }">
          <Tag
            :value="data[col.field]"
            :severity="getStatusSeverity(data[col.field])"
          />
        </template>
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column rowEditor header="Actions" />
      <template #empty>No data found.</template>
    </DataTable>
  </div>
</template>
