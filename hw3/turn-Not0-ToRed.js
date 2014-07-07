u = $('.newFile,.newNotice,.unhandHw');
for(i = 0; i<u.length; i++)//把图片页面所有未读数不是0的数字改为红色
{
	if(u[i].innerText != "0")
		u[i].style.color = 'red';
}