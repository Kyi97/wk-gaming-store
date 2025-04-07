<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
import Login from "./pages/Login.vue";
import "./assets/main.css";
import { isEditing } from "./composables/useAppState";

const isMobile = ref(false);

// Check if the screen size is mobile
const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 768; // Mobile: ≤768px (md breakpoint)
};

// Check screen size on page load
onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

// Clean up listener
onBeforeMount(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<template>
  <div
    class="grid"
    :class="[
      isMobile
        ? 'grid-cols-1'
        : isEditing
        ? 'grid-cols-1'
        : 'grid-cols-[0.5fr_2.5fr]',
    ]"
    v-if="$route.path !== '/'"
  >
    <SideBar v-if="!isMobile && !isEditing" />
    <div class="bg-gray-100">
      <RouterView class="py-2 px-2 min-h-11/12 m-10" />
    </div>
  </div>
  <div v-else><Login /></div>
</template>
