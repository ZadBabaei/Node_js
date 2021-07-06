function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function multi(a,b){
    return a*b
}
function div(a,b){
    if (b!=0){
        return a/b
    }
}

exports.add=add
exports.sub = sub
exports.multi= multi
exports.div=div