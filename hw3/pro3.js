x = $('.lh30:visible');
t = $('<td style = "margin-left:10px"/>');
t[0].innerText = '1';
x.prepend(t[0])
for(i = 0; i<x.length; i++){x[i].firstChild.innerText = (i+1).toString();}
y = $('td.student');
for(i = 0; i<y.length; i++){y[i].childNodes[0].innerText = '1073741824'};

