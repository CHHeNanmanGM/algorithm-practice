const sortArray = [2, 10, 12, 19, 21, 32, 63, 69, 98, 101, 103]
	
/**
 * 二分法查找元素
 */
const splitSearch = (array, findNumber) => {
	let startIndex = 0
	let endIndex = array.length - 1
	while(startIndex <=  endIndex) {
		let midIndex = Math.floor((startIndex + endIndex) / 2)
		console.log(startIndex, endIndex)
		const curValue = sortArray[midIndex]
		if (curValue === findNumber) return midIndex
		// 当前值> findNumber 那么则将当前节点作为尾节点
		if(curValue > findNumber) {
			endIndex = midIndex - 1
		}
		// 当前值> findNumber 那么则将当前节点作为起始节点
		if(curValue < findNumber) {
			startIndex = midIndex + 1
		}
	}
	return null
}

console.log(splitSearch(sortArray, 102), "&&")