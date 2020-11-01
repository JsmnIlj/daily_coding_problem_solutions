/*
    Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
    For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
    
    Follow-up: what if you can't use division?
*/

//Primary solution without follow-up:

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

//This solution isn't correct yet. Something is wrong with the loops, so I'm trying to figure that out.
