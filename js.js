let mesafe = prompt('mesafeni qeyd edin') 
let suret = prompt('suretinizi qeyd edin') 
let vaxt = mesafe/suret
let netice = 'eger mesafe ' + mesafe + ' suret ise ' + suret + ' olarsa,vaxt ' + vaxt + ' saat olacaq';

document.getElementById('vaxt').innerHTML = netice;
