import MessageList from '../components/MessageList';
import React from 'react';
import { View, Text } from 'react-native';
import useTheme from '../theme/ThemeContext';
import { createMessagesScreenStyles } from '../styles/MessagesScreen.styles';

const messages = [
  {
    id: 1,
    sender: 'John Doe',
    timestamp: new Date('2024-06-11'),
    content:
      'Olá, estou interessado em saber mais sobre a casa que você está vendendo ou alugando.',
  },
  {
    id: 2,
    sender: 'Jane Smith',
    timestamp: new Date('2024-06-11'),
    content:
      'Olá John, fico feliz que tenha interesse na casa. Posso te fornecer mais informações.',
    unread: 1,
  },
  {
    id: 3,
    sender: 'John Doe',
    timestamp: new Date('2024-06-11'),
    content:
      'Ótimo! Poderia me dizer mais sobre o número de quartos e banheiros, e se há algum espaço externo?',
    unread: 1,
  },
  {
    id: 4,
    sender: 'Jane Smith',
    timestamp: new Date('2024-06-11'),
    content: 'Claro, a casa possui 3 quartos, 2 banheiros e um belo jardim nos fundos.',
    unread: 1,
  },
  {
    id: 5,
    sender: 'John Doe',
    timestamp: new Date('2024-06-11'),
    content:
      'Isso soa excelente! Você poderia me enviar algumas fotos para que eu possa ter uma melhor noção?',
    unread: 1,
  },
  {
    id: 6,
    sender: 'Jane Smith',
    timestamp: new Date('2024-06-11'),
    content: 'Com certeza, vou enviar as fotos agora mesmo.',
    unread: 1,
  },
];

export default function Messages() {
  const colors = useTheme();
  const styles = createMessagesScreenStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mensagens</Text>
      </View>
      <MessageList messages={messages} />
    </View>
  );
}