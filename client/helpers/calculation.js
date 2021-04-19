export const getSum = (lists, obj) => {
  var total = 0
    for ( var i = 0, _len = lists.length; i < _len; i++ ) {
        total += lists[i][obj]
    }
    return total
};