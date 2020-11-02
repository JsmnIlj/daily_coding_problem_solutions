// coding problem #1
function addingUpToK(arr, k)
{
    for(var i = 0; i < arr.length; i++)
    { 
        for(var j = i + 1; j < arr.length; j++)
        {
            if(arr[i] + arr[j] === k)
            {
                return true;
            }            
        }
    }
}

//coding problem #2 FIX ASAP
function multArrElemWithoutI(arr)
{
  var newArr = [];
  for(var i = 0; i < arr.length; i++)
  {
    var temp = arr[i];
    for(var j = i + 1;j < arr.length; j++)
    {
        i === 0 ? temp = (arr[i] + 1) * arr[j] : temp *= arr[j];
    }  
    temp = temp / arr[i];
    newArr.push(temp);
  }
  return newArr;
}

//coding problem #3
//to be solved.

//coding problem #4
//to be solved.

//coding problem #5
function cons(a, b)
{
    function pair(f)
    {
        return f(a, b); 
    }
    return pair;
}
    //implementation in arrays since JavaScript doesn't support tuples
function consJS(a, b)
{
    {
        return [a, b];    
    }
}

function car(pair)
{
    var first = pair[0];
    return first;
}

function cdr(pair)
{
    var second = pair[1];
    return second;
}

//coding problem #6
//to be solved.

//coding problem #7
//to be solved.

//coding problem #8



//main function to test other functions
function main()
{
    console.log(consJS(1,2));
    console.log(car([3, 6]));
    console.log(cdr([[1,2],[3,4]]));
}

/*------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    main();
});
