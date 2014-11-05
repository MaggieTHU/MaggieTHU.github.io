//localStorage.picture;
imageWidth = $('.imageRotation').width(),
imageBox = $('.imageRotation').children(".imageBox")[0],  // 图片容器
imageSpeed =0,  // 图片动画执行速度
console.log(localStorage.picture);
b =  parseInt(localStorage.picture);
b = b-1;
$($('.icoBox span')[b]).addClass('active');
$($('.titleBox p')[b]).addClass('active');
$(imageBox).animate({left:"-"+(b)*imageWidth+"px"} , imageSpeed);
//$(document).ready(function(a) {
	$(".imageRotation").each(function(a){
	// 获取有关参数
		var imageRotation = this,  // 图片轮换容器
			imageBox = $(imageRotation).children(".imageBox")[0],  // 图片容器
			titleBox = $(imageRotation).children(".titleBox")[0],  // 标题容器
			titleArr = $(titleBox).children(),  // 所有标题（数组）
			icoBox = $(imageRotation).children(".icoBox")[0],  // 图标容器
			icoArr = $(icoBox).children(),  // 所有图标（数组）
			imageWidth = $(imageRotation).width(),  // 图片宽度
			imageNum = $(imageBox).children().size(),  // 图片数量
			imageReelWidth = imageWidth*imageNum,  // 图片容器宽度
			activeID = parseInt($($(icoBox).children(".active")[0]).attr("rel")),  // 当前图片ID
			//a = parseInt(localStorage.picture),
			//activeID = a-1,


			nextID = 0,  // 下张图片ID
			setIntervalID,  // setInterval() 函数ID
			intervalTime = 4000,  // 间隔时间
			imageSpeed =500,  // 图片动画执行速度
			titleSpeed =250;  // 标题动画执行速度
		// 设置 图片容器 的宽度
		$(imageBox).css({'width' : imageReelWidth + "px"});
		//加载上次结束时的图片
		//activeID = localStorage.picture;
		//if(activeID == 0)
		//		activeID = 5;
		console.log(activeID);
		// 图片轮换函数(向右)
		var rotate=function(clickID){
			if(clickID){ nextID = clickID; }
			else{ nextID=activeID<=4 ? activeID+1 : 1; }
			// 交换图标
			$(icoArr[activeID-1]).removeClass("active");
			$(icoArr[nextID-1]).addClass("active");
			// 交换标题
			$(titleArr[activeID-1]).animate(
				{bottom:"-100px"},
				titleSpeed,
				function(){
					$(titleArr[nextID-1]).animate({bottom:"0px"} , titleSpeed);
				}
			);
			// 交换图片
			$(imageBox).animate({left:"-"+(nextID-1)*imageWidth+"px"} , imageSpeed);
			// 交换IP
			activeID = nextID;
			localStorage.picture = activeID;
			console.log(localStorage.picture);
		}
		setIntervalID=setInterval(rotate,intervalTime);
		$(imageBox).hover(
			function(){ clearInterval(setIntervalID); },
			function(){ setIntervalID=setInterval(rotate,intervalTime); }
		);	
		$(icoArr).click(function(){
			clearInterval(setIntervalID);
			var clickID = parseInt($(this).attr("rel"));
			rotate(clickID);
			setIntervalID=setInterval(rotate,intervalTime);

		});
		//点击图片右侧翻下一页
		$('.transBox_R').click(function(){
			clearInterval(setIntervalID);
			var clickID = parseInt($(this).attr("rel"));
			rotate(clickID);
			setIntervalID=setInterval(rotate,intervalTime);

		});
		//点击图片左侧翻下一页
		$('.transBox_L').click(function(){
			clearInterval(setIntervalID);
			var clickID = parseInt($(this).attr("rel"));
			rotate_L(clickID);
			setIntervalID=setInterval(rotate,intervalTime);

		});
		//图片轮换函数（向左）
		var rotate_L=function(clickID){
			if(clickID){ nextID = clickID; }
			else{ nextID=activeID>=2 ? activeID-1 : 5; }
			// 交换图标
			$(icoArr[activeID-1]).removeClass("active");
			$(icoArr[nextID-1]).addClass("active");
			// 交换标题
			$(titleArr[activeID-1]).animate(
				{bottom:"-100px"},
				titleSpeed,
				function(){
					$(titleArr[nextID-1]).animate({bottom:"0px"} , titleSpeed);
				}
			);
			// 交换图片
			$(imageBox).animate({left:"-"+(nextID-1)*imageWidth+"px"} , imageSpeed);
			// 交换IP
			activeID = nextID;
			localStorage.picture = activeID;
		}

	});

//});