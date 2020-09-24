$(document).ready(function() {
    var first = $('details > p:first-child');
    console.log(first);
    var last = $('details > p:last-child');
    console.log(last);
    var nths = $('details > p:only-child');
    console.log(nths);
})