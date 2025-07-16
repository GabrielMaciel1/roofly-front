import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 24,
      textAlign: 'center',
    },
    section: {
      marginBottom: 16,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 8,
    },
    input: {
      backgroundColor: colors.card,
      color: colors.text,
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    imagePickerButton: {
      backgroundColor: colors.card,
      padding: 20,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: colors.border,
      borderStyle: 'dashed',
      height: 150,
    },
    imagePickerText: {
      color: colors.textSecondary,
      marginTop: 10,
      fontSize: 14,
      textAlign: 'center',
    },
    radioGroupContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: colors.card,
      borderRadius: 8,
      padding: 8,
    },
    radioButton: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: colors.border,
    },
    radioButtonSelected: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    radioButtonText: {
      color: colors.text,
      fontWeight: 'bold',
    },
    radioButtonTextSelected: {
      color: colors.buttonText,
    },
    selectContainer: {
      backgroundColor: colors.card,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 12,
    },
    selectPlaceholder: {
      color: colors.textSecondary,
      fontSize: 16,
      marginBottom: 8,
    },
    selectOption: {
      paddingVertical: 8,
      paddingHorizontal: 4,
    },
    selectOptionSelected: {
      backgroundColor: colors.primary,
      borderRadius: 4,
    },
    selectOptionText: {
      color: colors.text,
      fontSize: 16,
    },
    selectOptionTextSelected: {
      color: colors.buttonText,
    },
    stepperContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.card,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 8,
    },
    stepperButton: {
      backgroundColor: colors.button,
      padding: 8,
      borderRadius: 4,
    },
    stepperButtonText: {
      color: colors.buttonText,
      fontWeight: 'bold',
      fontSize: 18,
    },
    stepperValue: {
      color: colors.text,
      fontSize: 16,
      fontWeight: 'bold',
    },
    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.card,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 12,
    },
    button: {
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 20,
    },
    primaryButton: {
      backgroundColor: colors.primary,
    },
    buttonText: {
      color: colors.buttonText,
      fontWeight: 'bold',
      fontSize: 18,
    },
  });
