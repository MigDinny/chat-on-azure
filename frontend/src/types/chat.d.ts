export interface Message {
  id: string;
  name: string;
  text: string;
  timestamp: string; // ISO date-time
}

export interface PostMessagePayload {
  name: string;
  text: string;
}
