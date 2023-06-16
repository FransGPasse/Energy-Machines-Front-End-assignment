export interface Project {
  id: string;
  name: string;
}

export interface Page {
  projectId: string;
  name: string;
  children: Child[];
}

export interface Child {
  name: string;
}
