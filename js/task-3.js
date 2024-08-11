console.log("\nHome Work 3 - task 3");

function filterArray(numbers, value) {
    const result = [];
    for (const val of numbers) {
        if (val > value) {
            result.push(val);
        }
    }

    return result;
 }

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
