function getMean(arr) {
    return arr.reduce( (x,a) => Number(x)+Number(a))/arr.length;
}

function getMode(arr) {
    return Number(Object.values(
        arr.reduce( (count, e) => {
            if (!(e in count)) {
                count[e] = [0, e];
            }
            count[e][0] ++;
            return count;
        }, {})
    ).reduce( (a, v) => v[0] < a[0] ? a: v, [0, null])[1]);
}

function getMedian(arr) {
    const sorted = arr.map(x => Number(x)).sort( (a,b) => a-b);
    return 0.5 * (sorted[Math.floor( (sorted.length-1)/2)] + sorted[Math.floor( (sorted.length)/2)]);
    
} 

module.exports = {getMean, getMode, getMedian};