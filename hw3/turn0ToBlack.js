y = $('td.student');

for(i = 0; i<y.length; i++)//把列表页面所有未读数为0的数字改为黑色
{
	if(!(y[i].childNodes[0].innerText != "0"))
		y[i].childNodes[0].style.color = 'black';
}