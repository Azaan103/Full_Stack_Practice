let a=30;

function outer()
{
    let b=10;

    function inner()
    {

        console.log(b)
    }
    inner();
}
outer()