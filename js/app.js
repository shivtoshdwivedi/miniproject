$(document).ready(function(){
    $('.food-slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
        autoplay:true
    });
})

const countDown=()=>{
    const countDate=new Date('november 30,2022 00:00:00').getTime();
    const now =new Date().getTime();
    const gap=countDate-now;


    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;


    const textDay=Math.floor(gap/day);
    const textHour=Math.floor((gap % day)/hour);
// console.log(textHour);
    const textMinute=Math.floor((gap % hour)/minute);
    // console.log(textMinute);
    const textSecond=Math.floor((gap % minute)/second);
    // console.log(textSecond);
    
    document.querySelector(".day").innerHTML=textDay;
    document.querySelector(".hour").innerHTML=textHour;
    document.querySelector(".minute").innerHTML=textMinute;
    document.querySelector(".second").innerHTML=textSecond;
};


setInterval(countDown, 1000);