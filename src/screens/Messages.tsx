import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MessageList from '../components/MessageList';
import { useTheme } from '../contexts/ThemeContext';
import { createMessagesScreenStyles } from '../styles/MessagesScreen.styles';

const messages = [
  {
    id: 1,
    sender: 'Jenny Wilson',
    timestamp: '10.04',
    content: 'See you thursday',
    avatar: require('../../assets/perfil.jpeg'),
    unread: 1,
    online: true,
  },
  {
    id: 2,
    sender: 'Jane Cooper',
    timestamp: '09.40',
    content: 'Soo great!!!',
    avatar: require('../../assets/perfil.jpeg'),
    online: false,
  },
  {
    id: 3,
    sender: 'Brooklyn Simmons',
    timestamp: '09.15',
    content: 'Pretty colors too!',
    avatar: require('../../assets/perfil.jpeg'),
    online: false,
  },
  {
    id: 4,
    sender: 'Wade Warren',
    timestamp: '08.00',
    content: 'Still doing this man',
    avatar: require('../../assets/perfil.jpeg'),
    online: true,
  },
  {
    id: 5,
    sender: 'Leslie Alexander',
    timestamp: 'Yesterday',
    content: "That's awesome!",
    avatar: require('../../assets/perfil.jpeg'),
    online: true,
  },
  {
    id: 6,
    sender: 'Kathryn Murphy',
    timestamp: '12/25/22',
    content: 'Soo great!!!',
    avatar: require('../../assets/perfil.jpeg'),
    online: false,
  },
  {
    id: 7,
    sender: 'Eleanor Pena',
    timestamp: '12/24/22',
    content: 'Eleanor Pena',
    avatar: require('../../assets/perfil.jpeg'),
    online: false,
  },
];

export default function Messages() {
  const colors = useTheme();
  const styles = createMessagesScreenStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Message</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="dots-horizontal" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={colors.description}
        />
        <MaterialCommunityIcons name="magnify" size={20} color={colors.description} />
      </View>
      <MessageList messages={messages} />
    </View>
  );
}