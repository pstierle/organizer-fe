<template>
  <OrganizerModal :open="loginModalOpen" @close="loginModalOpen = false">
    <form @submit="register(registerForm)">
      <input v-model="registerForm.name" placeholder="Nutzername" />
      <input v-model="registerForm.email" placeholder="Email" />
      <input v-model="registerForm.password" placeholder="Passwort" />
      <input
        v-model="registerForm.verify_password"
        placeholder="Passwort bestätigen"
      />

      <button type="submit">Registrieren</button>
    </form>
  </OrganizerModal>
</template>

<script lang="ts" setup>
import OrganizerModal from "@/components/modal/OrganizerModal.vue";
import { useGlobalModal } from "@/composeables/useGlobalModal.ts";
import { useUser } from "@/composeables/useUser.ts";
import { IUser } from "@/models/IUser.ts";
import { watch, ref } from "vue";

const { loginModalOpen } = useGlobalModal();
const { user, register } = useUser();

const registerForm = ref<IUser>({
  name: "",
  email: "",
  password: "",
  verify_password: "",
});

watch(
  user,
  () => {
    if (!user) {
      loginModalOpen.value = true;
    }
  },
  {
    immediate: true,
  }
);
</script>
