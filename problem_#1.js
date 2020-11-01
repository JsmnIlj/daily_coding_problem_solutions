/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

var k;
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
      /*  so far, this code satisfies all requirements of the problem. the following part doesn't work correctly but would be 
          my approach to include the possibility for a false statement. if you have any idea on how to solve this, feel free 
          to tell me. :)
          -------------------------------------------------------------------------------------------------------------------

              else
              {
                return false;
              }
      */
    }
  }
}
