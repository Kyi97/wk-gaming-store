<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { watch, ref } from "vue";
import { navigationItems, iconMap } from "../constants/navigation";

const route = useRoute();
const router = useRouter();

// Sync activePath with the current route on page load
const activePath = ref(route.path);

// Update activePath and navigate when clicking a menu item
const setActivePath = (path: string) => {
  activePath.value = path;
  router.push(path);
};

// Watch for route changes to keep activePath in sync
watch(
  () => route.path,
  (newPath) => {
    activePath.value = newPath;
  }
);
</script>

<template>
  <div
    class="flex flex-col bg-white shadow-lg border border-gray-300 min-h-screen max-w-[16rem] w-full"
  >
    <div class="p-8">
      <h1 class="text-xl text-black font-semibold mt-4">WK Gaming Store</h1>
      <nav class="mt-12">
        <ul class="space-y-7">
          <li
            v-for="item in navigationItems"
            :key="item.path"
            :class="[
              'flex items-center gap-4 py-3 px-4 transition-all cursor-pointer',
              activePath === item.path
                ? 'bg-[#e5e5e5] text-black rounded-3xl'
                : 'text-black',
            ]"
            @click="setActivePath(item.path)"
          >
            <component
              :is="iconMap[item.icon]"
              class="w-6 h-6 ml-3"
              v-if="item.icon"
            />
            <span>{{ item.label }}</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
