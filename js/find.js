$(document).ready(function() {
    var jq = $('aside').find('.javascript');
    console.log(jq);
    var childer = $('aside').children('details');
    console.log(childer);
    var js_parent = jq.parent();
    console.log(js_parent);
    var less = $('.less');
    var css = less.prev();
    console.log(css);
    var sass = less.next();
    console.log(sass);  
    var lis = $('li').eq(-2);
    console.log(lis);
    var php = $('.php').siblings();
    console.log(php);
    var alllis = $('li');
    var python = alllis.filter('.python');
    console.log(python);
})