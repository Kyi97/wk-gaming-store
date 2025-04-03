<script setup lang="ts">
import { defineProps } from "vue";
import { DoughnutChart } from "vue-chart-3";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  ChartDataLabels
);

interface DoughnutChartProps {
  chartData: object;
  chartOptions: object;
}

defineProps<DoughnutChartProps>();
</script>
<template>
  <div class="w-full mx-auto p-5">
    <DoughnutChart :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>
