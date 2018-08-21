$('.sys-toggle .dropdown-menu li').on('click',function () {
    var logoClass = $(this).attr('class');
    $(this).parents('.sys-toggle').find('.header-logo').removeClass().addClass("header-logo "+logoClass)
})

$('.nav-container .nav > li').on('click',function () {
    $(this).addClass('navbar-active').siblings().removeClass('navbar-active')
})
