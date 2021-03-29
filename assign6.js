function factorsOfNumber(n)
{
    let i;
    for(i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            console.log("The factors of number ",n,"is: " ,i)
        }
    }
}
factorsOfNumber(prompt("Enter the Number: "));