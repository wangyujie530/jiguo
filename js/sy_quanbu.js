

//数据请求  酷玩——最新
    $.ajax({
        url: "http://192.168.1.47:3000/useing/public",
        data: {
            type: 1
        },
        dataType: 'json',
        success: function (res) {
            console.log(res)
            var data = res;
            var intext = doT.template($('#dot_dv').text());
            $('#dv_dot').html(intext(data));
        },
    });

//点击添加更多
$('.more').click(function () {
    $('#dv_dot').after($('#dv_dot').clone($('#dv_dot')));
});


