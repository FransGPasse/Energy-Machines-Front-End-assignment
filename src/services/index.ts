import { Page, Project } from "../models";

const baseURL = "https://release.aws.thmi.cloud/api/v1/";
const token = import.meta.env.VITE_API_TOKEN;

async function getProjects(): Promise<Project[] | []> {
  const url = baseURL + "projects/list";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to retrieve projects");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getPages(id: string): Promise<Page | undefined> {
  const url = baseURL + `${id}/page/tree`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to retrieve projects");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getProjects, getPages };
