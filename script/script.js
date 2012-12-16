$(function(){

	var newsTrain = $('div.projects-list div.newsMainCase div.newsTrain'),
		lists = $('div.projects-list div.newsMainCase div.newsTrain ul li'),
		newsMainCase = $('div.projects-list div.newsMainCase'),
		iheight = lists.height(),
		isize = lists.size(),
		num2case = 4, // 7 /// num of li(es) in newsMainCase that are visible
		itop = 0;

	(slideNews = function(){
		if (itop >= (iheight*isize - (num2case-1)*iheight) ) itop = 0;
		newsTrain.animate({top:-itop},800);
		itop += iheight+4; // because li doesn't height for matching with Sliding
	})();	

	var intervalName = false;
	(startSliding = function(){
		if(intervalName) return;
		intervalName = setInterval(slideNews,1000);
	})();

	stopSliding = function(){
		clearInterval(intervalName);
		intervalName = false;
	}
	
	newsMainCase.mouseover(stopSliding).mouseout(startSliding); 

	//animate progress bars
	var hiders=$('div.content div.projects-status ul div.hider'),
		percentages=$('div.content div.projects-status ul span.percentage');
	for (var i = 0; i <= percentages.length - 1; i++) {
		str=percentages.eq(i).text();
		str.replace("%","");
		percent=parseInt(str);
		percentages.eq(i).animate({top:85-percent+'px'},900);
		hiders.eq(i).animate({height:100-percent+'px'},900);
	};


	// project slider
	var slideshow = $('div.project-slider'),
		train = $('div.project-slider div.case-train div.train'),
		lists = $('div.project-slider ul.nav-bar > li'),
		currentSlide = 0;

	(show_pic = function(n){
		if(n>lists.length-1) n=0;
		if(n<0) n=lists.length-1;
		train.css({
			left : (-625*n) + 'px'
		});
		lists.eq(currentSlide).removeClass('active');
		lists.eq(n).addClass('active');
		currentSlide = n;
	})(0);

	next_slide = function(){
		show_pic(currentSlide + 1);
	}
	
	back_slide = function(){
		show_pic(currentSlide - 1);
	}
	
	var intervalName = false;
	(startSliding = function(){
		if(intervalName) return;
		intervalName = setInterval(next_slide,20000000);
	})();
	
	stopSliding = function(){
		if(!intervalName) return;
		clearInterval(intervalName);
		intervalName = false;
	}
	
	for(var i=0; i<lists.length; i++){
		(function(j){
			lists.eq(j).click(function(){
				show_pic(j);
			})
		})(i);
	}	
	
	slideshow.mouseover(stopSliding);
	slideshow.mouseout(startSliding);
	// end project slider

});