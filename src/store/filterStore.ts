import { create } from 'zustand';

interface FilterState {
  buyOrSell: 'buy' | 'sell';
  propertyType: string;
  priceRange: [number, number];
  setBuyOrSell: (buyOrSell: 'buy' | 'sell') => void;
  setPropertyType: (propertyType: string) => void;
  setPriceRange: (priceRange: [number, number]) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  buyOrSell: 'buy',
  propertyType: 'apartment',
  priceRange: [400, 3400],
  setBuyOrSell: (buyOrSell) => set({ buyOrSell }),
  setPropertyType: (propertyType) => set({ propertyType }),
  setPriceRange: (priceRange) => set({ priceRange }),
}));
