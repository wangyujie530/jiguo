/*
 * @Author: your name
 * @Date: 2020-09-14 10:31:58
 * @LastEditTime: 2020-09-14 14:52:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \9-2c:\Users\wangyujie\Desktop\极果\js\index.js
 */
$('.section_dnh').animate({
    top: 0, right: 0, opacity: 'show'
}, 2000)
    var nans;
    nans = setInterval(function () {
        var a = +new Date();
        var b = +new Date('2020-10-1 11:11:11');
        var c = b - a;
        var z = c / 1000;
        var d = parseInt(z / 60 / 60 / 24)
        d = d < 10 ? '0' + d : d;
        var h = parseInt(z / 60 / 60 % 24)
        h = h < 10 ? '0' + h : h;
        var m = parseInt(z / 60 % 60)
        m = m < 10 ? '0' + m : m;
        var s = parseInt(z % 60)
        s = s < 10 ? '0' + s : s;
        var ss = '申请时间剩余：' + d + '天' + h + '时' + m + '分' + s + '秒';
        $('.shj_section').text(ss)
    }, 1000);
// lunbo
    var imgs=$('.section_auto_css').children('ul')
    var autoss = 0;
    var imgssau = null;
    function imgss() {
        autoss++;
        if (autoss > imgs.length - 1) autoss = 0;
        arrauto(autoss);
    }
    imgssau = setInterval(imgss, 1000);
    function arrauto(d) {
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none';
             imgs[i].onmouseenter = function () {
                 
                clearInterval(imgssau);
             };
             imgs[i].onmouseleave = function () {
              imgssau = setInterval(imgss, 1000);
              } 
        }
        imgs[d].style.display = 'block';
    }
    $('.section_auto_l').on('click',function(){
        clearInterval(imgssau);
        autoss++;
          if (autoss > imgs.length - 1) autoss = 0;
        imgss(autoss)
    })
    $('.section_auto_r').on('click', function () {
        clearInterval(imgssau);
        autoss++;
        if (autoss > imgs.length - 1) autoss = 0;
        imgss(autoss)
    })
   