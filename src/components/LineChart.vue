<script setup lang="ts">
import { defineProps } from "vue";
import { LineChart } from "vue-chart-3";
import {
  Chart as ChartJS,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  PointElement,
  Legend,
  LineElement,
} from "chart.js";

ChartJS.register(
  LineController,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  PointElement,
  Legend
);

interface LineChartProps {
  chartData: any;
  chartOptions: any;
}

defineProps<LineChartProps>();
</script>
<template>
  <div class="mx-auto p-5">
    <LineChart :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>
