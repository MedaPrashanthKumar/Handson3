function primeNumber(n)
{
    let i;

    for(i = 2; i <= n/2; i++)
    {
        if(n % i ==0)
         {
             break;
        }
    }

    if(i > n/2)
    {
        console.log("The given Number is Prime:",n);
    }
    else{
        console.log("The given Number is not  Prime:",n);
    }




     
}
primeNumber(prompt("Enter the Number:"))