import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import useTheme from '../theme/ThemeContext';
import { createMessageListStyles } from '../styles/MessageList.styles';
import { useMessageList } from '../hooks/useMessageList';

interface Message {
  id: number;
  sender: string;
  timestamp: Date;
  content: string;
  avatar?: string;
  unread?: number;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const colors = useTheme();
  const styles = createMessageListStyles(colors);
  const { sortedMessages } = useMessageList(messages);

  return (
    <FlatList
      data={sortedMessages}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.messageContainer}>
          <Image source={require('../../assets/perfil.jpeg')} style={styles.avatar} />
          <View style={styles.messageContent}>
            <Text style={styles.senderName}>{item.sender}</Text>
            <Text style={styles.timestamp}>{item.timestamp.toLocaleString('pt-BR')}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.messageText} numberOfLines={1} ellipsizeMode="tail">{item.content}</Text>
              {item.unread ? (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadCountText}>{item.unread}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default MessageList;