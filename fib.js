function fib(n)
{
    if (n == 0)
        return 0;
    else if (n <= 2)
        return 1;
    else 
        return fib(n-1) + fib(n-2);
}

for (let i = 0; i < 10; i++)
{
    console.log(fib(i));
    console.log(fib_f(i));
}


function fib_f(n)
{
    if (n == 0)
        return 0;
    
    if (n <= 2)
        return 1;
    else {
        let a = 1;
        let b = 1;
        let c = 0;
        for (let i = 3; i <= n; i++)
        {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}