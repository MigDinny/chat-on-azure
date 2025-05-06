import React from 'react';
import { List, Avatar } from 'antd';
import type { Message } from '../../types/chat';

interface Props { messages: Message[]; }

const MessageList: React.FC<Props> = ({ messages }) => (
  <List
    dataSource={messages}
    renderItem={msg => (
      <List.Item key={msg.id} style={{ padding: '8px 16px' }}>
        <List.Item.Meta
          title={msg.name}
          description={msg.text}
          avatar={<Avatar>{msg.name.charAt(0).toUpperCase()}</Avatar>}
        />
        <div>{new Date(msg.timestamp).toLocaleTimeString()}</div>
      </List.Item>
    )}
  />
);

export default MessageList;
