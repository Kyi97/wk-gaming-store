<template>
  <div class="flex justify-center items-center">
    <div
      class="bg-white p-8 rounded-lg shadow-lg border border-gray-300 max-w-[24rem] w-full"
    >
      <h1 class="text-2xl font-semibold text-center mb-6">Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <input
            type="text"
            v-model="username"
            placeholder="Username"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            v-model="password"
            placeholder="Password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authStore";
import { mockLogin } from "../services/authService";

const username = ref("");
const password = ref("");

const router = useRouter();
const authStore = useAuthStore();

const handleLogin = () => {
  try {
    const { token, user } = mockLogin(username.value, password.value);
    authStore.login(token, user);
    router.push("/dashboard");
  } catch (error) {
    console.log("Login failed", error);
  }
};
</script>
