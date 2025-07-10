import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createMessageListStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    messageContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      backgroundColor: colors.card,
      marginBottom: 10,
      borderRadius: 10,
      marginHorizontal: 10,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 50,
      marginRight: 10,
    },
    messageContent: {
      flex: 1,
    },
    messageHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    senderName: {
      fontWeight: 'bold',
      color: colors.text,
    },
    unreadBadge: {
      backgroundColor: colors.button,
      borderRadius: 50,
      height: 20,
      width: 20,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    unreadCountText: {
      color: colors.buttonText,
      fontSize: 12,
    },
    timestamp: {
      fontSize: 12,
      color: colors.description,
    },
    messageText: {
      marginTop: 5,
      maxWidth: 250,
      color: colors.text,
    },
  });
