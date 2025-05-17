import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { LogBox } from 'react-native';
import App from './App';

// Ignorar warnings específicos (opcional)
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

// Registrar o componente principal
registerRootComponent(App);