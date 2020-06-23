// write a function that takes an unsorted array and return it sorted
// break up array into halves until you have arrays that are empty or have on element
// call mergeSort recursively until arrays have length is less or equal to 1
// once you have smaller sorted arrays merge thenwith other sorted arrays until full length
// once array has been merged together return the merged sorted array

function mergeSort(array) {

    function merge(array1, array2) {

        let sortedArr = [];

        while (array1.length > 0 || array2.length > 0) {
            if (array1.length === 0) {
                sortedArr = sortedArr.concat(array2);
                break;
            } if (array2.length === 0) {
                sortedArr = sortedArr.concat(array1)
                break;
            } if (array1[0] < array2[0]) {
                sortedArr.push(array1.shift());
            } else {
                sortedArr.push(array2.shift());
            }
        }

        return sortedArr;
    }

    function spliceArr(arr) {

        if (arr.length === 1) {
            return arr;
        }

        let i = Math.floor(arr.length / 2)
        let arr1 = arr.splice(0, i)
        let arr2 = arr

        return merge(spliceArr(arr1), spliceArr(arr2));
    }

    return spliceArr(array)
}



console.log(mergeSort([4, 9, 5, 10, 54, 23, 1, 8, 6, 34, 2, 67, 33, 12, 65, 78, 43, 84, 62, 908, 186, 589, 245, 3, 7, 11, 13, 14, 24, 25, 27, 47, 48, 49]))
