var t2 = $('.header-block').outerHeight(true),
//t1 = $(window).height();
t1 = $(window).outerHeight(true);
$('.service-block').height(t1 - t2);
alert(1);