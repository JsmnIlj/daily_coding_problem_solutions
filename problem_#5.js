/*
cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. 
For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
Given this implementation of cons:
        def cons(a, b):
            def pair(f):
                return f(a, b)
            return pair
Implement car and cdr.
*/

function cons(a, b)
{
    function pair(f)
    {
        return f(a, b); 
    }
    return pair;
}

//since JavaScript doesn't support tuples we have to implement it as arrays for example.

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
