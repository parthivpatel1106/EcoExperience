var header=document.getElementById("navbarMenu");
var links=document.getElementsByClassName("nav-link");
for(var i=0;i<links.length;i++)
{
    links[i].addEventListener("click",function(){
        var current=document.getElementsByClassName("active2");
        current[0].className=current[0].className.replace(" active2","");
        this.className+=" active2";
    });
}

$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
});

$(".carousel1").owlCarousel({
    margin:10,
    loop:true,
    // autoplay:true,
    // autoplayTimeout:2000,
    // autoplayHoverPause:true,
    responsive:
    {
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        },
    }
});

var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };
  