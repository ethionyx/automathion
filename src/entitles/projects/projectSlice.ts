import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Project } from '../../shared/types';
import { api } from '../../api';
import { RootState } from '../../store/store';

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

const projectSlice = createSlice({
  name: 'project',
  initialState: { projects: [] as Project[] },
  reducers: {
    updateProjectAttributeLocally: (state, action: PayloadAction<{ id: number; updates: Partial<Project> }>) => {
      const { id, updates } = action.payload;
      const projectIndex = state.projects.findIndex((project) => project.id === id);

      if (projectIndex !== -1) {
        state.projects[projectIndex] = { ...state.projects[projectIndex], ...updates };
      }
    },
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const { updateProjectAttributeLocally } = projectSlice.actions;
export const selectProjects = (state: RootState) => state.project.projects;
export default projectSlice.reducer;
