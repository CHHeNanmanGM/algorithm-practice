// 这里记录两个动态规划算法
/**
 * 动态规划与分治法很接近，但完全相反
 * 分治法是将大规模问题拆解成小规模问题，对小规模问题进行求解。
 * 而动态规划是先解决小问题，再解决逐步解决大问题。
 * 简而言之再思路上又少许不同，一个是自顶向下求解，一个是自底向上求解。
 * 动态规划是将自底向上的求解问题，但必须保证子问题是相互独立的，并不会相互影响产生
 * 不同的结果。否则整个问题很容易变成一个NP问题，导致无法求解，转而只能使用贪婪算法，求解一个
 * 近似值。
 */

// 求解两字符串最长公共字符串
const findCommonStr = (str1, str2) => {
    const str1Array = str1.split('')
    const str2Array = str2.split('')
    const map = new Map()
    console.log(str1Array)
    for(let i = 0; i < str1Array.length;i++) {
        const code1 = str1Array[i]
        for(let j = 0; j < str2Array.length; j++) {
            // 检查是否有与此单词相同的元素
            const code2 = str2Array[j]
            if (code2 === code1) {
                const value = map.get(`${i - 1}-${j - 1}`) || 0
                map.set(`${i}-${j}`, value + 1)
            }
        }
    }
    let max = 0 
    for( let val of map.values()) {
        max = Math.max(val, max)
    }
    return max
}


console.log(findCommonStr('cdeddace', 'deacedd'))