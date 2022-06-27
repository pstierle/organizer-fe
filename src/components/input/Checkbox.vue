<template>
  <div class="flex gap-1">
    <input v-bind="$attrs" v-model="value" type="checkbox" />
    <p v-if="label" class="text-xs">{{ label }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  label?: string;
  value: any;
}>();

defineEmits<{
  (event: "update:value", data: any): void;
}>();

const value = useVModel(props);
</script>
