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
  // Aqui você pode adicionar lógica de filtragem, ordenação ou memoização se necessário
  // Exemplo: ordenar por data
  const sortedMessages = useMemo(() => {
    return [...messages].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }, [messages]);

  return {
    sortedMessages,
  };
}