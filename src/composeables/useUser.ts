import { createNewUser, getUser, isError } from "./../api/user";
import { ref } from "vue";
import { IUser } from "@/models/IUser";
import { useLocalStorage } from "@vueuse/core";

const sessionId = useLocalStorage<string>("sessionId", false);

export function useUser() {
  const user = ref<IUser>();

  const register = async (userData: IUser) => {
    const data = await createNewUser(userData);
    if (isError(data)) {
      throw data;
    } else {
      user.value = data;
    }
  };

  const login = async (loginData: { name: string; password: string }) => {
    const data = await getUser(loginData);
    if (!data) {
      throw {
        errors: [
          {
            message: "Keinen Nutzer gefunden.",
          },
        ],
      };
    } else {
      user.value = data;
    }
  };

  return {
    user,
    login,
    register,
    sessionId,
  };
}
