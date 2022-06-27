<template>
  <OrganizerModal
    :open="loginModalOpen"
    @close="loginModalOpen = false"
    label="Login"
  >
    <form @submit.prevent="_register">
      <Input v-model="registerForm.name" label="Nutzername" />
      <Input v-model="registerForm.email" label="Email" />
      <Input v-model="registerForm.password" label="Passwort" />
      <Input
        v-model="registerForm.verify_password"
        label="Passwort bestätigen"
      />

      <button type="submit">Registrieren</button>
    </form>
    <form @submit.prevent="_login">
      <Input v-model="loginForm.name" label="Nutzername" />
      <Input v-model="loginForm.password" label="Passwort" />
      <div class="flex items-center justify-between">
        <Checkbox v-model="stayLoggedIn" label="Angemeldet bleiben" />
        <button type="submit">Anmelden</button>
      </div>
    </form>
    <div>
      <div v-for="(error, index) in errors?.errors">
        <p>{{ error.message }}</p>
        <p>{{ error.type }}</p>
      </div>
    </div>
  </OrganizerModal>
</template>

<script lang="ts" setup>
import OrganizerModal from "@/components/modal/OrganizerModal.vue";
import { useGlobalModal } from "@/composeables/useGlobalModal";
import { useUser } from "@/composeables/useUser";
import { IUser } from "@/models/IUser";
import { ISequelizeError } from "@/models/ISequelizeError";
import { watch, ref } from "vue";
import Input from "@/components/input/Input.vue";
import Checkbox from "../input/Checkbox.vue";

const { loginModalOpen } = useGlobalModal();
const { user, register, login, stayLoggedIn } = useUser();
const errors = ref<ISequelizeError>();

const registerForm = ref<IUser & { password: string; verify_password: string }>(
  {
    name: "",
    email: "",
    password: "",
    verify_password: "",
  }
);

const loginForm = ref<{ name: string; password: string }>({
  name: "",
  password: "",
});

const _register = async () => {
  errors.value = undefined;
  try {
    console.log(registerForm.value);
    await register(registerForm.value);
  } catch (e) {
    const error = e as ISequelizeError;
    errors.value = error;
  }
};

const _login = async () => {
  errors.value = undefined;
  try {
    await login(loginForm.value);
  } catch (e) {
    const error = e as ISequelizeError;
    errors.value = error;
  }
};

watch(
  user,
  () => {
    if (!user.value) {
      loginModalOpen.value = true;
    } else {
      loginModalOpen.value = false;
    }
  },
  {
    immediate: true,
  }
);
</script>
