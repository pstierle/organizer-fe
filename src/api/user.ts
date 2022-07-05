import { ISequelizeError } from "./../models/ISequelizeError";
import { IUser } from "./../models/IUser";
import { fetch, Body } from "@tauri-apps/api/http";

export const createNewUser = async (user: IUser) => {
  const { data } = await fetch<IUser | ISequelizeError>(
    "http://localhost:3001/api/user",
    {
      method: "POST",
      timeout: 30,
      body: Body.json({ ...user }),
    }
  );
  return data;
};

export const updateUser = async (updatedUser: IUser) => {
  const { data } = await fetch<IUser | ISequelizeError>(
    "http://localhost:3001/api/user",
    {
      method: "PUT",
      timeout: 30,
      body: Body.json({ ...updatedUser }),
    }
  );
  return data;
};

export const getUser = async (loginData: {
  name: string;
  password: string;
}) => {
  const { data } = await fetch<IUser>("http://localhost:3001/api/user", {
    method: "GET",
    timeout: 30,
    body: Body.json({ ...loginData }),
  });
  return data;
};

export const isError = (
  data: IUser | ISequelizeError
): data is ISequelizeError => {
  return (<ISequelizeError>data).errors !== undefined;
};

export const generateSession = async () => {
  const { data } = await fetch<string>("http://localhost:3001/api/session", {
    method: "POST",
    timeout: 30,
  });
  return data;
};
