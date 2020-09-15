

//数据请求  酷玩——最新
$.ajax({
    url: "http://192.168.1.47:3000/play/new",
    data: {
        type: 1
    },
    dataType: 'json',

    success: function (res) {
        console.log(res);
        var data=res[0];
        console.log($(data))
        var intext=doT.template($('#dot_d').text());
        $('#ul_dot').html(intext(data));
    },

});

