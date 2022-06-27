<template>
  <transition
    enterFromClass="transform opacity-0 translate-x-2"
    leaveToClass="transform opacity-0 translate-x-2"
    enterActiveClass="transition ease-out duration-150"
    leaveActiveClass="transition ease-in duration-150"
  >
    <slot />
  </transition>
</template>
