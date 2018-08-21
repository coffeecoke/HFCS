// 顶部左侧系统切换
$('.sys-toggle .dropdown-menu li').on('click',function () {
    var logoClass = $(this).attr('class');
    $(this).parents('.sys-toggle').find('.header-logo').removeClass().addClass("header-logo "+logoClass)
})

//顶部右侧导航点击效果
$('.nav-container .nav > li').on('click',function () {
    $(this).parents('.nav-container').find('.navbar-active').removeClass("navbar-active");
    $(this).addClass("navbar-active")
})


// 左侧导航点击效果
$('.sidebar-menu .treeview').on('click',function () {
    $(this).addClass('active').siblings().removeClass('active')
})
// 下拉框点击不关闭
$('body').on('click','[data-stopPropagation]',function (e) {
    e.stopPropagation();
})