import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api } from '../api';

import { Project, ProjectState, Flow, Tools, ToolValues, Credential, UpdateProjectPayload, initialState } from '../shared/types';

// Async thunks for CRUD operations
export const fetchProjects = createAsyncThunk('project/fetchProjects', async () => {
  const response = await api.get('/projects');
  return response.data;
});

export const addProject = createAsyncThunk('project/addProject', async (project: Project) => {
  const response = await api.post('/projects', project);
  return response.data;
});

export const updateProject = createAsyncThunk(
  'project/updateProject',
  async ({ id, data }: { id: number; data: Partial<Project> }) => {
    const response = await api.put(`/projects/${id}`, data);
    return response.data;
  }
);

export const deleteProject = createAsyncThunk('project/deleteProject', async (id: number) => {
  await api.delete(`/projects/${id}`);
  return id;
});

// CRUD thunks for Tools
export const fetchTools = createAsyncThunk('project/fetchTools', async () => {
  const response = await api.get('/tools');
  return response.data;
});

export const addTool = createAsyncThunk('project/addTool', async (tool: Tools) => {
  const response = await api.post('/tools', tool);
  return response.data;
});

export const updateTool = createAsyncThunk(
  'project/updateTool',
  async ({ id, data }: { id: string; data: Partial<Tools> }) => {
    const response = await api.put(`/tools/${id}`, data);
    return response.data;
  }
);

export const deleteTool = createAsyncThunk('project/deleteTool', async (id: string) => {
  await api.delete(`/tools/${id}`);
  return id;
});

// CRUD thunks for Credentials
export const fetchCredentials = createAsyncThunk('project/fetchCredentials', async () => {
  const response = await api.get('/credentials');
  return response.data;
});

export const addCredential = createAsyncThunk('project/addCredential', async (credential: Credential) => {
  const response = await api.post('/credentials', credential);
  return response.data;
});

export const updateCredential = createAsyncThunk(
  'project/updateCredential',
  async ({ id, data }: { id: number; data: Partial<Credential> }) => {
    const response = await api.put(`/credentials/${id}`, data);
    return response.data;
  }
);

export const deleteCredential = createAsyncThunk('project/deleteCredential', async (id: number) => {
  await api.delete(`/credentials/${id}`);
  return id;
});

// CRUD thunks for Flows
export const fetchFlows = createAsyncThunk('project/fetchFlows', async () => {
  const response = await api.get('/flows');
  return response.data;
});

export const addFlow = createAsyncThunk('project/addFlow', async (flow: Flow) => {
  const response = await api.post('/flows', flow);
  return response.data;
});

export const updateFlow = createAsyncThunk(
  'project/updateFlow',
  async ({ id, data }: { id: string; data: Partial<Flow> }) => {
    const response = await api.put(`/flows/${id}`, data);
    return response.data;
  }
);

export const deleteFlow = createAsyncThunk('project/deleteFlow', async (id: string) => {
  await api.delete(`/flows/${id}`);
  return id;
});

// CRUD thunks for ToolValues
export const fetchToolValues = createAsyncThunk('project/fetchToolValues', async () => {
  const response = await api.get('/toolValues');
  return response.data;
});

export const addToolValue = createAsyncThunk('project/addToolValue', async (toolValue: ToolValues) => {
  const response = await api.post('/toolValues', toolValue);
  return response.data;
});

export const updateToolValue = createAsyncThunk(
  'project/updateToolValue',
  async ({ id, data }: { id: string; data: Partial<ToolValues> }) => {
    const response = await api.put(`/toolValues/${id}`, data);
    return response.data;
  }
);

