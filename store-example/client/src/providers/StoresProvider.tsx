
export default UserStore;
import { createContext, useContext, ReactNode } from 'react';
import UserStore from '../stores/UserStore';

interface StoresContextProps {
  userStore: UserStore;
}

const StoresContext = createContext<StoresContextProps | undefined>(undefined);

export const StoresProvider = ({ children }: { children: ReactNode }) => {
  const userStore = new UserStore();

  return (
    <StoresContext.Provider value={{ userStore }}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStores = () => {
  const context = useContext(StoresContext);
  if (!context) {
    throw new Error('useStores must be used within a StoresProvider');
  }
  return context;
};
