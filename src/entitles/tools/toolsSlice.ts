import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Tools } from '../../shared/types';
import { api } from '../../api';
import { RootState } from '../../store/store';

export const fetchTools = createAsyncThunk('tool/fetchTools', async () => {
  const response = await api.get('/tools');
  return response.data;
});

export const addTool = createAsyncThunk('tool/addTool', async (tool: Tools) => {
  const response = await api.post('/tools', tool);
  return response.data;
});

export const updateTool = createAsyncThunk(
  'tool/updateTool',
  async ({ id, data }: { id: string; data: Partial<Tools> }) => {
    const response = await api.put(`/tools/${id}`, data);
    return response.data;
  }
);

export const deleteTool = createAsyncThunk('tool/deleteTool', async (id: string) => {
  await api.delete(`/tools/${id}`);
  return id;
});

const toolSlice = createSlice({
  name: 'tool',
  initialState: { tools: [] as Tools[] },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const selectTools = (state: RootState) => state.tool.tools;
export default toolSlice.reducer;
