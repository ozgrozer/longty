$.fn.longty=function(settings){

	var settings=$.extend({
		startMode:"hover", // auto or mouse hover
		speed:100, // Pixels per 1 second
		waitingDelay:50, // Waiting delay per slide ( in ms )
		mouseOutDelay:500, // Mouse out delay ( in ms )
		slideLeftEasing:"", // Slide left easing
		slideRightEasing:"", // Slide right easing
		mouseOutEasing:"" // Mouse out easing
	},settings);

	this.css({"position":"absolute","left":"0","margin-top":"0","white-space":"nowrap"});


	return this.each(function(){

		var object=$(this);
		var objectHeight=object.height();

		var parentWidth=object.parent().width();

		var glut=object.width() - parentWidth;
		var duration=(glut / settings.speed) * 1000;
	
		object.wrap("<div style=\"position:relative;overflow:hidden;width:"+parentWidth+"px;height:"+objectHeight+"px;\"></div>");

		function slideLeft(){
			object.animate({left:-glut},{
				queue:false,
				duration:duration,
				easing:settings.slideLeftEasing,
				complete:function(){setTimeout(function(){slideRight()},settings.waitingDelay)}
			});
		}

		function slideRight(){
			object.animate({left:0},{
				queue:false,
				duration:duration,
				easing:settings.slideRightEasing,
				complete:function(){setTimeout(function(){slideLeft()},settings.waitingDelay)}
			});
		}

		function finish(){
			object.stop().animate({left:0},{
				duration:settings.mouseOutDelay,
				easing:settings.mouseOutEasing
			});
		}

		if(settings.startMode=="auto"){
			if(glut > 0){
				slideLeft();
			}
		}else if(settings.startMode=="hover"){
			object.hover(function(){
				if(glut > 0){
					slideLeft();
				}
			},function(){
				finish();
			});
		}

	});

}