let fac = function (num) {
    if (num==1) return 1
    return num*fac (num-1)

}
console.log(fac(6))

