<template>
  <FadeTransition>
    <div
      v-if="open"
      class="w-screen h-screen absolute flex items-center justify-center transition-all bg-[rgba(0,0,0,0.5)] z-40"
    >
      <div class="bg-neutral-700 px-4 py-3 rounded min-w-[400px] z-50">
        <div class="flex justify-between items-center">
          <h1 class="font-semibold">{{ label }}</h1>
          <button @click="$emit('close')">Close</button>
        </div>
        <div>
          <slot />
        </div>
      </div>
    </div>
  </FadeTransition>
</template>
<script lang="ts" setup>
import FadeTransition from "@/components/transitions/FadeTransition.vue";

defineProps({
  open: Boolean,
  label: String,
});
defineEmits<{
  (eventName: "close"): void;
}>();
</script>
