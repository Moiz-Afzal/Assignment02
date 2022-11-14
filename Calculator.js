const sum = function (a,b)
{
    return a+b;
}

const multi = function (a,b)
{
    if(a == 0 || b==0 || (a==0 && b==0))
        return 0;
    else
        return a*b;
}

const subtact = function (a,b)
{
    return a-b;
}

const divide = function (a,b)
{
    if(b==0)
        return NaN;
    else
        return a/b;
}

const power = function (a,b)
{
    return Math.pow(a,b);
}

const roundOff = function (a)
{
    return Math.round(a);
}

const ceil = function (a)
{
    return Math.ceil(a);
}
module.exports.sum = sum;
module.exports.subtact = subtact;
module.exports.multi = multi;
module.exports.divide = divide;
module.exports.power = power;
module.exports.roundOff = roundOff;
module.exports.ceil = ceil;
