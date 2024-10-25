import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ToolValues } from '../../shared/types';
import { api } from '../../api';
import { RootState } from '../../store/store';

export const fetchToolValues = createAsyncThunk('toolValue/fetchToolValues', async () => {
  const response = await api.get('/toolValues');
  return response.data;
});

export const addToolValue = createAsyncThunk('toolValue/addToolValue', async (toolValue: ToolValues) => {
  const response = await api.post('/toolValues', toolValue);
  return response.data;
});

export const updateToolValue = createAsyncThunk(
  'toolValue/updateToolValue',
  async ({ id, data }: { id: string; data: Partial<ToolValues> }) => {
    const response = await api.put(`/toolValues/${id}`, data);
    return response.data;
  }
);

export const deleteToolValue = createAsyncThunk('toolValue/deleteToolValue', async (id: string) => {
  await api.delete(`/toolValues/${id}`);
  return id;
});

const toolValueSlice = createSlice({
  name: 'toolValue',
  initialState: { toolValues: [] as ToolValues[] },
  reducers: {},
  extraReducers: (builder) => {
    builder
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

export const selectToolValues = (state: RootState) => state.toolValue.toolValues;
export default toolValueSlice.reducer;
