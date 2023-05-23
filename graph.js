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
                queue.push('')
                queue.push(...o.neighbor)
            } else {
                return true
            }
        }
    }
    return false
}
console.log(search('2'))