// 关于递归

// sum的递归计算 在Haskell中没有循环
const sum = (arr) => {
    if (arr.length === 1) return arr[0]
    return arr[0] + sum(arr.splice(1))
}

console.log(sum([10,1,2,1,1,1,1,1,3]))

const quickSort = (arr) => {
    if (arr.length < 2) return arr
    const midIndex = Math.floor((arr.length - 1) / 2)
    const [val] = arr.splice(midIndex, 1)
    const smallArr = []
    const bigArr = []
    arr.forEach(element => {
       if (element > val) {
        bigArr.push(element)
       } else {
        smallArr.push(element)
       }
    });
    return [...quickSort(smallArr), val, ...quickSort(bigArr)]
}
console.log(quickSort([3, 2, 119, 7, 8, 70, 20, 20]))