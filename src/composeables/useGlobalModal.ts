import { ref } from "vue";

export function useGlobalModal() {
  const loginModalOpen = ref(false);

  return {
    loginModalOpen,
  };
}
