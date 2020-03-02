var input = document.getElementById("myInput");
var li = document.getElementById("listes");
function add() 
{
    if(input.value !="")
    {
        li.innerHTML += "<input type='checkbox' onclick='styl();' class='check'><span class='sp'>" + 
        input.value + "</span><br>";
       }
}


function styl() 
{
    var spanListe = document.getElementsByClassName("sp");
    var checkListe = document.getElementsByClassName("check");
    for (let i = 0; i < checkListe.length; i++) 
    {
       if(checkListe[i].checked == true)
       {
        spanListe[i].style.textDecoration = 'line-through';
       }
       else
       {
        spanListe[i].style.textDecoration = 'none';
       }
        
    }
}
// document.getElementById("inp").style.textDecoration='line-through';