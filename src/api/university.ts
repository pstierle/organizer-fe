import { fetch } from "@tauri-apps/api/http";

export const fetchUniversities = async () => {
  const { data } = await fetch("http://localhost:3001/api/universities", {
    method: "GET",
    timeout: 30,
  });

  return data;
};
