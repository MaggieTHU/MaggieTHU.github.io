//修改保存按钮的位置及大小
u = $('.edui-default');
x = $('.cancel');
x.remove();
x.prependTo(u[0]);
y = $('#submit');
y.remove();
y.prependTo(u[0]);
document.getElementById('submit').style.marginBottom = "10px";