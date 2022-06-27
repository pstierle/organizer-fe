<template>
  <div>
    <p>{{ label }}</p>
    <input v-model="model" type="text" v-bind="$attrs" />
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  label?: string;
  modelValue?: string;
}>();

defineEmits<{
  (event: "update:modelValue", data: string): void;
}>();

const model = useVModel(props);
</script>
