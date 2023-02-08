function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = ["ESTO TE VA A GUSTAR. MIRÁ:", "DESTAPÁ UNA BIRRA Y MIRÁ:", "ACOMODATE EN EL SILLÓN Y MIRÁ:", "AGARRÁ LOS POCHOCLOS Y MIRÁ:", "HOY SE MIRA:"];


document.write(random_item(items));