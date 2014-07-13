/*******************清空上一次内容******************/
$('body')[0].innerHTML='';
if (timer) window.clearInterval(timer);

/*******************添加canvas**********************/
var width=document.documentElement.clientWidth;
var height=document.documentElement.clientHeight;
$('body').prepend('<canvas id="canv" style="position:absolute;left:0px;top:0px;" width='+width+'px height='+height+'px>请换个浏览器。。</canvas>');
var cv=$('#canv')[0].getContext('2d');

/*******************隐藏鼠标************************/
$('html').css({cursor:'none'});

/*******************全局变量&常量声明***************/
var mx=-20,my=-20;//鼠标位置
var bg=cv.createLinearGradient(0,0,0,height);bg.addColorStop(0,'#cbebdb');bg.addColorStop(1,'#55a5c5');//背景渐变色
var pl={x:-20,y:-20,vx:0,vy:0,ax:0,ay:0,arc:0};//飞机的初始运动参数
var plSize=16;//飞机大小
var cursorSize=6;//指针大小
var u1=6,u2=80;//控制飞机运动的两个阻尼参数, u1:越大表示加速度受速度的负影响越大 u2:越大表示速度越慢
var fps=100;//帧率
//var planeShape=[{r:plSize,t:0},{r:plSize,t:rad(165)},{r:plSize/2,t:rad(180)},{r:plSize,t:rad(195)}];//飞机的极坐标数组
var planeShape=[{r:1,t:3.14},{r:0.716,t:-2.98},{r:0.443,t:-2.49},{r:0.443,t:-0.65},{r:0.716,t:-0.25},{r:1,t:0},{r:1.692,t:-0.11},{r:1.692,t:0.11},
	{r:1,t:0},{r:0.716,0.25},{r:0.443,t:0.65},{r:0.443,t:2.49},{r:0.716,t:2.98}];
var cos=Math.cos, sin=Math.sin, random=Math.random, PI=Math.PI, abs=Math.abs, atan2=Math.atan2, round=Math.round, floor=Math.floor, sqrt=Math.sqrt;
var balls=[];
var ballDensity=0.5;//每一帧新产生一个ball的概率
var ballStyle='#eef';
var bigBallStyle;

/*******************数学计算函数********************/
function rad(d)//角度-->弧度
{
	return d/180*PI;
}

function xy(u)//转极坐标为直角坐标
{
	return {x:u.r*cos(u.t), y:u.r*sin(u.t)};
}

function dis2(x1,y1,x2,y2)//距离的平方
{
	return (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
}

function ran(a,b)//生成[a, b)的随机实数
{
	return a+(b-a)*random();
}

function ranInt(a,b)//生成[a, b]的随机整数
{
	return floor(a+(b-a+1)*random());
}

/*******************各个绘图函数********************/
function drawBG()//画背景
{
	cv.save();
	cv.fillStyle=bg;
	cv.fillRect(0,0,width,height);
	cv.restore();
}

function drawItem(p,x,y,d)//画任意极坐标表示的多边形，p为极坐标的数组, x&y是该图形的基准位置，d为旋转角度。需在外部指定绘图样式
{
	cv.beginPath();
	var len=p.length;
	cv.moveTo(x+p[0].r*cos(p[0].t+d), y+p[0].r*sin(p[0].t+d));
	for (i=0;i<len-1;i++)
	{
		cv.lineTo(x+p[i+1].r*cos(p[i+1].t+d), y+p[i+1].r*sin(p[i+1].t+d));
	}
	//cv.moveTo(x+p[len-1].r*cos(p[len-1].t+d), y+p[len-1].r*sin(p[len-1].t+d));
	cv.lineTo(x+p[0].r*cos(p[0].t+d), y+p[0].r*sin(p[0].t+d));
	cv.closePath();
}

function drawCursor()//画鼠标十字
{
	cv.save();
	cv.beginPath();
	cv.lineWidth=1;
	cv.strokeStyle='#000';
	cv.shadowOffsetX = 2;
	cv.shadowOffsetY = 2;
	cv.shadowBlur = 2;
	cv.shadowColor='#888';
	var u=cursorSize;
	cv.moveTo(mx-u,my);
	cv.lineTo(mx+u,my);
	cv.moveTo(mx,my-u);
	cv.lineTo(mx,my+u);
	cv.stroke(); 
	cv.restore();
}

function drawPlane()//画操纵的飞机
{
	cv.save();
	cv.fillStyle='blue';
	cv.strokeStyle='blue';
	cv.lineWidth=1;
	drawItem(planeShape,pl.x,pl.y,pl.arc);
	cv.stroke();
	cv.fill();
	cv.restore();
}

function drawOneBall(x,y,r)//画个球!
{
	cv.save();
	cv.beginPath();
    cv.fillStyle = ballStyle;
    cv.arc(x, y, r, 0, PI*2, true); 
    cv.closePath();
    cv.fill();
    cv.restore();
}

function drawBalls()
{
	for (var i in balls)
	{
		drawOneBall(balls[i].pos.x,balls[i].pos.y,balls[i].size);
	}
}

function drawOneBigBall(x,y,r)
{
	cv.save();
	cv.beginPath();
	bigBallStyle=cv.createRadialGradient(x,y,0,x,y,r);
	bigBallStyle.addColorStop()
	cv.fillStyle=bigBallStyle;
	cv.arc(x,y,r,0,PI*2,true);
	cv.closePath();
	cv.fill();
	cv.restore();
}

/*********************创建子弹******************************/
function addBall(degree)//一个随机产生的走直线的子弹，参数为角度，默认为向左(PI)
{
	var d=(degree==undefined?PI:degree);
	var r=sqrt(dis2(width/2,height/2,0,0));
	var t=ran(-r,r);
	
	var b={size:ran(3,4.5),color:'#eef',speed:ran(1.5,2.5),pos:{x:width/2+t*cos(d-PI/2)+r*cos(PI-d),y:height/2+t*sin(d-PI/2)-r*sin(PI-d)},degree:d};
	balls.push(b);
}

/*********************位置变化计算**************************/
function ballMove()
{
	for (var i=balls.length-1;i>=0;i--)
	{
		balls[i].pos.x+=balls[i].speed*cos(balls[i].degree);
		balls[i].pos.y+=balls[i].speed*sin(balls[i].degree)
		if (balls[i].pos.x<0) balls.splice(i,1);
	}
}

function planeMove()
{
	var dd=dis2(mx,my,pl.x,pl.y);
	pl.ax=(mx-(pl.x+plSize*cos(pl.arc)))-pl.vx/u1;
	pl.ay=(my-(pl.y+plSize*sin(pl.arc)))-pl.vy/u1;
	var vv=dis2(pl.vx,pl.vy,0,0);
	if (dd>plSize*plSize){
		pl.x+=pl.vx/u2;
		pl.y+=pl.vy/u2;
	}
	pl.vx+=pl.ax;
	pl.vy+=pl.ay;
	//        下面这个复杂的语句用于判断是否适合调整角度
	//细节: 当鼠标距离飞机中心不超过一倍半径时，飞机位置不改变
	//                        不超过二倍半径时，飞机机头方向为中心指向鼠标方向
	//                        超过二倍半径时，机头方向为速度方向
	//      这样做可以使机头稳定不乱晃，能精细控制
	var arc1=atan2(pl.vx,-pl.vy)-PI/2;
	pl.arc=(vv>10&&abs(arc1-pl.arc)<dd/plSize/plSize)?arc1:pl.arc;
	if (dd<2*plSize*plSize) pl.arc=atan2((mx-pl.x),-(my-pl.y))-PI/2;
}

/*********************设置绘图时钟周期**********************/
var timer=setInterval(function() {
    drawBG();
    drawCursor();
    planeMove();
    drawPlane();
    ballMove();
    drawBalls();
    if (random()<ballDensity) addBall(rad(ran(175,185)));
    cv.fillText('x:'+round(pl.x)+' y:'+round(pl.y)+' vx:'+round(pl.vx)+' vy:'+round(pl.vy)+' ax:'+round(pl.ax)+' ay:'+round(pl.ay)+' arc:'+round(pl.arc*180/PI),100,100);
}, 1000/fps);//100fps

/*********************获取鼠标位置**************************/
document.addEventListener('mousemove',function(e)
{
	mx=e.x;
	my=e.y;
});


/*
function ballMove(pos,r,fillStyle,period)
{
	var i=0;
	var timer0=setInterval(function()
	{
		drawBG();
		ball(pos(i).x,pos(i).y,r,fillStyle);
	},10);
}
*/
/*
    for (i=0;i<1000;i++)
    {
    	if (pos[i]==undefined)
    		pos.push({
    			x:0,//width/2,
    			y:0,//height/2,
    			size:2+4*random(),
    			color:'#'+(random()>0.5?'f':'e')+(random()>0.5?'f':'e')+(random()>0.5?'f':'f')
    		});//*random(),y:height*random()});
    	pos[i].x+=(8-pos[i].size)*random()-(8-pos[i].size)/2;
    	pos[i].y+=(8-pos[i].size)*random()-(8-pos[i].size)/2;
    	ball(posX+pos[i].x,posY+pos[i].y,pos[i].size,pos[i].color);
	}*/
