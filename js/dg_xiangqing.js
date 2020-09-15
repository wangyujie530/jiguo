

//数据请求  酷玩——最新
    $.ajax({
        url: "http://192.168.1.47:3000/play/hot",
        data: {
            type: 1
        },
        dataType: 'json',
        success: function (res) {
            var data = res[0];
            console.log(res)
            var intext = doT.template($('#dot_d').text());
            $('#ul_dot').html(intext(data));
        },
    });

//点击添加更多
$('.more').click(function () {
    $('#ul_dot').after($('#ul_dot').clone($('#ul_dot')));
});
