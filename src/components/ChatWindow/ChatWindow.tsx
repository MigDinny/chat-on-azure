import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import { fetchMessages, postMessage, selectAllMessages } from '../../store/messagesSlice';
import type { AppDispatch } from '../../store/store';

const { Content, Footer } = Layout;

const ChatWindow: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector(selectAllMessages);

  useEffect(() => {
    dispatch(fetchMessages());
    const interval = setInterval(() => {
      dispatch(fetchMessages());
    }, 3000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const handleSend = (name: string, text: string) => {
    dispatch(postMessage({ name, text }));
  };

  return (
    <Layout style={{ height: '100%' }}>
      <Content style={{ overflowY: 'auto', marginBottom: 16 }}>
        <MessageList messages={messages} />
      </Content>
      <Footer style={{ padding: 0 }}>
        <MessageInput onSend={handleSend} />
      </Footer>
    </Layout>
  );
};

export default ChatWindow;
