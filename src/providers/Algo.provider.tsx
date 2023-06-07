import { ReactNode, createContext, useState } from "react";

interface IAlgoProvider {
  isStarted?: boolean;
}
const AlgoProvider = createContext<IAlgoProvider>({});

const Algo: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [algoState, setAlgoState] = useState<IAlgoProvider>({
    isStarted: false,
  });
  return (
    <AlgoProvider.Provider value={{ isStarted: algoState.isStarted }}>
      {children}
    </AlgoProvider.Provider>
  );
};
export default Algo;
