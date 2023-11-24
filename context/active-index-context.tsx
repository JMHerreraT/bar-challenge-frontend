import { ActiveIndexContextType, MenuDefaultState } from '@/constants/menu.constants';
import React, { createContext, useState } from 'react';


export const ActiveIndexContext = createContext<ActiveIndexContextType>(MenuDefaultState);

const ActiveIndexContextProvider: React.FC<any> = ({ children }: any) => {
  const [activeIndex, setActiveIndex] = useState<string>();

  return (
    <ActiveIndexContext.Provider
      value={{
        activeIndex: activeIndex as string,
        setActiveIndex
      }}
    >
      {children}
    </ActiveIndexContext.Provider>
  );
};

export default ActiveIndexContextProvider;
