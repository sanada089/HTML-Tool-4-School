//Erzeugung des HTML-Generators

const HtmlGenerator = new Blockly.Generator('HTML');


//Code-Definition für die verschiedenen Blöcke


/*
HtmlGenerator.init = function (workspace) {};
HtmlGenerator.finish = function (code) {
  return code;
};

HtmlGenerator.scrub_ = function (block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = HtmlGenerator.blockToCode(nextBlock);
  return code + nextCode;
};
*/


HtmlGenerator["html_page"] = function (block) {
  var statements_head = HtmlGenerator.statementToCode(block, "HEAD");
  var statements_body = HtmlGenerator.statementToCode(block, "BODY");

  var code =
    '<!DOCTYPE HTML>\n<html>\n<meta charset="utf-8">\n' +
    statements_head +
    statements_body +
    "\n</html>\n";

  return code;
};

HtmlGenerator["head"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  var code =
    '<head>\n' + statements_content + "</head>\n";
  return code;
};

HtmlGenerator["body"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  var code = "<body>\n" + statements_content + "</body>\n";
  return code;
};

HtmlGenerator["title"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");

  var code = "<title>" + statements_content + "</title>\n";
  return code;
};

HtmlGenerator["string"] = function (block) {
  var text_content = block.getFieldValue("CONTENT");
  var code = text_content + "\n";
  return code;
};

HtmlGenerator["headline"] = function (block) {
  var dropdown_level = block.getFieldValue("LEVEL");
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  var code =
    "<" +
    dropdown_level +
    ">" +
    statements_content.trim() +
    "</" +
    dropdown_level +
    ">\n";
  return code;
};

HtmlGenerator["paragraph"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  var code = "<p>" + statements_content + "</p> \n";
  return code;
}
