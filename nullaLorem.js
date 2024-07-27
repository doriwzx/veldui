function bisect(range, array) {
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === range) {
            return mid;
        } else if (array[mid] < range) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}