export const deleteToolValue = createAsyncThunk('project/deleteToolValue', async (id: string) => {
  await api.delete(`/toolValues/${id}`);
  return id;
});

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    updateProjectAttributeLocally: (state, action: PayloadAction<UpdateProjectPayload>) => {
      const { id, updates } = action.payload;
      const projectIndex = state.projects.findIndex((project) => project.id === id);

      if (projectIndex !== -1) {
        state.projects[projectIndex] = { ...state.projects[projectIndex], ...updates };
      }
    },
  },
    extraReducers: (builder) => {
    builder
      // Projects
      .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.projects = action.payload;
      })
      .addCase(addProject.fulfilled, (state, action: PayloadAction<Project>) => {
        state.projects.push(action.payload);
      })
      .addCase(updateProject.fulfilled, (state, action: PayloadAction<Project>) => {
        const index = state.projects.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) state.projects[index] = action.payload;
      })
      .addCase(deleteProject.fulfilled, (state, action: PayloadAction<number>) => {
        state.projects = state.projects.filter((p) => p.id !== action.payload);
      })
      // Tools
      .addCase(fetchTools.fulfilled, (state, action: PayloadAction<Tools[]>) => {
        state.tools = action.payload;
      })
      .addCase(addTool.fulfilled, (state, action: PayloadAction<Tools>) => {
        state.tools.push(action.payload);
      })
      .addCase(updateTool.fulfilled, (state, action: PayloadAction<Tools>) => {
        const index = state.tools.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.tools[index] = action.payload;
      })
      .addCase(deleteTool.fulfilled, (state, action: PayloadAction<string>) => {
        state.tools = state.tools.filter((t) => t.id !== action.payload);
      })
      // Credentials
      .addCase(fetchCredentials.fulfilled, (state, action: PayloadAction<Credential[]>) => {
        state.credentials = action.payload;
      })
      .addCase(addCredential.fulfilled, (state, action: PayloadAction<Credential>) => {
        state.credentials.push(action.payload);
      })
      .addCase(updateCredential.fulfilled, (state, action: PayloadAction<Credential>) => {
        const index = state.credentials.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) state.credentials[index] = action.payload;
      })
      .addCase(deleteCredential.fulfilled, (state, action: PayloadAction<number>) => {
        state.credentials = state.credentials.filter((c) => c.id !== action.payload);
      })
      // Flows
      .addCase(fetchFlows.fulfilled, (state, action: PayloadAction<Flow[]>) => {
        state.flows = action.payload;
      })
      .addCase(addFlow.fulfilled, (state, action: PayloadAction<Flow>) => {
        state.flows.push(action.payload);
      })
      .addCase(updateFlow.fulfilled, (state, action: PayloadAction<Flow>) => {
        const index = state.flows.findIndex((f) => f.source === action.payload.source);
        if (index !== -1) state.flows[index] = action.payload;
      })
      .addCase(deleteFlow.fulfilled, (state, action: PayloadAction<string>) => {
        state.flows = state.flows.filter((f) => f.source !== action.payload);
      })
      // ToolValues
      .addCase(fetchToolValues.fulfilled, (state, action: PayloadAction<ToolValues[]>) => {
        state.toolValues = action.payload;
      })
      .addCase(addToolValue.fulfilled, (state, action: PayloadAction<ToolValues>) => {
        state.toolValues.push(action.payload);
      })
      .addCase(updateToolValue.fulfilled, (state, action: PayloadAction<ToolValues>) => {
        const index = state.toolValues.findIndex((tv) => tv.id === action.payload.id);
        if (index !== -1) state.toolValues[index] = action.payload;
      })
      .addCase(deleteToolValue.fulfilled, (state, action: PayloadAction<string>) => {
        state.toolValues = state.toolValues.filter((tv) => tv.id !== action.payload);
      });
  },
});
export const { updateProjectAttributeLocally } = projectSlice.actions;
export const selectProjects = (state: RootState) => state.project.projects;
export const selectTools = (state: RootState) => state.project.tools;
export const selectCredentials = (state: RootState) => state.project.credentials;
export const selectFlows = (state: RootState) => state.project.flows;
export const selectToolValues = (state: RootState) => state.project.toolValues;
export default projectSlice.reducer;
