import { JSX } from 'react';

// Define interfaces
export interface Flow {
  source: string;
  sourceEndpoint: string;
  target: string;
  targetEndpoint: string;
}

export interface Field {
  id: string;
  name: string;
  type: string;
}

export interface Tools {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  type?: string;
  fields?: Field[];
}

export interface ToolValues {
  id: string;
  toolId: string;
  data: {
    fieldName: string;
    value: string;
  }[];
}

export interface Credential {
  id: number;
  name: string;
  icon: string;
  token: string;
  show: boolean;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  tools: Tools[];
  flow: Flow[];
  credentials: Credential[];
  valueIds: ToolValues[];
  icon: JSX.Element | string;
  contributors: {
    firstName: string;
    title: string;
    profilePic?: string;
  }[];
  activatedDate: Date;
  status: 'active' | 'inactive' | 'drift';
}

export interface ProjectState {
  projects: Project[];
  tools: Tools[];
  credentials: Credential[];
  flows: Flow[];
  toolValues: ToolValues[];
}

export interface UpdateProjectPayload {
  id: number; // ID of the project to update
  updates: Partial<Project>; // Attributes to update
}

// Initial State
export const initialState: ProjectState = {
  projects: [],
  tools: [],
  credentials: [],
  flows: [],
  toolValues: [],
};

export interface Notification {
  id: number;              // Unique ID for the notification
  message: string;         // The main content of the notification
  icon: React.ReactNode;   // Icon displayed alongside the notification
  title: string;           // Title for the notification
  timestamp: string;         // When the notification was created (use Date for type safety)
}