import { useCallback } from "react"
import useAlgo from "./useAlgo"

const useShuffle = () => {
    const {setTable, tableSize } = useAlgo()

    return useCallback(() => {
        const newArray = [];
        for (let i = 0; i < tableSize.height; i++) {
            const row = [];
            for (let j = 0; j < tableSize.width; j++) {
                const randomValue = Math.random() < 0.5 ? 0 : 1;
                row.push(randomValue);
            }
            newArray.push(row);
        }
        setTable(newArray)
    },[tableSize])
}
export default useShuffle