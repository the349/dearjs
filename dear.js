function startdear(type) {
  if(type == "prompt") {
    document.write("<div id='dearjs-prompt-div' style='background-color: #C4CFCE; width: 60%; postiton: absolute; left: 0px;'>"+prompt+"</div>");
    document.write("<div id='dearjs-prompt-div' style='background-color: #C4CFCE; width: 59%; position: relitive; top: 1%;'><input id='dearjs-prompt' type='text' style='font-family: arial; width: 20%;'></div>");
}
  if(type == "select") {
    document.write("<select>"+select+"</select>");
}
}
