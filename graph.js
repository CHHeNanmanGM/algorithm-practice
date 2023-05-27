// 广度优先搜索
// 广度优先搜索是图算法的一种。
// 图是包含多个节点，节点之间使用线进行连接，两个相邻的节点称为邻居节点。
/**
 * 用以实现在图中进行搜索的算法，主要被用来搜索是否能够到达，以及最少段数的问题。
 * 为了实现这种算法，需要使用一种数据结构-队列，为了保证最少段数，必须使用队列，
 * 因为在查找节点时，如果不按照顺序进行查找，就不能保证最少段数的问题。
 */
const graph = {
    name: '1',
    neighbor: [
        {
            name: '2',
            neighbor: [
                {
                    name: '5',
                    neighbor: [{
                        name: '7',
                        neighbor: []
                    }]
                },
                {
                    name: '6',
                    neighbor: []
                },
            ]
        },
        {
            name: '3',
            neighbor: [
                {
                    name: '5',
                    neighbor: [{
                        name: '7',
                        neighbor: []
                    }]
                }
            ]
        },
        {
            name: '4',
            neighbor: [
                {
                    name: '7',
                    neighbor: [
                        {
                        name: '5',
                        neighbor: [
                            {
                                name: '7',
                                neighbor: []
                            }
                        ]
                        }
                    ]
                }
            ]
        }

    ]
}

// 判断当前树是否包含指定的节点
const search = (name)=> {
    const queue = []
    queue.push(graph)
    while (queue.length) {
        const o = queue.shift()
        if (!o.down)  {
            o.down = true
            if(o.name !== name) {
                // queue.push('')
                queue.push(...o.neighbor)
            } else {
                return true
            }
        }
    }
    return false
}
// console.log(search('2'))

// 找到最佳路径
const graphObj = {
    start: {
        a: 1,
        b: 2
    },
    a: {
        c: 1, 
        d: 3,
    },
    b: {
        a: 1,
        d: 1,
        c: 1
    },
    d: {
        fin: 3
    },
    c: {
        fin: 1
    },
    fin: {}
}

const graphPath = {
    start: ['a', 'b'],
    a: ['c', 'd'],
    b: ['c', 'd', 'a'],
    c: ['fin'],
    d: ['fin']
}

// 获取最佳路径 狄克斯特拉算法 
/**
 * 狄克斯特拉算法 是一种树算法，在广度优先算法上增加了
 * 每条边上的权重，求得最佳得路径。
 * 主要思想是在每次循环中，找出开销最小得节点，
 * 并求出他的所有子节点的开销，并标记节点已经处理过，
 * 然后再处理没有标记后得节点，让开销小于之前路径的开销，
 * 那么就修改此节点得开销，并且修改路径，从而不断修正路径，
 * 找到最小路径。
 * 但此例没有考虑到负权边，如果需要考虑负权边需要使用贝尔曼-福德算法
 */
const getBestPath = (end = 'fin')=> {
    const cost = { start: 0, a: 1000, b: 1000, c: 1000, d: 1000, fin: 1000 }
    const parents = {}
    const costedNode = new Set()
    const findLowestCostNode = (i) => {
        if (i=== 1) return 'start'
        let min = 10000
        let nodeName = ''
        const keys = Object.keys(cost)
        for(let i = 0; i <= keys.length; i++) {
            const key = keys[i]
            if(costedNode.has(key)) continue
            if(cost[key]< min) {
                min = cost[key]
                nodeName = key
            }
        }
        return nodeName
    }
    let nodeName = findLowestCostNode(1)
    let nodeStarts = graphObj[nodeName]
    while(nodeStarts !== graphObj.fin) {
        const keys = Object.keys(nodeStarts)
        keys.forEach(item => {
            const curCost = cost[nodeName] + nodeStarts[item]
            if (cost[item] > curCost) {
                cost[item] = curCost
                parents[item] = nodeName
            }
        })
        costedNode.add(nodeName)
        nodeName = findLowestCostNode()
        nodeStarts = graphObj[nodeName]
        console.log(nodeName)
    }
    // 处理parents获取最佳路径
    const getPath = ()=> {
        const pathNodes = ['fin']
        let node = 'fin' 
        while(node != 'start') {
            node = parents[node]
            pathNodes.unshift(node)
        }
        return pathNodes.join('-')
    }
    console.log(getPath())
}
getBestPath()

