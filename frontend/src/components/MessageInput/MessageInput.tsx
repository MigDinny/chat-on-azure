import React, { useState } from 'react';
import { Input, Button, Space } from 'antd';

interface Props { onSend: (name: string, text: string) => void; }

const MessageInput: React.FC<Props> = ({ onSend }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const canSend = name.trim() !== '' && text.trim() !== '';

  const handleClick = () => {
    if (!canSend) return;
    onSend(name.trim(), text.trim());
    setText('');
  };

  return (
    <Space style={{ width: '100%', padding: '8px' }}>
      <Input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ width: 120 }}
      />
      <Input.TextArea
        placeholder="Type a message..."
        value={text}
        onChange={e => setText(e.target.value)}
        autoSize={{ minRows: 1, maxRows: 4 }}
        style={{ flex: 1 }}
      />
      <Button type="primary" onClick={handleClick} disabled={!canSend}>
        Send
      </Button>
    </Space>
  );
};

export default MessageInput;
