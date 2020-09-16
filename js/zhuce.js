



//获取验证码
var btn = document.getElementsByTagName('button')[0];
var num = 6;
var timer = null;
btn.onclick = function () {
    timer = setInterval(auto, 1000);
    btn.disabled = true;
}
function auto() {
    num--;
    if (num <= 0) {
        clearInterval(timer);
        btn.disabled = false;
        btn.innerHTML = '重获验证码';
        num = 6;
    }
    else {
        btn.innerHTML = num + '秒后获取';
        btn.style.background = '#f7f7f7';
    }
}

//表单验证

var zz_1 = /^1[3578]\d{9}$/g;
var zz_2 = /r2B7/g;
var zz_3 = /\d{4}/g;
var zz_4 = /[a-z0-9\w]+|^[\u4e00-\u9fa5\d]{2,5}$/g;
var zz_5 = /^\w\w{5,9}$/g;
$('.inp_1').blur(function () {
    if (zz_1.test(this.value) == false) {
        $('.dv_span').children('span').eq(0).text('请输入正确手机号').css('color', 'red');
    } else {
        $('.dv_span').children('span').eq(0).empty();
    }
});
$('.inp_2').blur(function () {
    if (zz_2.test(this.value) == false) {
        $('.dv_span').children('span').eq(1).text('校验码不正确').css('color', 'red');
    } else {
        $('.dv_span').children('span').eq(1).empty();
    }
});
$('.inp_3').blur(function () {
    if (zz_3.test(this.value) == false) {
        $('.dv_span').children('span').eq(2).text('请输入正确4位验证码').css('color', 'red');
    } else {
        $('.dv_span').children('span').eq(2).empty();
    }
});
$('.inp_4').blur(function () {
    if (zz_4.test(this.value) == false) {
        $('.dv_span').children('span').eq(3).text('请输入正确用户名').css('color', 'red');
    } else {
        $('.dv_span').children('span').eq(3).empty();
    }
});
$('.inp_5').blur(function () {
    if (zz_5.test(this.value) == false) {
        $('.dv_span').children('span').eq(4).text('请输入6-10位的密码').css('color', 'red');
    } else {
        $('.dv_span').children('span').eq(4).empty();
    }
});
$('.inp_6').blur(function () {
    if (this.value !== $('.inp_5').val()) {
        $('.dv_span').children('span').eq(5).text('两次密码必须相同').css('color', 'red');
    } else if (this.value == '') {
        $('.dv_span').children('span').eq(5).text('不能为空').css('color', 'red');
    } else {
        $('.dv_span').children('span').eq(5).empty();
    }

});

//点击注册进行验证
$('.btn_big').click(function () {
    if ( $('.dv_span').children('span').text()=='') {
        $.ajax({
            url: 'http://192.168.1.47:3000/users',
            type: "post",
            data: {
                type: 'register',
                phone: $('#inpname').val(),
                pass: $('#passx').val()
            },
            success(res) {
                alert(res);
            }
        })
    } else {
        alert('请完善您的信息');
    }
});