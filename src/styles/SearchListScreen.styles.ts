import { StyleSheet } from 'react-native';
import { AppTheme } from '../theme/theme';

export const createSearchListStyles = (colors: AppTheme) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: colors.card,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: colors.text,
  },
  filterButton: {
    padding: 5,
  },
  currentLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  currentLocationText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  resultsHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  resultsCountText: {
    fontSize: 14,
    color: colors.description,
  },
  listContentContainer: {
    paddingBottom: 20,
  },
  resultItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  resultImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  resultTextContainer: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.text,
  },
  resultLocation: {
    fontSize: 14,
    color: colors.description,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundIconContainer: {
      width: 120,
      height: 120,
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
      backgroundColor: colors.card,
  },
  notFoundTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: colors.text,
  },
  notFoundSubtitle: {
      fontSize: 16,
      textAlign: 'center',
      paddingHorizontal: 40,
      color: colors.description,
  }
});