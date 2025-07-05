import { StyleSheet } from 'react-native';
import { AppTheme } from '../theme/theme';

export const createFilterStyles = (colors: AppTheme) => StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
    },
    scrollContent: {
        paddingHorizontal: 20,
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        backgroundColor: colors.card,
        borderRadius: 25,
        padding: 4,
    },
    toggleButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: colors.primary,
    },
    toggleButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: colors.text,
    },
    propertyTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    propertyType: {
        width: '31%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 15,
        backgroundColor: colors.card,
    },
    propertyTypeText: {
        marginTop: 10,
        color: colors.text,
    },
    priceRangeContainer: {
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    priceRangeText: {
        color: colors.primary,
        fontWeight: 'bold',
    },
    graphPlaceholder: {
        height: 50,
        backgroundColor: colors.card,
        borderRadius: 10,
        marginBottom: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        backgroundColor: colors.background,
    },
    resetButton: {
        padding: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.border,
        flex: 1,
        alignItems: 'center',
        marginRight: 10,
    },
    resetButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.text,
    },
    applyButton: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
        backgroundColor: colors.primary,
        marginLeft: 0,
    },
    applyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputSeparator: {
        marginHorizontal: 10,
        color: colors.text,
    },
    pickerContainer: {
        backgroundColor: colors.card,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 12,
        width: 100,
    },
    pickerText: {
        color: colors.text,
    }
});