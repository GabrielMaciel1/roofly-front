import { StyleSheet } from 'react-native';

export const messageListStyles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
  },
  unreadBadge: {
    backgroundColor: 'red',
    borderRadius: 50,
    height: 20,
    width: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  unreadCountText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 1
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
  messageText: {
    marginTop: 5,
    maxWidth: 250
  },
});