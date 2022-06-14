import { ref } from "vue";

export function useGlobalModal() {
  const loginModalOpen = ref(true);

  return {
    loginModalOpen,
  };
}
