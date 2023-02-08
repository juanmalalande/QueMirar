function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = ["Breaking Bad", "Lost", "Terminator 2", "Trainspotting", "Paw Patrol"];
/*console.log(random_item(items));*/
/*alert (random_item(items));*/

document.write(random_item(items));