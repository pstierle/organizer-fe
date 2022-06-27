<template>
  <transition
    enterActiveClass="transition ease-out duration-100"
    enterFromClass="transform opacity-0 scale-95"
    enterToClass="transform opacity-100 scale-100"
    leaveActiveClass="transition ease-in duration-75"
    leaveFromClass="transform opacity-100 scale-100"
    leaveToClass="transform opacity-0 scale-95"
    :mode="mode"
  >
    <slot />
  </transition>
</template>

<script lang="ts" setup>
import type { TransitionProps } from "vue";

withDefaults(
  defineProps<{
    mode?: TransitionProps["mode"];
  }>(),
  { mode: "out-in" }
);
</script>
