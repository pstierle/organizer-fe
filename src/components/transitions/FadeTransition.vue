<template>
  <transition
    enterFromClass="opacity-0"
    leaveToClass="opacity-0"
    enterActiveClass="transition ease-out duration-150"
    leaveActiveClass="transition ease-in duration-150"
    enterToClass="opacity-100"
    leaveFromClass="opacity-100"
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
