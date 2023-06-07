import { useCallback } from "react"
import useAlgo from "./useAlgo"

const useToggleCell = () => {
    const { setTable, table} = useAlgo()
    return useCallback((cell: [number, number]) => {
       const tmpTable = [...table]
        tmpTable[cell[0]][cell[1]] = tmpTable[cell[0]][cell[1]] === 1 ? 0 : 1
        setTable(tmpTable)
    },[table,setTable])
}
export default useToggleCell