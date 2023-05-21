// 关于递归

// sum的递归计算 在Haskell中没有循环
const sum = (arr) => {
    if (arr.length === 1) return arr[0]
    return arr[0] + sum(arr.splice(1))
}

console.log(sum([10,1,2,1,1,1,1,1,3]))

const quickSort_1 = (arr) => {
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
    return [...quickSort_1(smallArr), val, ...quickSort_1(bigArr)]
}

console.log(quickSort_1([3, 2, 119, 7, 8, 70, 20, 20]))
// 第一版本由于使用了各种函数 并且包含删除复制元素，创建数组等，对性能有消耗，所以进行优化
const quickSort_2 = () => {
    const midIndex = Math.floor((arr.length - 1) / 2)
}

/**
 * 散列表 Hash
 * 散列表通常是以key；value的形式进行存储的，
 * 通过key对value进行查询，在存储方面，
 * 他的数据结构是数组加链表，存在一个散列函数，将通过key
 * 计算出一个数组的index，通过index在数组中获取值，所以复杂度通常是O(1)
 * 当保存的数据过多，就要为所有的key生成index，并且不能重复，所以散列函数
 * 相当关键。如何计算能生成不同的index，无论采取何种办法，但是在理论上不能完全避免
 * 所以当存在生成了相同的index后，这种情况称之为hash冲突。那么，取值必然出错，所以在此基础上，如果不同的
 * key生成了相同的index，就生成一个链表进行存储，保证可以查到。所以总的来说就是数组+链表的
 * 结构。
 * 最佳与最糟
 * 最佳情况不用考虑，需要考虑最糟情况，既所有的key计算出来的index都相同，这样再查找value的话，
 * 那么这种就变成了链表查询。链表查询的复杂度是O(n).
 * 另外，hash计算还有一个因素，填装因子，填装因子的计算为已占用的位置/数组总长度，填装因子越大，那么
 * 那么说明数组位置占用越多，那么hash冲突的概率就变大。所以当填装因子到达0.7，通常会对数组进行扩容。
 * 可能会将长度扩大一倍，这个不同算法而定。
 *  */ 