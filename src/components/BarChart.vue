<script setup lang="ts">
import { defineProps } from "vue";
import { BarChart } from "vue-chart-3";
import {
  Chart as ChartJS,
  BarController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface BarChartProps {
  chartData: object;
  chartOptions: object;
}
defineProps<BarChartProps>();
</script>
<template>
  <div>
    <BarChart :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>
