import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

interface SearchAutocompleteProps {
  visible: boolean
  data: string[]
  onSelect: (item: string) => void
  colors: any
  styles: any
}

export const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({ visible, data, onSelect, colors, styles }) => {
  if (!visible || data.length === 0) return null
  return (
    <View style={[styles.autocomplete, { backgroundColor: colors.background, borderColor: colors.border }]}> 
      <FlatList
        data={data}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelect(item)} style={{ padding: 10 }}>
            <Text style={{ color: colors.text }}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}