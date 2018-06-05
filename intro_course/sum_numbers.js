/**
 * @param  {} numbersToSum : array of numbes
 */
module.exports = function(numbersToSum) 
{
    let sum = 0,
        i = 0,
        l = numbersToSum.length;
        console.log(numbersToSum.length);
        while ( i < l)
        {
            sum += numbersToSum[i];
            console.log(sum, "sum");
            ++i;
        }

    return sum;
}