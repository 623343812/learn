$(document).ready(function() {
/* function flash() {
    $('.button').show().fadeOut('slow');
}
$('.bind').click(function() {
    $(document).on('click','.obj',flash).find('.obj').text('改了');
})
$('.unbind').click(function() {
    $(document).off('click','.obj',flash).find('.obj').text('取消改动');
})
$('.one').click(function() {
    $(document).one('click','.obj',flash)
    .find('.obj')
    .text('一次点击事件');  
}) */
/* $('form').submit(function() {
    var inputValue = $('input[type=text]').val();
    if(inputValue !== 'www.imooc.com'){
        return false;
    }
}) */

/*     $(document).keydown(function(event) {
        console.log(event);
    }) */
/*     $('input').focus(function() {
        console.log('我获得焦点了1.1');
    })
    $('input').blur(function() {
        console.log('我失去焦点了2.2');
    })
    $('input').change(function() {
        console.log('我正在发生改变0.0');
    })
    $('input').select(function() {
        console.log('我被选中了@.@');
    }) */
/*     $('a').click(function() {
        $('img')
        .eq($(this).index())
        .css({'opacity': '1'})
        .siblings()
        .css({'opacity': '0'});
    }); */
/*     $('a').mouseenter(function() {
        $('img')
        .eq($(this).index())
        .css({'opacity':'1'})
        .siblings()
        .css({'opacity':'0'});
    }); */
/*     $('a').hover(function() {
        $('img')
        .eq($(this).index())
        .css({'opacity':'1'})
        .siblings()
        .css({'opacity':'0'});
    }); */
/*     $('nav').mousemove(function() {
        console.log($(this));
    }) */
/*     $('a').mouseup(function() {
        $('img')
        .eq($(this).index())
        .css({'opacity':'1'})
        .siblings()
        .css({'opacity':'0'});
    }); */
    $('a').mousedown(function() {
        $('img')
        .eq($(this).index())
        .css({'opacity':'1'},1000)
        .siblings()
        .css({'opacity':'0'});
    });
    var swiper = function() {
        $('div').stop()
        .animate({
            'width':'30%'
        },1000)
        .delay(1000)
        .animate({
            'width':'100%'
        },1000)
    };

/*     $('a').dblclick(function() {
        $('img')
        .eq($(this).index())
        .css({'opacity':'1'})
        .siblings()
        .css({'opacity':'0'});
    }); */
    // var alinks = $('a');
    // /*     alinks.style.background = 'red';
    //     alinks.style.border = '5px solid yellow';
    //     alinks.style.color = '#fff'; */
    //     for (var i = alinks.length - 1; i >= 0; i--) {
    //     // alinks[i].style.background = 'red';
    //     // alinks[i].style.border = '5px solid yellow';
    //     // alinks[i].style.color = '#fff';
    //     alinks.eq(i).css({
    //         'background': 'red',
    //         'border': '5px solid yellow',
    //         'color': '#fff'
    //     }).html('<i>七彩云南'+ i +'</i>')
    //     // .text('云南旅游' + i);
    //     }
    });
