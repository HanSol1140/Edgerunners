// 브라우저 너비, 높이 변수 할당 bw,bh

var bw = $(window).width();
var bh = $(window).height();

console.log("width : "+bw);
console.log("height : "+bh);

$('#wrap').css({height:bh});
var halfHeight = bh/2;
$('.youtube').css({'margin-top':halfHeight});