$(document).ready(function(){
    // alert("!!");
    // 브라우저 너비 높이값 변수 할당
    // 콘솔에브라우저
    console.log("브라우저 너비값은"+innerWidth);
    console.log("브라우저 높이값은"+innerHeight);
    var browserWidth = $(window).width();
    var browserHeight = $(window).height();
    console.log("브라우저 너비값은"+browserWidth);
    console.log("브라우저 높이값은"+browserHeight);
    // $('#wrap').css('height','1000px');
    $('#wrap').css({height:innerHeight});

});