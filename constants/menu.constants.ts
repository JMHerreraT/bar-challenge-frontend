import { Dispatch, SetStateAction } from 'react'

export const MenuDefaultState: ActiveIndexContextType = {
    activeIndex: '',
    setActiveIndex: (): void => {
        // default state
    }
  };

  export interface ActiveIndexContextType {
    activeIndex: string;
    setActiveIndex: Dispatch<SetStateAction<string | undefined>>;
  }