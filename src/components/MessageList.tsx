import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

interface Message {
  sender: string;
  timestamp: Date;
  content: string;
  avatar?: string;
}

import { messageListStyles } from './../styles/MessageList.styles';
import { useMessageList } from '../hooks/useMessageList';

const MessageList: React.FC<Message[]> = ({ messages }: any) => {
  const { sortedMessages } = useMessageList(messages);
  return (
    <FlatList
      data={sortedMessages}
      keyExtractor={(message) => message.id}
      renderItem={({ item }) => (
        <View style={messageListStyles.messageContainer}>
          <Image source={require('assets/perfil.jpeg')} style={messageListStyles.avatar} />
          <View style={messageListStyles.messageContent}>
            <Text style={messageListStyles.senderName}>{item.sender}</Text>
            <Text style={messageListStyles.timestamp}>{item.timestamp.toLocaleString('pt-BR')}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={messageListStyles.messageText} numberOfLines={1} ellipsizeMode="tail">{item.content}</Text>
              {item.unread ? (
                <View style={messageListStyles.unreadBadge}>
                  <Text style={messageListStyles.unreadCountText}>{item.unread}</Text>
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
