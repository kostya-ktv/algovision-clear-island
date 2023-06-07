import { useContext } from "react"
import { AlgoContext } from "../providers/Algo.provider"

const useAlgo = () => {
    const context = useContext(AlgoContext)
    return {...context}
}
export default useAlgo