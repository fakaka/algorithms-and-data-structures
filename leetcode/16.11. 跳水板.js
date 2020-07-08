/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
    if (k == 0) return []
    if (shorter == longer) {
        return [shorter * k]
    }
    let res = []
    let cnt = shorter * k //一开始全部为shorter保证最小
    res.push(cnt) //把最小数丢入向量
    let de = longer - shorter
    for (let i = k; i > 0; i--) {
        cnt += de //减去1个shorter，加上一个longer
        // cnt = cnt - shorter + longer //减去1个shorter，加上一个longer
        res.push(cnt) //通过上行代码得到 次小数，丢入向量
    }
    return res
}

var divingBoard2 = function (shorter, longer, k) {
    if (k == 0) return []
    if (shorter == longer) return [shorter * k]
    let result = []
    let start = shorter * k
    for (let i = 0; i <= k; i++) {
        result[i] = start + (longer - shorter) * i
    }
    return result
}
