import axios from 'axios';
import { API_URL, ENDPOINTS } from './config';
import { Message, PostMessagePayload } from '../types/chat';

const client = axios.create({ baseURL: API_URL });

export const chatService = {
  getMessages: async (): Promise<Message[]> => {
    const resp = await client.get<Message[]>(ENDPOINTS.getMessages);
    return resp.data;
  },

  postMessage: async (payload: PostMessagePayload): Promise<Message> => {
    const resp = await client.post<Message>(ENDPOINTS.postMessage, payload);
    return resp.data;
  },
};
