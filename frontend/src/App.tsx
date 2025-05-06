import React from 'react';
import { Layout, Typography } from 'antd';
import ChatWindow from './components/ChatWindow/ChatWindow';

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => (
  <Layout style={{ height: '100vh' }}>
    <Header style={{ background: '#fff', textAlign: 'center' }}>
      <Title level={2} style={{ margin: 0 }}>
        Simple Chat
      </Title>
    </Header>
    <Content style={{ padding: '16px' }}>
      <ChatWindow />
    </Content>
  </Layout>
);

export default App;
