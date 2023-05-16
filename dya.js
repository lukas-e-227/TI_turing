
for (let i = 0; i < 20; i++)
{
    console.log("N = " + i + " dya = " + dya(i) + " ad3 = " + ad3(i));
}
/*
for (let i = 0; i < 20; i++)
{
    console.log(`x: ${dya(i)} 2^(lg(x)) + x: ${dya(trick(i))}`);
}
*/



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

function ad3(n)
{
    let ad3 = [' '];
    for (let i = 0; i < n; i++)
    {
        let carry = true;
        for (let j = 0; j < ad3.length; j++)
        {
            if (ad3[j] == ' ' && carry)
            {
                ad3[j] = '1';
                carry = false;
            }
            else if (ad3[j] == '1' && carry)
            {
                ad3[j] = '2';
                carry = false;
            }
            else if (ad3[j] == '2' && carry)
            {
                ad3[j] = '3';
                carry = false;
            }
            else if (ad3[j] == '3' && carry)
            {
                ad3[j] = '1';
                ad3.push(' ');
            }
        }
    }
    return ad3.reverse().filter((e) => e != ' ');
}

function dya_r(n)
{
    let s = 0;
    for (let i = 0; i < n.length; i++)
    {
        s += parseInt(n[i]) * Math.pow(2,n.length - 1 - i);
    }
    return s;
}