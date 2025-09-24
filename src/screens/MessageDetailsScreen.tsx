import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { createMessageDetailsScreenStyles } from '../styles/MessageDetailsScreen.styles';

type MessageDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'MessageDetails'>;

interface ChatMessage {
  id: string;
  text: string;
  time: string;
  isSent: boolean;
  date?: string;
}

const MessageDetailsScreen: React.FC<MessageDetailsScreenProps> = ({ navigation, route }) => {
  const { contactName } = route.params;
  const colors = useTheme();
  const styles = createMessageDetailsScreenStyles(colors);

  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', text: 'Hi Jenny Wilson...', time: '10:01', isSent: true, date: 'Today' },
    { id: '2', text: "I'm looking for a suitable house to live in, can I find out about the house you are selling?", time: '10:01', isSent: true },
    { id: '3', text: 'Hi Adam Smith...', time: '10:00', isSent: false },
    { id: '4', text: 'Of course, the door is always open', time: '10:00', isSent: false },
  ]);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage: ChatMessage = {
        id: String(messages.length + 1),
        text: messageInput.trim(),
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
        isSent: true, // Assuming all sent messages are from the current user
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  const renderMessage = ({ item }: { item: ChatMessage }) => (
    <>
      {item.date && (
        <View style={styles.dateSeparatorContainer}>
          <Text style={styles.dateSeparatorText}>{item.date}</Text>
        </View>
      )}
      <View style={[styles.messageBubble, item.isSent ? styles.sentMessage : styles.receivedMessage]}>
        <Text style={item.isSent ? styles.sentMessageText : styles.receivedMessageText}>{item.text}</Text>
        <Text style={item.isSent ? styles.sentMessageTime : styles.receivedMessageTime}>{item.time}</Text>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.contactName}>{contactName}</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="phone" size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="video" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.messageTextInput}
          placeholder="Type message ..."
          placeholderTextColor={colors.description}
          value={messageInput}
          onChangeText={setMessageInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <MaterialCommunityIcons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageDetailsScreen;