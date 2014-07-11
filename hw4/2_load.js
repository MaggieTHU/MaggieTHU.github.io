j = 1;
/*----初始化第1页---*/
$(document).ready(function(){
    $("#insert2").load("http://127.0.0.1/comment1.json",function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success")
      	data = responseTxt;
      	dataObj = eval("("+responseTxt+")");
    	for(i = 0; i<5; i++)
    	{
    		x = $('.userPic a img');//载入用户头像
    		x[i].src = dataObj.comment[i].url;
    		z = $('.text p');//载入评论内容
    		z[i].innerText =dataObj.comment[i].content;
        y = $('.bar a');//载入用户名
        y[i].innerText =dataObj.comment[i].name;

    	}
      if(statusTxt=="error")
        alert("Error: "+xhr.status+": "+xhr.statusText);
    });
});
/*----图标第1页---*/
$(document).ready(function(){
  $("#pages1").click(function(){
    $("#insert2").load("http://127.0.0.1/comment1.json",function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success")
        data = responseTxt;
        dataObj = eval("("+responseTxt+")");
        j = 1;
        $('#pageNumber p')[0].innerText = "第1页/共3页";
      for(i = 0; i<5; i++)
      {
        x = $('.userPic a img');//载入用户头像
        x[i].src = dataObj.comment[i].url;
        z = $('.text p');//载入评论内容
        z[i].innerText =dataObj.comment[i].content;
        y = $('.bar a');//载入用户名
        y[i].innerText =dataObj.comment[i].name;
      }
      if(statusTxt=="error")
        alert("Error: "+xhr.status+": "+xhr.statusText);
    });
    });
});
/*----图标第2页---*/
$(document).ready(function(){
	$("#pages2").click(function(){
    $("#insert2").load("http://127.0.0.1/comment2.json",function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success")
      	data = responseTxt;
      	dataObj = eval("("+responseTxt+")");
        j = 2;
        $('#pageNumber p')[0].innerText = "第2页/共3页";
    	for(i = 0; i<5; i++)
    	{
    		x = $('.userPic a img');//载入用户头像
    		x[i].src = dataObj.comment[i].url;
    		z = $('.text p');//载入评论内容
    		z[i].innerText =dataObj.comment[i].content;
        y = $('.bar a');//载入用户名
        y[i].innerText =dataObj.comment[i].name;
    	}
      if(statusTxt=="error")
        alert("Error: "+xhr.status+": "+xhr.statusText);
    });
    });
});
/*----图标第3页---*/
$(document).ready(function(){
  $("#pages3").click(function(){
    $("#insert2").load("http://127.0.0.1/comment3.json",function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success")
        data = responseTxt;
        dataObj = eval("("+responseTxt+")");
        j = 3;
        $('#pageNumber p')[0].innerText = "第3页/共3页";
      for(i = 0; i<5; i++)
      {
        x = $('.userPic a img');//载入用户头像
        x[i].src = dataObj.comment[i].url;
        z = $('.text p');//载入评论内容
        z[i].innerText =dataObj.comment[i].content;
        y = $('.bar a');//载入用户名
        y[i].innerText =dataObj.comment[i].name;
      }
      if(statusTxt=="error")
        alert("Error: "+xhr.status+": "+xhr.statusText);
    });
    });
});
/*----下一页---*/
$(document).ready(function(){
  
  $("#nextPage").click(function(){
    if(j<3)
       j++;
    $('#pageNumber p')[0].innerText = "第"+j.toString()+"页/共3页";
    $("#insert2").load("http://127.0.0.1/comment"+j.toString()+".json",function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success")
        data = responseTxt;
        dataObj = eval("("+responseTxt+")");
      
      for(i = 0; i<5; i++)
      {
        x = $('.userPic a img');//载入用户头像
        x[i].src = dataObj.comment[i].url;
        z = $('.text p');//载入评论内容
        z[i].innerText =dataObj.comment[i].content;
        y = $('.bar a');//载入用户名
        y[i].innerText =dataObj.comment[i].name;
      }
      if(statusTxt=="error")
        alert("Error: "+xhr.status+": "+xhr.statusText);
    });
    });

});
/*----上一页---*/
$(document).ready(function(){
  $("#lastPage").click(function(){
     if(j>1)
        j--;
      $('#pageNumber p')[0].innerText = "第"+j.toString()+"页/共3页";
    $("#insert2").load("http://127.0.0.1/comment"+j.toString()+".json",function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success")
        data = responseTxt;
        dataObj = eval("("+responseTxt+")");
     
      for(i = 0; i<5; i++)
      {
        x = $('.userPic a img');//载入用户头像
        x[i].src = dataObj.comment[i].url;
        z = $('.text p');//载入评论内容
        z[i].innerText =dataObj.comment[i].content;
        y = $('.bar a');//载入用户名
        y[i].innerText =dataObj.comment[i].name;
      }
      if(statusTxt=="error")
        alert("Error: "+xhr.status+": "+xhr.statusText);
    });
    });
});

/*----变化页码---*/
