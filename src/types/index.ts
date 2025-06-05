export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  phone?: string;
  created_at?: string;
}

export interface Property {
  id?: number;
  title: string;
  description?: string;
  price: number;
  type: 'aluguel' | 'venda';
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  images?: string[];
  user_id?: number;
  created_at?: string;
}

export type RootStackParamList = {
  Carousel: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  MainApp: undefined;
  Home: undefined;
  PropertyDetails: { propertyId: number };
  AddProperty: undefined;
}; 

export type MainTabParamList = {
  Home: undefined;
  AddProperty: undefined;
};

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Saved: undefined;
  Messages: undefined;
  Profile: undefined;
};

export interface Property {
    id: string;
    imovelType: string;
    preco: number;
    tipo: string;
    titulo: string;
    endereco: {
      bairro: string;
      cidade: string;
    };
  }
  
  export interface CardProps {
    data: Property;
  }
  