import { useCallback, useState } from "react";

const useMousePainting = () => {
    const [mousePainting, setMousePainting] = useState<{
    isDown: boolean;
    isSpot: boolean;
    }>({ isDown: false, isSpot: false });

    const onMouseDown = useCallback((isSpotClicked: boolean,callBack: Function) => {
        console.log('down')
        setMousePainting({
            isDown: true,
            isSpot: isSpotClicked
        })
        callBack()
    }, [mousePainting])
    
    const onMouseOver = useCallback((isOverSpot: boolean,callBack: Function) => {
 
        if (mousePainting.isDown) {
            console.log(isOverSpot, 'isOverSpot')
            console.log(mousePainting.isSpot,'mousePainting.isSpot')
           if((isOverSpot && mousePainting.isSpot) || (!isOverSpot && !mousePainting.isSpot)){
            console.log('over')
            callBack() }
        }
    }, [mousePainting])
    const onMouseUp = useCallback(() => {
        console.log('up')
        setMousePainting({
            isDown: false,
            isSpot: false
        })
    }, [mousePainting])

    const onMouseLeave = useCallback(() => {
        setMousePainting({isDown: false, isSpot: false})
    }, [setMousePainting])
    
    return {
        mousePainting, onMouseDown,onMouseOver,onMouseUp,onMouseLeave
    }
}
export default useMousePainting