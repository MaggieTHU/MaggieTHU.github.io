var c = document.getElementsByClassName('clearfix list');
var o = c[0].childNodes[15];
o.childNodes[3].childNodes[0].innerText="Web前端技术实训（软件学院）";
o.childNodes[5].childNodes[0].innerText="刘强";
c[0].removeChild(o);
c[0].insertBefore(o, c[0].childNodes[3]);