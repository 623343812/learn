$(document).ready(function() {
    var swrps = $('.container');
    var index = 0;
    var alinks = swrps.find('a');
    var imgs = swrps.find('img');
    var mouseEvent = function(event) {
        event.stopPropagation();
        index = $(this).index();
        swiper();
    };

    var keyEvent = function(event) {
        event.stopPropagation();
        if(event.keyCode == 37) {
            index = index > 0 ? --index : $('a').length - 1;
        }else if(event.keyCode == 39) {
            index = index < alinks.length - 1 ? ++index : 0;
        }else {
            return false;
        }
        swiper();
    };
    var events = {
        mouseenter: mouseEvent,
        keydown: keyEvent
    }
    alinks.add(document).on(events);

    var swiper = function() {
        imgs
        .eq(index)
        .stop().fadeIn('slow')
        .siblings()
        .stop().fadeOut('slow')
    };
/*     var swiper = function() {
        $('img')
        .eq(index)
        .stop().show('slow')
        .siblings()
        .stop().hide('slow');
    }; */
/*     var swiper = function() {
        $('img').stop().toggle('slow');
    } */
/*     var swiper = function() {
        $('img').stop()
        .animate({'width':'0%'},1000)
        .delay(1000)
        .animate({'width':'100%'})
    }; */
})