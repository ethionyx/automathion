import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Flow } from '../../shared/types';
import { api } from '../../api';
import { RootState } from '../../store/store';

export const fetchFlows = createAsyncThunk('flow/fetchFlows', async () => {
  const response = await api.get('/flows');
  return response.data;
});

export const addFlow = createAsyncThunk('flow/addFlow', async (flow: Flow) => {
  const response = await api.post('/flows', flow);
  return response.data;
});

export const updateFlow = createAsyncThunk(
  'flow/updateFlow',
  async ({ id, data }: { id: string; data: Partial<Flow> }) => {
    const response = await api.put(`/flows/${id}`, data);
    return response.data;
  }
);

export const deleteFlow = createAsyncThunk('flow/deleteFlow', async (id: string) => {
  await api.delete(`/flows/${id}`);
  return id;
});

const flowSlice = createSlice({
  name: 'flow',
  initialState: { flows: [] as Flow[] },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const selectFlows = (state: RootState) => state.flow.flows;
export default flowSlice.reducer;
