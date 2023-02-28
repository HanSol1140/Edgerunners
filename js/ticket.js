// 아이디값 myBtn을 클릭햇을때 경고창
$('#myBtn').on('click',myFunction);
function myFunction(){
    var dots = $('#dots');
    var moreButton = $('#more');
    var textButton = $('#myBtn');
    var result = $('#dots').css('display');
    // 브라우저 실행시 기본상태
    if(result==='none'){
        dots.css({'display':'inline'})
        textButton.text('+MORE');
        moreButton.css({display:'none'});
    }else{// 이벤트 실행시 변경 = result가 inline으로 변햇기때문
        dots.css({display:'none'});
        textButton.text('-CLOSE');
        moreButton.css({display:'inline'});
    }
}