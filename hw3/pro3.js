x = $('.lh30:visible');
t = $('<td/>');
z = $('<p style = "margin-left:10px"/>');
z[0].innerText ='1';
z.appendTo(t);
x.prepend(t[0]);
for(i = 0; i<x.length; i++){x[i].firstChild.firstChild.innerText = (i+1).toString();}
y = $('td.student');
for(i = 0; i<y.length; i++){y[i].childNodes[0].innerText = '1073741824'};
