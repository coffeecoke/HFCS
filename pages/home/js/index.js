$(".box-title-fl .nav-list-animate").on("click","li",function(){
    $(this).addClass("active").siblings().removeClass("active");
    var index=$(this).index();
    var indexfirst=$(this).siblings().first().width();
    $(".color-slider").animate({left:indexfirst*index+"px"},300)
})
$(".box-title-fr .nav-list-animates").on("click","li",function(){
    $(this).addClass("actives").siblings().removeClass("actives");
    var indexs=$(this).index();
    var indexfirsts=$(this).siblings().first().width();
    $(".color-sliders").animate({left:indexfirsts*indexs+"px"},300)
})