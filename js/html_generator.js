//Erzeugung des HTML-Generators

const HtmlGenerator = new Blockly.Generator('HTML');

//Code-Definition für die verschiedenen Blöcke

HtmlGenerator['html_page'] = function (block) {
  var code = "<!DOCTYPE HTML>\n<html>\n </html>\n";
  return code;
};
