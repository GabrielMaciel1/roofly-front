import SearchMapScreen from './SearchMapScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  return <SearchMapScreen navigation={navigation} />;
};

export default SearchScreen;
