import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../entitles/projects/projectSlice';
import toolReducer from '../entitles/tools/toolsSlice';
import credentialReducer from '../entitles/credential/credentialSlice';
import flowReducer from '../entitles/flow/flowSlice';
import toolValueReducer from '../entitles/toolValue/toolValueSlice';

const store = configureStore({
  reducer: {
    project: projectReducer,
    tool: toolReducer,
    credential: credentialReducer,
    flow: flowReducer,
    toolValue: toolValueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
