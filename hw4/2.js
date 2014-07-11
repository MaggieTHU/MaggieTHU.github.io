/*$('.swp-img')
$('feed-replies')
*/

/*--用户评论模块-*/
s =$('<div id = "comments"/>');
/*---一条评论---*/
for(i = 0;i<5;i++)
{
y = $('<div class = "comment"/>')//一条评论
x = $('<div class = "commencton"/>')
//用户头像
z = $('<div class = "userPic"/>')
pc = $('<a href = "javascript:;" target = "blank"/>');
$('<img src = "images/1.jpg"/>').appendTo(pc);
pc.appendTo(z);

z.appendTo(x);
//用户名
z2 = $('<div class = "bar"/>')
bt = $('<a href = "javascript:;" target = "blank">');
bt[0].innerText = "MaggieTHU"
bt.appendTo(z2);
z2.appendTo(x);
//评论
z3 = $('<div class = "con"/>');
//评论内容
t = $('<div class = "text"/>');
ids = "content_"+i.toString();
tc =$('<p />')
tc.id = ids;
tc[0].innerText = "Hi";
tc.appendTo(t);
t.appendTo(z3);
//功能
pa = $('<div class = "panel"/>');
h = $('<div class = "handle"/>');
cr = $('<div class = "com_reply"/ style = "display:block">' );
cra = $('<a href = "javascript:;"/>');
cra[0].innerText = "回复";
cra.appendTo(cr);
cr.appendTo(h);
h.appendTo(pa);
pa.appendTo(z3);
z3.appendTo(x);
//插入评论模块
x.appendTo(y);
y.appendTo(s);
}



/*----评论部分顶部-----*/
//评论栏顶端长条
pageComantBar = $('<div class = "qPager" id = "pageComantBar"/>');
span_currcommenttotall = $('<span id = "span_currcommenttotall" name = "span_currcommenttotall">');
span_commenttotall = $('<span id = "span_commenttotall" name = "span_commenttotall"/>');
//显示页码
pageNumber = $('<div id = "pageNumber" class = "pageNumber"/>');
pageNumber_p = $('<p/>');
pageNumber_p[0].innerText = "第1页/共3页"
pageNumber_p.appendTo(pageNumber);
//翻上下页
tur  = $('<ul class = "turn"/>');
lastp = $('<li title = "上一页" class = "pre"/>');
lastp_span = $('<a onclick ="" href = "javascript:;" id = "lastPage"/>');
lastp_span[0].innerText = "上一页";
nextp = $('<li title = "下一页" class = "next"/>');
nextp_a = $('<a onclick ="" href = "javascript:;" id = "nextPage"/>  ');
nextp_a[0].innerText = "下一页";
lastp_span.appendTo(lastp);
nextp_a.appendTo(nextp);
//插入
lastp.appendTo(tur);
nextp.appendTo(tur);
//评论页数索引
pages = $('<ul class = "pages"/>');
pa_current = $('<li  class = "current"/>');//第一页 
pa_current_span = $('<a onclick ="" href = "javascript:;" id = "pages1"/>');
pa_current_span[0].innerText = "1";
pa_current_span.appendTo(pa_current);
pa_2= $('<li/>');//第2页
pa_2_a = $('<a onclick ="" href = "javascript:;" id = "pages2"/> ');
pa_2_a[0].innerText = "2";
pa_2_a.appendTo(pa_2);
pa_3= $('<li/>');//第3页
pa_3_a = $('<a onclick ="" href = "javascript:;" id = "pages3"/> ');
pa_3_a[0].innerText = "3";
pa_3_a.appendTo(pa_3);
//插入
pa_current.appendTo(pages);
pa_2.appendTo(pages);
pa_3.appendTo(pages);
//合并评论栏
pageNumber.appendTo(pageComantBar);
tur.appendTo(pageComantBar);
pages.appendTo(pageComantBar);

/*---videobodycommentlist---*/
videobodycommentlist = $('<div id = "videobodycommentlist"/>');

/*---qpage插入----*/

pageComantBar.appendTo(videobodycommentlist);//qpage插入



/*---Comments---*/
Comments = $('<div id = "Comments" class = "box nBox">');
Comments_body = $('<div class = "body"/>');
s.appendTo(Comments_body);
Comments_body.appendTo(Comments);
Comments.appendTo(videobodycommentlist);

/*----tab_inner---*/
tab_inner = $('<div class = "tab_inner" id = "tab_inner"/>');
tab_inner_tab = $('<div class = "tabs"/>');


/*---videoomment---*/
videoomment = $('<div id = "videoomment" class ="videoComment"/>');
videobodycommentlist.appendTo(videoomment);

/*------------tab_top-----*/
tab_top = $('<div class = "tab_top" id = "tab_top"/>');
tabs = $('<div class ="tabs"/>');
tab_content = $('<p/>');
tab_content[0].innerText = "全部评论"
tab_content.appendTo(tabs);
tabs.appendTo(tab_top);


/*----innerCommentArea---*/
innerCommentArea = $('<div id = "innerCommentArea" class = "innerCommentArea"/>')
/*---commentArea---*/
cA = $('<div id ="commentArea" class = "commentArea"/>');
cAbox = $('<div id ="commentAreaBox" class = "commentAreaBox" exclude = 1/>');
tab_top.appendTo(cAbox);
videoomment.appendTo(cAbox)
cAbox.appendTo(innerCommentArea);
innerCommentArea.appendTo(cA);
cA.appendTo('body');

