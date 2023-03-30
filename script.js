var items=document.getElementsByClassName('list-group-item');

items[2].style.backgroundColor='green';
items[1].style.backgroundColor='green';
items[2].style.visibility = "hidden";

for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}


var newitem=document.getElementsByClassName('new-list-item');
newitem[0].style.backgroundColor='red';



var tagnameitem=document.getElementsByTagName('li');
tagnameitem[tagnameitem.length-1].style.backgroundColor='brown';
