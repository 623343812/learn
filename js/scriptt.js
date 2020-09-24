$(document).ready(function() {
    var tool = $('[class=tool]');
    console.log(tool);
    var nottool = $('[class!=tool]');
    console.log(nottool);
    var tools = $('[class^=tool_]');
    console.log(tools);
    var es = $('[class$=e]');
    console.log(es);
    var vs = $('[class*=vs]');
    console.log(vs);
    var jq = $('[class][class*=lang][class$=y]');
    console.log(jq);
}) 