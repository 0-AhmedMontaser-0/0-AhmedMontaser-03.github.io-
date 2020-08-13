
$(document).ready(function()
{
$('.carousel').carousel({
  interval:5000
});
//nice scroll
$("html").niceScroll({
cursorwidth:12,
cursorcolor:'#6e8cb6',
cursorborder:'none',
cursorborderradius:4
});


//show color option when click on hte gear
$(".cog-check").click(function(){
	$(".color-option").fadeToggle();
});
//change theme color onclick
let colorLi=$(".color-option ul li");
	colorLi
	.eq(0).css("backgroundColor","#E41B17").end()
	.eq(1).css("backgroundColor","#E426D5").end()
	.eq(2).css("backgroundColor","#009AFF").end()
	.eq(3).css("backgroundColor","#FFD500");
	colorLi.click(function()
	{
		$("link[href*='theme']").attr("href",$(this).attr("data-value"));;
	});
	//caching scroll top element
	let scrollButton=$("#scroll-top");
	$(window).scroll(function(){
		$(this).scrollTop()>=700 ? scrollButton.show(): scrollButton.hide()
	});
		scrollButton.click(function(){
			$("html,body").animate({scrollTop:0},600);
		});
	
});

//loading screen
$(window).load(function(){
	
	//loading element
	$(".loading-overlay .spinner").fadeOut(2000,
	function(){
	
		$("body").css("overflow","auto");
		$(this).parent().fadeOut(2000,
		
		function(){
			
			$(this).remove();
		}
		);
	});
});

