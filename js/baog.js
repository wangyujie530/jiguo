/*
 * @Author: your name
 * @Date: 2020-09-14 09:44:26
 * @LastEditTime: 2020-09-14 10:04:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \9-2c:\Users\wangyujie\Desktop\极果\js\baog.js
 */
$('.imgbac_red').on('click',function(){
    $(this).animate({
         height: 'toggle', opacity: 'toggle'
    },'slow',function(){
        $('.imgbacim3').slideToggle();
    $('.imgbacim2').slideToggle();
    $('.imgbacim1').slideToggle();
    })
})