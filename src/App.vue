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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
