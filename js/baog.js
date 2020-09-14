/*
 * @Author: your name
 * @Date: 2020-09-14 09:44:26
 * @LastEditTime: 2020-09-14 17:20:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \9-2c:\Users\wangyujie\Desktop\极果\js\baog.js
 */
$('#boko').on('click', function () {
    $(this).animate({
         height: 'show', opacity: 'show'
    },'slow',function(){
        $('.imgbacim3').slideToggle();
    $('.imgbacim2').slideToggle();
    $('.imgbacim1').slideToggle();
    })
})
// 
$('#koks').on('click',function(){
$(this).animate({
height: 'show',
opacity: 'show'
}, 'slow', function () {
$('.imgbacim3').slideToggle();
$('.imgbacim2').slideToggle();
$('.imgbacim1').slideToggle();
})
})

$('#are').on('click',function(){
    $(this).toggleClass('reds_s');
    $('#are2').toggleClass('reds_s');
    $('.ab').hide();
    $('.aa').show();
})
$('#are2').on('click', function () {
    $(this).toggleClass('reds_s');
      $('#are').toggleClass('reds_s');
    $('.aa').hide();
    $('.ab').show();
})