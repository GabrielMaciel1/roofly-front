import { create } from 'zustand';

interface ListingCreationState {
  businessType: 'Venda' | 'Aluguel';
  category: string;
  title: string;
  description: string;
  price: string;
  cep: string;
  streetNumber: string;
  area: string;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  garageSpaces: number;
  condoFee: string;
  iptu: string;
  furnished: boolean;
  petsAllowed: boolean;
  financingAccepted: boolean;
  floor: string;
  elevator: boolean;
  position: string;
  showPhoneNumber: boolean;
  set: (data: Partial<ListingCreationState>) => void;
  reset: () => void;
}

const initialState = {
  businessType: 'Venda' as 'Venda' | 'Aluguel',
  category: '',
  title: '',
  description: '',
  price: '',
  cep: '',
  streetNumber: '',
  area: '',
  bedrooms: 0,
  suites: 0,
  bathrooms: 0,
  garageSpaces: 0,
  condoFee: '',
  iptu: '',
  furnished: false,
  petsAllowed: false,
  financingAccepted: false,
  floor: '',
  elevator: false,
  position: '',
  showPhoneNumber: false,
};

export const useListingCreationStore = create<ListingCreationState>((set) => ({
  ...initialState,
  set: (data) => set((state) => ({ ...state, ...data })),
  reset: () => set(initialState),
}));
