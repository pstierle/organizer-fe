<template>
  <div>
    <p>{{ label }}</p>
    <input v-model="(model as boolean)" type="checkbox" v-bind="$attrs" />
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
  modelValue?: boolean;
}>();

defineEmits<{
  (event: "update:modelValue", data: string): void;
}>();

const model = useVModel(props);
</script>
