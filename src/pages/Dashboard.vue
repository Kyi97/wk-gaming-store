<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import DoughnutChart from "../components/DoughnutChart.vue";
import LineChart from "../components/LineChart.vue";
import BarChart from "../components/BarChart.vue";
import { incomeService } from "../services/incomeService";

const router = useRouter();

//Income page
const goToIncome = () => {
  router.push("/income");
};

//Expense page
const goToExpense = () => {
  router.push("/expense");
};

const totalIncome = ref(0);
const totalExpense = ref(0);

const fetchTotalIncome = async () => {
  try {
    totalIncome.value =
      await incomeService.calculateTotalIncomeForCurrentMonth();
  } catch (error) {
    console.error("Error fetching total income:", error);
  }
};

onMounted(() => {
  fetchTotalIncome();
});

// Pie Chart One
const chartData = ref({
  labels: ["March", "April", "May"],
  datasets: [
    {
      label: "Sales Data",
      backgroundColor: ["#ffc1d0", "#ff97b0", "#ff5b82"],
      data: [10, 40, 39],
    },
  ],
});

// Pie Chart One
const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  datalabels: {
    color: "#FF0000",
    formatter: (value: number) => value.toFixed(0), // Format the value
    font: {
      weight: "bold", // Font weight
      size: 16, // Font size
    },
  },
  display: true,
  position: "outside",
  align: "center",
});

// Pie Chart Two
const chartData_2 = ref({
  labels: ["March", "April", "May"],
  datasets: [
    {
      label: "Sales Data",
      backgroundColor: ["#bfdbfe", "#93c5fd", "#60a5fa"],
      data: [10, 40, 39],
    },
  ],
});

// Pie Chart Two
const chartOptions_2 = ref({
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },

  datalabels: {
    color: "#FF0000",
    formatter: (value: number) => value.toFixed(0), // Format the value
    font: {
      weight: "bold", // Font weight
      size: 12, // Font size
    },
  },
});

//Line Chart
const lineChartData = ref({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [100, 150, 300, 450, 400, 100, 150, 300, 450, 400, 100, 150],
      borderColor: "#e11d48", // Line color (green)
      backgroundColor: "#e11d48", // Fill color
    },
    {
      label: "Expenses",
      data: [100, 200, 250, 350, 450, 100, 200, 250, 350, 450, 100, 200],
      borderColor: "#2563eb", // Line color (red)
      backgroundColor: "#2563eb", // Fill color
    },
  ],
});
// Line options
const lineChartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom", // Move legend to bottom
      labels: {
        color: "#555", // Legend text color
        font: {
          size: 14, // Legend font size
          weight: "bold",
        },
        boxWidth: 20, // Legend box size
        padding: 20, // Space around legend
      },
    },
    title: {
      display: true,
      text: "Financial Overview",
      color: "#333",
      font: {
        size: 18,
        weight: "bold",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#333", // X-axis label color
      },
    },
    y: {
      ticks: {
        color: "#333", // Y-axis label color
      },
    },
  },
});

//Bar Chart
const barChartData = ref({
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Revenue",
      data: [500, 700, 800, 600, 750],
      backgroundColor: "#93c5fd", // Blue
      borderRadius: 8,
    },
    {
      label: "Expenses",
      data: [400, 600, 700, 500, 650],
      backgroundColor: "#f9a8d4", // Red
      borderRadius: 8,
    },
  ],
});

//Bar options
const barChartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: { size: 14 },
        color: "#555",
      },
    },
    title: {
      display: true,
      text: "Revenue vs Expenses",
      color: "#333",
      font: { size: 18, weight: "bold" },
    },
  },
  scales: {
    x: {
      ticks: { color: "#555" },
      grid: { display: false },
    },
    y: {
      ticks: { color: "#555" },
      grid: { color: "#ddd" },
    },
  },
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Analytics</h1>
    <div
      class="grid grid-cols-1 gap-4 pt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      <div>
        <div
          class="bg-white w-full h-[8.5rem] rounded-2xl flex flex-col justify-center items-center"
          @click="goToIncome"
        >
          <h1 class="text-lg font-bold">Income</h1>
          <p class="text-xl font-semibold text-green-600 mt-2">
            ${{ totalIncome.toFixed(2) }}
          </p>
        </div>
        <div
          class="bg-white w-full h-[8.5rem] rounded-2xl mt-4 flex flex-col justify-center items-center"
        >
          <h1 class="text-lg font-bold">Withdrawal</h1>
        </div>
      </div>
      <div>
        <div
          class="bg-white w-full h-[8.5rem] rounded-2xl flex flex-col justify-center items-center"
          @click="goToExpense"
        >
          <h1 class="text-lg font-bold">Expenses</h1>
          <p class="text-xl font-semibold text-red-600 mt-2">
            ${{ totalExpense.toFixed(2) }}
          </p>
        </div>
        <div
          class="bg-white w-full h-[8.5rem] rounded-2xl mt-4 flex flex-col justify-center items-center"
        >
          <h1 class="text-lg font-bold">Profit</h1>
        </div>
      </div>
      <div
        class="bg-white w-full h-[18rem] flex flex-col justify-center items-center rounded-2xl p-5"
      >
        <h1 class="text-lg font-bold">Rent</h1>
        <DoughnutChart :chart-data="chartData" :chart-options="chartOptions" />
      </div>
      <div
        class="bg-white w-full h-[18rem] flex flex-col justify-center items-center rounded-2xl p-5"
      >
        <h1 class="text-lg font-bold">Available</h1>
        <DoughnutChart
          :chart-data="chartData_2"
          :chart-options="chartOptions_2"
        />
      </div>
    </div>
    <div
      class="grid grid-cols-1 gap-4 pt-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
    >
      <div
        class="bg-white h-[18rem] rounded-2xl flex justify-center items-center"
      >
        <LineChart
          :chart-data="lineChartData"
          :chart-options="lineChartOptions"
        />
      </div>
      <div
        class="bg-white w-full h-[18rem] rounded-2xl flex justify-center items-center"
      >
        <BarChart :chart-data="barChartData" :chart-options="barChartOptions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
::v-deep #line-chart {
  height: 245px !important;
  width: 500px !important;
}
::v-deep #bar-chart {
  height: 245px !important;
  width: 500px !important;
}
::v-deep #doughnut-chart {
  /* height: 200px !important; */
  width: 300px !important;
}
</style>
