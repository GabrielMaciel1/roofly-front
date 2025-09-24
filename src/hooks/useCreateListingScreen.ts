import { Alert } from 'react-native';
import { useListingCreationStore } from '../store/listingCreationStore';

export const useCreateListingScreen = () => {
  const {
    businessType, category, title, description, price, cep, streetNumber, area, bedrooms, suites, bathrooms, garageSpaces, condoFee, iptu, furnished, petsAllowed, financingAccepted, floor, elevator, position, showPhoneNumber, set, reset
  } = useListingCreationStore();

  const handleSubmit = () => {
    Alert.alert('Anúncio Publicado', 'Seu anúncio foi enviado para revisão.');
    // Lógica para enviar os dados do formulário
    reset();
  };

  return {
    businessType, category, title, description, price, cep, streetNumber, area, bedrooms, suites, bathrooms, garageSpaces, condoFee, iptu, furnished, petsAllowed, financingAccepted, floor, elevator, position, showPhoneNumber, set, handleSubmit
  };
};
