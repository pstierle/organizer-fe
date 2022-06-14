import { fetch, Body } from "@tauri-apps/api/http";

export const createSubject = async () => {
  const { data } = await fetch("http://localhost:3001/api/subject", {
    method: "PUT",
    timeout: 30,
    body: Body.json({ semester: 1 }),
  });
  return data;
};

export const fetchSubjects = async () => {
  const { data } = await fetch("http://localhost:3001/api/subjects", {
    method: "GET",
    timeout: 30,
  });
  return data;
};

export const getSubjectById = async (id: number) => {
  const { data } = await fetch(`http://localhost:3001/api/subject/${id}`, {
    method: "GET",
    timeout: 30,
  });
  return data;
};
