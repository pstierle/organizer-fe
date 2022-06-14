import { IUser } from "./../models/IUser";
import { fetch, Body } from "@tauri-apps/api/http";

export const createNewUser = async (user: IUser) => {
  const { data } = await fetch<IUser>("http://localhost:3001/api/user", {
    method: "POST",
    timeout: 30,
    body: Body.json({ user }),
  });

  return data;
};
