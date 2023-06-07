import { useCallback } from "react"
import useAlgo from "./useAlgo"
import { clearTable } from "../service/algo.service"

const useRun = () => {
    const { table, setTable} = useAlgo()
    return useCallback(() => {
        const tmp = clearTable([...table])
        setTable(tmp)
    },[table, setTable])
}
export default useRun