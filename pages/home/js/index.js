$(".box-title-fl .nav-list-animate").on("click","li",function(){
    $(this).addClass("active").siblings().removeClass("active");
    var index=$(this).index();
    var indexfirst=$(this).siblings().first().outerWidth();
    $(".color-slider").animate({left:indexfirst*index+"px"},300)
})
$(".box-title-fr .nav-list-animates").on("click","li",function(){
    $(this).addClass("actives").siblings().removeClass("actives");
    var indexs=$(this).index();
    var indexfirsts=$(this).siblings().first().outerWidth();
    $(".color-sliders").animate({left:indexfirsts*indexs+"px"},300)
})

$('.treeview').hover(function () {
    var $treeMenu = $(this).find('.treeview-menu')
    var $arrow = $(this).find('.arrow')
    if(!$treeMenu) {
        return false;
    }
    $treeMenu.show();
    rectObject = $(this)[0].getBoundingClientRect();
    var currTop = rectObject.top;
    var currTreeMenuHeight = $treeMenu.height();
    var winHeight = $(window).height();
    console.log(currTop)
    if(currTop+currTreeMenuHeight>winHeight) {
        var gap = currTop+currTreeMenuHeight-winHeight;
        $treeMenu.css({
            top:-gap-20
        })
        if(!$arrow) {
            return false
        }
        var arrowDefautTop = 35
        $arrow.css({
            top:arrowDefautTop+gap
        })
    }
},function () {
    var $treeMenu = $(this).find('.treeview-menu')
    if(!$treeMenu) {
        return false;
    }
    $treeMenu.hide();
})