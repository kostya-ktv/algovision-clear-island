import { ReactNode, createContext, useMemo, useState } from "react";

interface IAlgoProvider {
  tableSize: {
    height: number;
    width: number;
  };
  setTableSize: Function;
  table: number[][];
  setTable: Function;
  isRunning: boolean;
  setIsRunning: Function;
}
export const AlgoContext = createContext<IAlgoProvider>({} as any);

export const AlgoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tableSize, setTableSize] = useState<IAlgoProvider["tableSize"]>({
    height: 15,
    width: 15,
  });
  const [table, setTable] = useState<IAlgoProvider["table"]>([[]]);
  const [isRunning, setIsRunning] = useState<IAlgoProvider["isRunning"]>(false);

  const contextValue: IAlgoProvider = useMemo(
    () => ({
      setTable,
      setTableSize,
      table,
      tableSize,
      isRunning,
      setIsRunning,
    }),
    [table, tableSize, tableSize]
  );

  return (
    <AlgoContext.Provider value={contextValue}>{children}</AlgoContext.Provider>
  );
};
