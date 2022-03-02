
// expect [2, 5, 1, 2, 3, 5, 1, 2, 4] to return 2
// expect [2, 1, 1, 2, 3, 5, 1, 2, 4] to return 1
// expect [2,3,4,5] to return undefined

const firstRecurringCharacter = arr => {
    // naive approach - O(n^2)
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; i < arr.length; i++){
            if (arr[i] === arr[j]) {
                return input[i]
            }
        }
    }
}


firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4] )


const firstRecurringCharacterAlt = arr => {
        // solved using hashtables
        let map = {}

        for(let i = 0; i < arr.length; i++){
            if (map[arr[i]] !== undefined){
                return arr[i]
            } else{
                map[input[i]] = i
            }
        }
        return undefined;    
}
firstRecurringCharacterAlt([2, 5, 1, 2, 3, 5, 1, 2, 4])