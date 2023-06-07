export const clearTable = (table: number[][]) => {
    let runningIndex = [0, 0]

    const run = () => {
        
        for (let externalIndex = runningIndex[0]; externalIndex < table.length; externalIndex++) {

            for (let internalIndex = runningIndex[1]; internalIndex < table.length; internalIndex++) {
                const currentElement = table[externalIndex][internalIndex]
                runningIndex[1]++
                
                if (currentElement) {
                    //element [number,number]
                    let checkedElements: Array<{element: any, isChecked: boolean}> = []
                    const currentIndexElement = [externalIndex, internalIndex]
                    checkedElements.push({ element: currentIndexElement, isChecked: false })
                    
                    while (checkedElements.length && checkedElements.some(el => el.isChecked === false)) {

                        const unCheckedIndex = checkedElements.findIndex(el => el.isChecked === false)
                        const siblings = getPositiveSiblings(checkedElements[unCheckedIndex].element, table)
                        const filteredSiblings = siblings.filter(sib => {
                            const exists = checkedElements
                                .filter(checkEl => sib.element![0] === checkEl.element[0] && sib.element![1] === checkEl.element[1])
                            if(!exists.length) return sib
                        })
                        checkedElements = [...checkedElements, ...filteredSiblings]
                        checkedElements[unCheckedIndex].isChecked = true
                        
                    }
                    const spots = checkedElements.map(el => el.element)
                    removeSpots(spots)
                   
                }
                
            }
            /*  not to reset the value on the last element in the island 
                and get the last runningIndex
            */
            if (externalIndex !== table.length - 1) runningIndex[1] = 0
            
            runningIndex[0]++
        }
    }
    const removeSpots = (spots: number[][]) => {

        if (spots.length > 1) {
            spots.forEach(spot => {
                table[spot[0]][spot[1]] = 0
            })
        }  
    }
    const getPositiveSiblings = (currentIndex: number[], incomingIsland: number[][]) => {
        let top = undefined
        let bottom = undefined
        let left = undefined
        let right = undefined
        try {
            if (incomingIsland[currentIndex[0] - 1][currentIndex[1]]) {
                top = [currentIndex[0] - 1, currentIndex[1]]
            }
        } catch{}
        try {
            if (incomingIsland[currentIndex[0] + 1][currentIndex[1]]) {
                bottom = [currentIndex[0] + 1, currentIndex[1]]
            }
        } catch{}
        try {
            if (incomingIsland[currentIndex[0]][currentIndex[1] - 1]) {
                left = [currentIndex[0], currentIndex[1] - 1]
            }
        } catch{}
        try {
            if (incomingIsland[currentIndex[0]][currentIndex[1] + 1]) {
                right = [currentIndex[0], currentIndex[1] + 1]
            }
        } catch{}

        return [top, bottom, left, right]
            .filter(el => !!el)
            .map(el => ({ element: el, isChecked: false }))
    }

    while (runningIndex[0] !== table.length && runningIndex[1] !== table.length) {
        run()  
    }
    
    return table
}
