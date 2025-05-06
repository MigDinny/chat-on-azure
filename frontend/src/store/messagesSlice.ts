import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { chatService } from '../api/chatService';
import { Message } from '../types/chat';
import type { RootState } from './store';

interface MessagesState {
  list: Message[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MessagesState = {
  list: [],
  status: 'idle',
};

export const fetchMessages = createAsyncThunk(
  'messages/fetchAll',
  async () => chatService.getMessages()
);

export const postMessage = createAsyncThunk(
  'messages/post',
  async (payload: { name: string; text: string }) =>
    chatService.postMessage(payload)
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMessages.pending, state => { state.status = 'loading'; })
      .addCase(
        fetchMessages.fulfilled,
        (state, action: PayloadAction<Message[]>) => {
          state.status = 'idle';
          state.list = action.payload;
        }
      )
      .addCase(
        postMessage.fulfilled,
        (state, action: PayloadAction<Message>) => {
          state.list.push(action.payload);
        }
      );
  },
});

export const selectAllMessages = (state: RootState) => state.messages.list;
export default messagesSlice.reducer;
