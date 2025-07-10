import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createMessageDetailsScreenStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    contactName: {
      flex: 1,
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      marginLeft: 16,
    },
    headerActions: {
      flexDirection: 'row',
    },
    actionButton: {
      marginLeft: 16,
      backgroundColor: colors.card,
      borderRadius: 12,
      width: 48,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
    },
    messagesList: {
      flexGrow: 1,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    messageBubble: {
      padding: 10,
      marginBottom: 10,
      maxWidth: '80%',
    },
    sentMessage: {
      alignSelf: 'flex-end',
      backgroundColor: colors.primary,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 2,
    },
    receivedMessage: {
      alignSelf: 'flex-start',
      backgroundColor: colors.card,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 10,
    },
    sentMessageText: {
      color: '#fff',
    },
    receivedMessageText: {
      color: colors.text,
    },
    sentMessageTime: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.7)',
      alignSelf: 'flex-end',
      marginTop: 5,
    },
    receivedMessageTime: {
      fontSize: 10,
      color: colors.description,
      alignSelf: 'flex-end',
      marginTop: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      backgroundColor: colors.background,
    },
    messageTextInput: {
      flex: 1,
      backgroundColor: colors.card,
      borderRadius: 24,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginRight: 10,
      color: colors.text,
    },
    sendButton: {
      backgroundColor: colors.primary,
      borderRadius: 24,
      width: 48,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dateSeparatorContainer: {
      alignItems: 'center',
      marginVertical: 10,
    },
    dateSeparatorText: {
      backgroundColor: colors.card,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      color: colors.text,
      fontSize: 12,
    },
  });
