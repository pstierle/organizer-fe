<template>
  <div class="flex flex-col justify-between">
    <div>blabla</div>
    <div>{{ user?.name }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useUser } from "@/composeables/useUser";

const { user } = useUser();
</script>
