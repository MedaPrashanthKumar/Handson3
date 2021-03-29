let nameList=[ 1000,200,350,890,100];
let i,large,small;

large=nameList[0];
small=nameList[0];
for (i = 1; i < nameList.length; i++) 
{
    if (large < nameList[i])
    {
        large = nameList[i];
    }

    if (small> nameList[i])
    {
        small = nameList[i];
    }
          
}
console.log(large);
console.log(small);