function cons(a, b)
{
    function pair(f)
    {
        return f(a, b); 
    }
    return pair;
}

//since JavaScript doesn't support arrays we have to implement it tuples as arrays for example.

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
