document.write("<p>powered by <a href='http://'>dearjs</a></p>");
function startdear(type) {
  if(type == "prompt") {
    document.write("<div id='dearjs-prompt-div' style='background-color: #C4CFCE; width: 60%; postiton: absolute; left: 0px;'>"+prompt+"</div>");
    document.write("<div id='dearjs-prompt-div' style='background-color: #C4CFCE; width: 59%; position: relitive; top: 1%;'><input id='dearjs-prompt' type='text' style='font-family: arial; width: 20%;'></div>");
}
  if(type == "select") {
    document.write("<select>"+select+"</select>");
}
  if(type == "alert") {
    document.write("<div id='dearjs-alert' background-color: #C4CFCE;><h1>"+alert+"</h1></div>")
}
  if(type == "button") {
    document.write("<button>"+button+"</button>");
}
 if(type == "line") {
   document.write("<hr>");
}
 if(type == "style") {
   document.write("<style>"+style+"</style>");
}
}
