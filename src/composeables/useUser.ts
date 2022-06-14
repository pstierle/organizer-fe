import { createNewUser } from "./../api/user";
import { ref } from "vue";
import { IUser } from "@/models/IUser";

export function useUser() {
  const user = ref<IUser>();

  const register = async (userData: IUser) => {
    const data = await createNewUser(userData);
    user.value = data;
  };

  return {
    user,
    register,
  };
}
