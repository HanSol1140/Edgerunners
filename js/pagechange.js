$('.gnb li:nth-child(1)').click(function(e){
    e.preventDefault();
    document.querySelector('.page_close').style.left='0';
    setTimeout(() => {
        location.href="./01_poster.html";
    }, 600);
});
$('.gnb li:nth-child(2)').click(function(e){
    e.preventDefault();
    document.querySelector('.page_close').style.left='0';
    setTimeout(() => {
        location.href="./02_ticket.html";
    }, 600);
});
$('.gnb li:nth-child(3)').click(function(e){
    e.preventDefault();
    document.querySelector('.page_close').style.left='0';
    setTimeout(() => {
        location.href="./03_video.html";
    }, 600);
});
$('.gnb li:nth-child(4)').click(function(e){
    e.preventDefault();
    document.querySelector('.page_close').style.left='0';
    setTimeout(() => {
        location.href="./04_synopsis.html";
    }, 600);
});
{/* document.querySelector('.gnb li:nth-child(5) a').addEventListener('click',function(){
    event.preventDefault();
    document.querySelector('.page_close').style.left='0';
    setTimeout(() => {
        location.href="./05_character.html";
    }, 800);
}); */}