import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createFavoriteScreenStyles = (colors: typeof lightColors | typeof darkColors) => StyleSheet.create({
  highlightsContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  noFavoritesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  noFavoritesIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  noFavoritesText: {
    fontSize: 18,
    color: colors.description,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  filterOption: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  activeFilterOption: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    color: colors.text,
    fontWeight: 'bold',
  },
  activeFilterText: {
    color: colors.buttonText,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  modalCancelButton: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  modalRemoveButton: {
    backgroundColor: colors.primary,
  },
  modalButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalCancelButtonText: {
    color: colors.text,
  },
  modalRemoveButtonText: {
    color: colors.buttonText,
  },
});
