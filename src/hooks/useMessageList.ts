import { useMemo } from 'react';

interface Message {
  sender: string;
  timestamp: Date;
  content: string;
  avatar?: string;
  unread?: number;
  id: string;
}

export function useMessageList(messages: Message[]) {
  const sortedMessages = useMemo(() => {
    return [...messages].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }, [messages]);

  return {
    sortedMessages,
  };
}