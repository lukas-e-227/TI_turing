/*
for (let i = 0; i < 10; i++)
{
    console.log("N = " + i + " dya = " + dya(i));
}
*/

for (let i = 0; i < 20; i++)
{
    console.log(`x: ${dya(i)} 2^(lg(x)) + x: ${dya(trick(i))}`);
}

function trick(i) 
{
    return Math.pow(2, dya(i).length) + i;
}

function dya(n)
{
    let dya = [' '];
    
    for (let i = 0; i < n; i++)
    {
        let carry = true;
        for (let j = 0; j < dya.length; j++)
        {
            if (dya[j] == ' ' && carry)
            {
                dya[j] = '1';
                carry = false;
            }
            else if (dya[j] == '1' && carry)
            {
                dya[j] = '2';
                carry = false;
            }
            else if (dya[j] == '2' && carry)
            {
                dya[j] = '1';
                dya.push(' ');
            }
        }
    }
    return dya.reverse().filter((e) => e != ' ');
}