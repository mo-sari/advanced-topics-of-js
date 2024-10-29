// new Section: Performance API

// let's create an array and try to sort it with two differenct approaches and take a look at performance with Performance API:



function bubbleSort(arr){
    let len = arr.length;
    for(let i =0; i< len; i++){
        for (let j = 0; j < len - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// ===========================================================
const largeArray = Array.from({length: 1000}, ()=>{
    return Math.floor(Math.random() * 1000);
});

const arrayForNativeSort = [...largeArray];
const arrayForBubbleSort= [...largeArray];

// ===========================================================
performance.mark('nativeStart');
arrayForBubbleSort.sort((a, b) => a-b);
performance.mark('nativeEnd');

performance.measure('nativePerformance', 'nativeStart', 'nativeEnd');
// ===========================================================

performance.mark('bubbleStart');
bubbleSort(arrayForBubbleSort);
performance.mark('bubbleEnd');

performance.measure('bubblePerformance', 'bubbleStart', 'bubbleEnd');
// ===========================================================

const nativeDuration = performance.getEntriesByName('nativePerformance')[0].duration;
const bubbleDuration = performance.getEntriesByName('bubblePerformance')[0].duration;

console.log(nativeDuration, bubbleDuration);