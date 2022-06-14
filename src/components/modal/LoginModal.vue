<template>
  <Modal :open="loginModalOpen" @close="loginModalOpen = false">
    <div>Login</div>
  </Modal>
</template>
<script lang="ts" setup>
import Modal from "@/components/modal/Modal.vue";

const { loginModalOpen } = useGlobalModal();
</script>
