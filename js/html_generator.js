const HtmlGenerator = new Blockly.Generator('HTML');

HtmlGenerator['html_page'] = function (block) {
  var code = "<!DOCTYPE HTML>\n<html>\n </html>\n";
  return code;
};
