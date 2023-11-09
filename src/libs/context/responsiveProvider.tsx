import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type WindowSize = {
    width: number;
    height: number;
};

type WindowContext = WindowSize & {
    isMobile: boolean;
};

export const WindowContext = createContext<WindowContext | null>(null);

type WindowContextProviderProps = {
    children: ReactNode;
};

export function WindowContextProvider({ children }: WindowContextProviderProps): JSX.Element {
    if(typeof window === "undefined"){
        return (
            <WindowContext.Provider value={{width:1000,height:1000,isMobile:false}}>{children}</WindowContext.Provider>
        )
    }
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: window?.innerWidth,
        height: window?.innerHeight
    });

    useEffect(() => {
        const handleResize = (): void =>
            setWindowSize({
                width: window?.innerWidth,
                height: window?.innerHeight
            });

        window?.addEventListener('resize', handleResize);
        return () => window?.removeEventListener('resize', handleResize);
    }, []);

    const value: WindowContext = {
        ...windowSize,
        isMobile: windowSize.width < 500
    };

    return (
        <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
    );
}

export function useResponsive(): WindowContext {
    const context = useContext(WindowContext);
  
    if (!context)
      throw new Error('useResponsive must be used within an WindowContextProvider');
  
    return context;
  }