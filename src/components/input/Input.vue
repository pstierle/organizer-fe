<template>
  <div>
    <p v-if="label" class="text-xs">{{ label }}</p>
    <input
      v-bind="$attrs"
      v-model="value"
      class="rounded p-0.5 placeholder:text-sm"
    />
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
