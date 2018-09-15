function by_init(){
	var bottomNav = $("body");
	var width = bottomNav.width()/bottomNav.children(".by-nav-item").length;
	
	bottomNav.children(".by-nav-item").css("width", width+"px");
	$(".by-slider-item").css("width", (bottomNav.width()/5) + "px");
	$(".by-slider-content").css("width", ((bottomNav.width()/5)*($(".by-slider-item").length)) + "px");
	$(".by-nav-item").click(function(){
		if(!$(this).hasClass("selected")){
			$(".by-nav-item").removeClass("selected");
			$(this).addClass("selected");
			var index = $(this).index();
			$(".by-tab-item").removeClass("selected");
			$(".by-tab-item:nth-child(" + (index+1) + ")").addClass("selected");
		}
	});
}

