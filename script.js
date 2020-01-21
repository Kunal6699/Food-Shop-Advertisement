$(document).ready(function() {


/*Sticky navigation */

$('.js--section-features').waypoints(function(direction) /* direction refers to scrolling one*/
{
	if (direction =="down") /*scroll down matlab --section-features jo 
		 defined hai uske terms me */
      {
      	$('nav').addClass('sticky');
      } 
      else
      {
      	$('nav').removeClass('sticky');   /* matlab 1 section ka end me change hoga*/
      }
        offset: '60px';  /* matlab 60px pahle hi ho jyga */

});

   /* Scroll on butoons  */
   $('.js--scroll-to-plans').click(function()
   {
      $('html,body').animate({
      	scrollTop: $('.js--section-plans').offset().top},1000); /*1000 milli seconds*/
      });

   $('.js--scroll-to-start').click(function()
   {
      $('html,body').animate({
      	scrollTop: $('.js--section-features').offset().top},1000); /*1000 milli seconds*/
      });

     /*  Navigation Scroll */


     // Select all links with hashes
 $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


       /*    Animations on scroll */

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');

    }, {
    	offset: '50%'
    });       

     $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');

    }, {
    	offset: '50%'
    });  

     $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');

    }, {
    	offset: '50%'
    });  

     $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated bounceOut');

    }, {
    	offset: '50%'
    });  



    /* Mobile nav */

$('.js--nav-icon').click(function(){
	var nav=$('.js--main-nav');
	var icon=$('.js--nav-icon i');
    
    nav.slideToggle(200);      /* 0.2 second */
    if(icon.hasClass('ion-navicon-round'))
    {
       icon.addClass('ion-close-round');
       icon.removeClass('ion-navicon-round');
    }

    else 
    {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }

});



});