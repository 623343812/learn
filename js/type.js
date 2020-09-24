$(document).ready(function() {
    var first = $('details > p:first-of-type');
    console.log(first);
    var last = $('details > p:last-of-type');
    console.log(last);
    var nths = $('details > p:nth-of-type(2)');
    console.log(nths);
    var nth = $('details > p:nth-of-type(2n+1)');
    console.log(nth);
    var nth3 = $('details > p:nth-of-type(3n+1)');
    console.log(nth3);
})