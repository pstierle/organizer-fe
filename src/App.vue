<template>
  <div class="flex w-screen h-screen bg-neutral-600 absolute">
    <SideBar />
    <div class="w-full">main</div>
  </div>
  <GlobalModal />
</template>

<script lang="ts" setup>
import GlobalModal from "@/views/GlobalModal.vue";
import { onMounted } from "vue";
import SideBar from "./components/sidebar/SideBar.vue";
import { useUser } from "./composeables/useUser";

const { stayLoggedIn } = useUser();

onMounted(() => {
  if (stayLoggedIn.value) {
  }
});
</script>
