import React, { createContext, useContext } from 'react';
import { lightColors } from '../theme/colors';

// O tipo para o nosso contexto de cores
type ColorsContextType = typeof lightColors;

// Criando o contexto com um valor padrão undefined
const ThemeContext = createContext<ColorsContextType | undefined>(undefined);

// Props para o nosso provider
interface ThemeProviderProps {
  children: React.ReactNode;
}

// O componente Provider que vai envolver nossa aplicação
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // O valor do contexto é simplesmente o objeto lightColors
  const contextValue = lightColors;

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook customizado para acessar as cores do tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Lança um erro se o hook for usado fora do ThemeProvider
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
