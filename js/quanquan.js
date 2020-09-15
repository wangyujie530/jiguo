$('#boko').on('click', function () {
    $(this).animate({
        height: 'show',
        opacity: 'show'
    }, 'slow', function () {
        $('.ab').toggleClass('ssa');
        $('#boko').text('点击加载更多').toggleClass('backss');

    })
})

$('.head ul li').hover(function(){
    $(this).toggleClass('orange')
})