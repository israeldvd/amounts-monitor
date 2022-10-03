const sortedIndex = (array, value) => {
    var low = 0,
        high = array.length;

    while (low < high) {
        var mid = (low + high) >>> 1;
        if (array[mid] < value) low = mid + 1;
        else high = mid;
    }
    return low;
};

const insertAt = (arr = [], num) => {
    const position = sortedIndex(arr, num);
    for (let i = position; typeof arr[i] !== "undefined"; i++) {
        // swapping without using third variable num += arr[i];
        arr[i] = num - arr[i];
        num -= arr[i];
    }
    arr.push(num);
};

export default insertAt;
