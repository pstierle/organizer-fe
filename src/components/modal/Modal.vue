<template>
  <div v-if="open">
    <div>
      <button @click="$emit('close')">Close</button>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  open: boolean,
});
defineEmits<{
  (eventName: "close"): void;
}>();
</script>
