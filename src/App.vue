<template>
  <button @click="test">fetch</button>
</template>

<script lang="ts" setup>
import { getSubjectById } from "@/api/subject.ts";

const test = async () => {
  const data = await getSubjectById(1);
  console.log(data);
};
</script>
