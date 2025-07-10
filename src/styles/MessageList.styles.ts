import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createMessageListStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    messageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
    },
    avatarContainer: {
      marginRight: 16,
    },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: 28,
    },
    onlineIndicator: {
      position: 'absolute',
      bottom: 2,
      right: 2,
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: colors.primary,
      borderWidth: 2,
      borderColor: colors.background,
    },
    messageContent: {
      flex: 1,
    },
    senderName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 4,
    },
    messageText: {
      fontSize: 14,
      color: colors.description,
    },
    messageInfo: {
      alignItems: 'flex-end',
    },
    timestamp: {
      fontSize: 12,
      color: colors.description,
      marginBottom: 8,
    },
    unreadBadge: {
      backgroundColor: colors.primary,
      borderRadius: 12,
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    unreadCountText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });
