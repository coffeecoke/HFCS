// 顶部左侧系统切换
$('.sys-toggle .dropdown-menu li').on('click',function () {
    var logoClass = $(this).attr('class');
    $(this).parents('.sys-toggle').find('.header-logo').removeClass().addClass("header-logo "+logoClass)
})

//顶部右侧导航点击效果
$('.nav-container .nav > li').on('click',function () {
    $(this).addClass('navbar-active').siblings().removeClass('navbar-active')
})

// 左侧导航点击效果
$('.sidebar-menu .treeview').on('click',function () {
    $(this).addClass('active').siblings().removeClass('active')
})