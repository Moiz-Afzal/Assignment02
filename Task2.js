const sumOfMultiples = function (a,b,c)
{
    var sum = 0;
    for(let i = 0; i< c;i++)
    {
        
        if(i%a == 0)
        {
            sum += i;
        }
        else if(i%b == 0)
        {
            sum += i;
        }
    }
    return sum;
}

module.exports = sumOfMultiples;