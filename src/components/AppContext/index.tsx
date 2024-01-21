import React, { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface AppContextType {
  globalKey: string | null;
  setKey: Dispatch<SetStateAction<string | null>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [globalKey, setGlobalKey] = React.useState<string | null>(null);

  const setKey: AppContextType['setKey'] = (key) => {
    setGlobalKey((prevState) => {
      if (typeof key === 'function') {
        return key(prevState);
      }
      return key;
    });
  };

  return (
    <AppContext.Provider value={{ globalKey, setKey }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext (): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
