import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Credential } from '../../shared/types';
import { api } from '../../api';
import { RootState } from '../../store/store';

export const fetchCredentials = createAsyncThunk('credential/fetchCredentials', async () => {
  const response = await api.get('/credentials');
  return response.data;
});

export const addCredential = createAsyncThunk('credential/addCredential', async (credential: Credential) => {
  const response = await api.post('/credentials', credential);
  return response.data;
});

export const updateCredential = createAsyncThunk(
  'credential/updateCredential',
  async ({ id, data }: { id: number; data: Partial<Credential> }) => {
    const response = await api.put(`/credentials/${id}`, data);
    return response.data;
  }
);

export const deleteCredential = createAsyncThunk('credential/deleteCredential', async (id: number) => {
  await api.delete(`/credentials/${id}`);
  return id;
});

const credentialSlice = createSlice({
  name: 'credential',
  initialState: { credentials: [] as Credential[] },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const selectCredentials = (state: RootState) => state.credential.credentials;
export default credentialSlice.reducer;
