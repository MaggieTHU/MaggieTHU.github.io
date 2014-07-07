//把有文件更新的标成红色
x = $("[style*='display: inline']");
for(i = 0; i<x.length; i++)//把下面有未下载文件的课程改为红色
{
		x[i].parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.style.color = 'red'
}