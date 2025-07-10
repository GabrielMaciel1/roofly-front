import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import { createMessageListStyles } from '../styles/MessageList.styles';

interface Message {
  id: number;
  sender: string;
  timestamp: string;
  content: string;
  avatar: any;
  unread?: number;
  online?: boolean;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const colors = useTheme();
  const styles = createMessageListStyles(colors);
  const navigation = useNavigation();

  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.messageContainer} onPress={() => navigation.navigate('MessageDetails', { contactName: item.sender })}>
          <View style={styles.avatarContainer}>
            <Image source={item.avatar} style={styles.avatar} />
            {item.online && <View style={styles.onlineIndicator} />}
          </View>
          <View style={styles.messageContent}>
            <Text style={styles.senderName}>{item.sender}</Text>
            <Text style={styles.messageText} numberOfLines={1} ellipsizeMode="tail">{item.content}</Text>
          </View>
          <View style={styles.messageInfo}>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
            {item.unread ? (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadCountText}>{item.unread}</Text>
              </View>
            ) : <View style={{height: 20}}/>}
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default MessageList;