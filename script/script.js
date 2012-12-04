$(function(){

	var newsTrain = $('div.projects-list div.newsMainCase div.newsTrain'),
		lists = $('div.projects-list div.newsMainCase div.newsTrain ul li'),
		newsMainCase = $('div.projects-list div.newsMainCase'),
		iheight = lists.height(),
		isize = lists.size(),
		num2case = 5, // 7 /// num of li(es) in newsMainCase that are visible
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
});