

for (let i = 0; i < 100; i++)
{
    let x = getRandomInt(50);
    let y = getRandomInt(50);
    let result = pr(sum(x, y));
    console.log(`X: ${x} Y: ${y} result: ${result}`);
}

function sum(a, b)
{
    return a + b;
}

function md(a, b)
{
    //console.log(`A: ${a} B: ${b}`);
    return a - b <= 0 ? 0 : a - b;
}

function pr(counter)
{
    if (counter <= 0)
    {
        return 0;
    }
    else {
        return md(counter - 1, pr(counter - 1));
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }