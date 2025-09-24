export type RootStackParamList = {
  Carousel: undefined;
  Login: undefined;
  Register: undefined;
  OtpVerification: { email: string }; // Nova rota para verificação de OTP
  ForgotPassword: undefined;
  Home: undefined;
  PropertyDetails: { propertyId: string };
  Settings: undefined;
  ThemeSelection: undefined;
  MessageDetails: { contactName: string };
  Filter: undefined;
  SearchList: undefined;
};

export type CreateListingStackParamList = {
  SelectCategory: undefined;
  CreateListing: { selectedCategory?: string };
};

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Saved: undefined;
  Messages: undefined;
  Profile: undefined;
  CreateListingTab: undefined;
};
