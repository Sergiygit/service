function mobInit(){
	var mobLen = jQuery(".mobile-nav").length;
	if(mobLen > 0)
	{
		var mobSnav = jQuery(".mobile-nav").eq(0).find(".sub-nav").length;
		for(var i=0;i<mobSnav;i++)
		{
			var sNav = jQuery(".mobile-nav").eq(0).find(".sub-nav").eq(i);
			jQuery(sNav).parent().find(".m-btn").eq(0).append("<span class='sub-btn'></span>");
			if( jQuery(sNav).parent().find(".m-btn").eq(0).hasClass("have-sub") != true )
			{jQuery(sNav).parent().find(".m-btn").eq(0).toggleClass("have-sub");}
		}
	}

	jQuery(document).on("click", ".mobile-nav .sub-btn, .mobile-nav.click-btn .have-sub a", function(){
		if( jQuery(this).parent().hasClass("open") != true )
		{jQuery(this).parent().parent().find(".sub-nav").eq(0).show(200);}
		else
		{jQuery(this).parent().parent().find(".sub-nav").eq(0).hide(200);}
		jQuery(this).parent().toggleClass("open");
		return false;
	});
	jQuery(document).on("click", ".mobile-sbm", function(){
		setTimeout(function(){
			if( jQuery("body").hasClass("show-mobile-nav") != true ){jQuery("body").toggleClass("show-mobile-nav");}
			else{
				jQuery("body").removeClass("show-mobile-nav");
				jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: 0},0);
			}
		},100);
	});
	jQuery(document).mouseup(function (e){
		var div = jQuery("body.show-mobile-nav .site-header").eq(0);
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			jQuery("body.show-mobile-nav").removeClass("show-mobile-nav");
		}
	});
}
function upInit(){
	var bodyH = jQuery(window).outerHeight();
	var scroll = jQuery(window).scrollTop();
	if(scroll > bodyH && jQuery("body").hasClass("show-up") != true)
	{jQuery("body").toggleClass("show-up");}
	if(scroll < bodyH && jQuery("body").hasClass("show-up") == true)
	{jQuery("body").removeClass("show-up");}
}
function popupsInit(newPopup){
	jQuery(".page-width").css("min-height","100%");
	var bodyH = jQuery(window).outerHeight();
	var pageH = jQuery(".page-width").outerHeight();if(pageH < bodyH) {pageH = bodyH;}
	var scrollH = jQuery(window).scrollTop();
	var popupH = jQuery(newPopup).outerHeight();
	if(pageH < popupH){jQuery(".page-width").css("min-height",popupH+30);pageH = popupH+30;}
	var popupTop = scrollH + 20;
	if( popupH < bodyH ){popupTop = (bodyH-popupH)/2 + scrollH;}
	if( (popupTop+popupH) > pageH ){popupTop = pageH - popupH;}
	if( jQuery(newPopup).hasClass("show") != true ){jQuery(newPopup).css("top", popupTop+"px");}
}
jQuery(document).ready(function(){
	mobInit();
	upInit();

	jQuery(".popup-link").on("click", function(){
		var newPopup = jQuery(this).attr("href");
		if( jQuery("body").hasClass("show-popups-preload") != true ){jQuery("body").toggleClass("show-popups-preload");}
		popupsInit(jQuery(newPopup));
		if( jQuery("body").hasClass("show-popups") != true ){jQuery("body").toggleClass("show-popups");if( jQuery(newPopup).hasClass("show") != true ){jQuery(newPopup).toggleClass("show");}}
		else{jQuery(".popup-bl").removeClass("show");jQuery(newPopup).toggleClass("show");}
		jQuery("body").removeClass("show-popups-preload");
		if( jQuery("body").hasClass("show-popups-hide") != true ){jQuery("body").toggleClass("show-popups-hide");}
		return false;
	});
	jQuery(".popup-bl .close").on("click", function(){
		jQuery(".popup-bl").removeClass("show");
		jQuery("body").removeClass("show-popups");
		jQuery("body").removeClass("show-popups-hide");
		jQuery(".page-width").css("min-height","100%");
		return false;
	});
	jQuery(".popup-bl").on("mouseenter", function (e){ if( jQuery("body").hasClass("show-popups-hide") == true ){jQuery("body").removeClass("show-popups-hide");} });
	jQuery(".popup-bl").on("mouseleave", function (e){ if( jQuery("body").hasClass("show-popups-hide") != true ){jQuery("body").toggleClass("show-popups-hide");} });
	jQuery("body").on("click", function(){
		jQuery(".show-popups-hide .popup-bl.show").removeClass("show");
		jQuery(".show-popups-hide .page-width").css("min-height","100%");
		jQuery(".show-popups-hide").removeClass("show-popups");
		jQuery(".show-popups-hide").removeClass("show-popups-hide");
	});
	jQuery(".site-nav .menu-item").on("mouseover",function(){
		if( jQuery("body").hasClass("show-cat") == true && jQuery(this).hasClass("cat-sbm") != true )
		{jQuery("body").removeClass("show-cat");}
		if( jQuery("body").hasClass("show-cat") != true && jQuery(this).hasClass("cat-sbm") == true  )
		{jQuery("body").toggleClass("show-cat");}

	if( jQuery("body").hasClass("show-cat-city") == true && jQuery(this).hasClass("cities-sbm") != true )
		{jQuery("body").removeClass("show-cat-city");}
		if( jQuery("body").hasClass("show-cat-city") != true && jQuery(this).hasClass("cities-sbm") == true  )
		{jQuery("body").toggleClass("show-cat-city");}
		return false;
	});
	jQuery(document).on("mouseleave",".catalog-main,#head-catalog,#cities-catalog",function (e){
		if( jQuery("body").hasClass("show-cat") == true ){jQuery("body").removeClass("show-cat");}
		if( jQuery("body").hasClass("hide-cat") != true ){jQuery("body").toggleClass("hide-cat");}
		if( jQuery("body").hasClass("show-cat-city") == true && jQuery(this).hasClass("cities-sbm") != true ){jQuery("body").removeClass("show-cat-city");}
	});
	jQuery(document).on("mouseover", ".catalog-nav-wrap", function(){
		if( jQuery("body").hasClass("hide-cat") == true ){jQuery("body").removeClass("hide-cat");}
	});
	jQuery("body").on("click",function(){
		if( jQuery("body").hasClass("hide-cat") == true ){jQuery("body").removeClass("show-cat");jQuery("body").removeClass("hide-cat");}
	});

	jQuery(".catalog-mob-bl h4, .mob-clink,.catalog-mob h5").on("click",function(){
		jQuery(this).
		parent().toggleClass("open");
		return false;
	});

	jQuery(".elementor-widget-button .elementor-button").on("click",function(){
		if( jQuery(this).attr("href") == "#" || jQuery(this).attr("href") == "" )
		{
			var newBl = jQuery(this).parent().parent().parent();
			while( jQuery(newBl).hasClass("elementor-area") != true && jQuery(newBl).hasClass("site-content") != true )
			{newBl = jQuery(newBl).parent();}
			jQuery(newBl).toggleClass("open");
			return false;
		}
		else
		{
			if( jQuery(this).attr("target") != "_blank" ){jQuery(this).attr("target","_blank");}
		}
	});

	jQuery(".up-link").on("click",function(){
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: 0},800);
		return false;
	});

	var timeLen = jQuery(".time-bl").length;
	for(var i=0;i<timeLen;i++)
	{
		jQuery(".time-bl").eq(i).html("<li class='hour'><div class='time-box'><div class='circle'><i></i><i></i><i></i><i></i><b></b></div><div class='text'><span>0</span><span>0</span><p>часов</p></div></div></li><li class='min'><div class='time-box'><div class='circle'><i></i><i></i><i></i><i></i><b></b></div><div class='text'><span>0</span><span>0</span><p>минут</p></div></div></li><li class='sec'><div class='time-box'><div class='circle'><i></i><i></i><i></i><i></i><b></b></div><div class='text'><span>0</span><span>0</span><p>секунд</p></div></div></li>");
	}

	jQuery(".area-questions .elementor-icon-box-title").on("click",function(){jQuery(this).parent().toggleClass("open");return false;});
});
jQuery(window).resize(function(){
	upInit();
	//Popups
	var popupsLen = jQuery(".popup-bl.show").length;for(var i=0;i<popupsLen;i++){popupsInit(jQuery(".popup-bl").eq(i));}
});
jQuery(window).load(function(){
	//Popups
	var popupsLen = jQuery(".popup-bl.show").length;for(var i=0;i<popupsLen;i++){popupsInit(jQuery(".popup-bl").eq(i));}
});
jQuery(window).scroll(function(){upInit();});
jQuery(document).on("keyup",function(e){if( e.key == 'Escape'){jQuery(".popup-bl.show .close").trigger("click");}});

jQuery(document).ready(function(){
	jQuery(".fix-plashka__close").on("click", function(){
		if( jQuery(".fix-plashka").length > 0 ){jQuery(".fix-plashka").hide(0);}
		return false;
	});
});
