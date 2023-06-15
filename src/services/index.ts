const url = "https://release.aws.thmi.cloud/api/v1/projects/list";
const token = import.meta.env.VITE_API_TOKEN;

async function getProjects(): Promise<[]> {
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

export { getProjects };
