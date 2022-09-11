import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import config from 'config';
import { parseIds } from './utils';


const SERVER_API_ENDPOINT = config.get('SERVER_API_ENDPOING', '/api');

function CreateSilce(name: string, initialState: any,EntityType:any) {


   const getSilceData = createAsyncThunk('get'+name, async () => {
    const response = await fetch(`${SERVER_API_ENDPOINT}/${name}`);
    const parsedResponse = await response.json();
    return parseIds(parsedResponse) as typeof EntityType [];
  });

  const Adapter = createEntityAdapter<typeof EntityType>();
  const Selectors = Adapter.getSelectors();
  let slice = createSlice({
    name: name,
    initialState: Adapter.getInitialState(initialState),
    reducers: {},
    extraReducers: (builder) => {},
  });

  return {
    getSilceData,
    Adapter,
    Selectors,
    slice,
  };
}


export { CreateSilce}
