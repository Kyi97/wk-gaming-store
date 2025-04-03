<script setup lang="ts">
import { defineProps } from "vue";
import { PieChart } from "vue-chart-3";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PieController,
} from "chart.js";

// Register necessary components for Chart.js Pie Chart
ChartJS.register(ArcElement, Tooltip, Legend, PieController);

interface PieChartProps {
  chartData: object;
  chartOptions: object;
}
defineProps<PieChartProps>();
</script>

<template>
  <div class="w-full max-w-sm mx-auto p-5">
    <PieChart :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>
