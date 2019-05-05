function openNav(){document.getElementById("nav").style.left="0%"}function closeNav(){var t=document.getElementById("nav")
$(window).width()>1150?t.style.left="-36%":t.style.left="-50%"}function resizeAcc(){accActive&&mobile&&$(window).width()>768||accActive&&!mobile&&$(window).width()>768?($("#boxes-wrapper-inner").accordion("destroy"),console.log("accordion destroyed"),accActive=!1):(!accActive&&!mobile&&$(window).width()<768||!accActive&&mobile&&$(window).width()<768)&&($("#boxes-wrapper-inner").accordion({header:"> div > :first-child",active:!1,collapsible:!0,heightStyle:"content"}),console.log("accordion initialised"),accActive=!0)}function menuResize(){$(window).width()<1100&&(document.getElementById("nav").style.left="-50%")}function toggleDrag(){$(window).width<768&&dragActive?(d.draggable("destroy"),$("#logo").css("z-index","99")):$(window.width>768&&!dragActive)&&d.draggable({stack:".drag"})}function restart(){closeNav(),$(window).width()>1440?($("#logo").css({top:"32px",left:"20%"}),$("#about").css({top:"24%",left:"2rem"}),$("#info").css({left:"48%",top:"16%"}),$("#menus").css({top:"31%",left:"55%"}),$("#bookings").css({top:"7%",left:"63%"}),$("#illo").css({top:"35%",left:"27%"})):$(window).width()<1440&&$(window).width()>1300?($("#logo").css({top:"32px",left:"20%"}),$("#about").css({top:"24%",left:"2rem"}),$("#info").css({left:"55%",top:"16%"}),$("#menus").css({top:"31%",left:"65%","z-index":"0"}),$("#bookings").css({top:"7%",left:"73%"}),$("#illo").css({top:"35%",left:"27%"})):$(window).width()>768&&$(window).width()<1300?($("#logo").css({top:"32px",left:"20%"}),$("#about").css({top:"50%",left:"2rem"}),$("#info").css({left:"60%",top:"30%"}),$("#menus").css({top:"40%",left:"65%"}),$("#bookings").css({top:"50%",left:"73%"}),$("#illo").css({top:"23%",left:"25%"})):$(window).width<768&&$("#logo").css({"z-index":"99"})}var mobile
mobile=$(window).width()>768?!1:!0
var d=$(".drag"),dragActive,accActive
$(function(){function t(){return Math.floor(100*Math.random())}function i(){var t=$("main").scrollTop()+$(window).height()/2
return t}function o(){var t=$("main").scrollTop()+$(window).height(),i=$("main").scrollTop()
return Math.floor(Math.random()*(t-i))+i}function e(){$("#logo").css({left:"20%",top:"32px"})}vhCheck(),$(window).width()>768&&(d.draggable({stack:".drag"}),dragActive=!0),$("#nav-about").click(function(){var n=$("#about")
e(),$("#info, #menus, #bookings, #illo").each(function(){$(this).animate({left:t()+"%",top:o()},600,"easeOutBack")
var i=$(this).css("z-index")
i>0&&$(this).css({"z-index":i-1})}),n.css("z-index","7")
var c=n.outerWidth()/2,s=$(window).width()/2-c,a=n.outerHeight()/2,d=i()-a
n.animate({left:s,top:d},600,"easeOutQuad"),closeNav()}),$("#nav-info").click(function(){var n=$("#info")
e(),$("#about, #menus, #bookings, #illo").each(function(){$(this).animate({left:t()+"%",top:o()},600,"easeOutBack")
var i=$(this).css("z-index")
i>0&&$(this).css({"z-index":i-1})}),n.css("z-index","7")
var c=n.outerWidth()/2,s=$(window).width()/2-c,a=(n.outerHeight()/2,i())
n.animate({left:s,top:a-$(window).height()/4},600,"easeOutQuad"),closeNav()}),$("#nav-menus").click(function(){var n=$("#menus")
e(),$("#about, #info, #bookings, #illo").each(function(){$(this).animate({left:t()+"%",top:o()},600,"easeOutBack")
var i=$(this).css("z-index")
i>0&&$(this).css({"z-index":i-1})}),n.css("z-index","7")
var c=n.outerWidth()/2,s=$(window).width()/2-c,a=(n.outerHeight()/2,i())
n.animate({left:s,top:a-$(window).height()/4},600,"easeOutQuad"),closeNav()}),$("#nav-bookings").click(function(){var n=$("#bookings")
e(),$("#about, #info, #menus, #illo").each(function(){$(this).animate({left:t()+"%",top:o()},600,"easeOutBack")
var i=$(this).css("z-index")
i>0&&$(this).css({"z-index":i-1})}),n.css("z-index","7")
var c=n.outerWidth()/2,s=$(window).width()/2-c,a=(n.outerHeight()/2,i())
n.animate({left:s,top:a-$(window).height()/4},600,"easeOutQuad"),closeNav()}),$("#nav-illo").click(function(){var n=$("#illo")
e(),$("#about, #info, #menus, #bookings").each(function(){$(this).animate({left:t()+"%",top:o()},600,"easeOutBack")
var i=$(this).css("z-index")
i>0&&$(this).css({"z-index":i-1})}),n.css("z-index","7")
var c=n.outerWidth()/2,s=$(window).width()/2-c,a=n.outerHeight()/2,d=i()-a
n.animate({left:s,top:d},600,"easeOutQuad"),closeNav()}),$(".boxes").each(function(){$(this).click(function(){$(this).css("z-index","7")})}),mobile&&($("#boxes-wrapper-inner").accordion({header:"> div > :first-child",active:!1,collapsible:!0,heightStyle:"content"}),accActive=!0)}),$(window).width()<768&&$(".arrow, #logo").click(function(){$("#boxes-wrapper-inner").accordion("option","active",!1)}),function(){function t(){o||(o=setTimeout(function(){o=null,i()},66))}function i(){menuResize(),restart(),$("main").scrollTop(0),resizeAcc()}window.addEventListener("resize",t,!1)
var o}(),$("main").scroll(function(){$(window).width()<=768&&($("#boxes-wrapper").offset().top<=0?$("#logo").css({width:"115px"}):$("#illo").offset().top>=0&&$("#logo").css({width:"calc(75% - 4rem)"}))})
