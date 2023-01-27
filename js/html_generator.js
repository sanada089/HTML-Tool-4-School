//Erzeugung des HTML-Generators

const HtmlGenerator = new Blockly.Generator('HTML');


//Code-Definition für die verschiedenen Blöcke

HtmlGenerator.init = function (workspace) {};
HtmlGenerator.finish = function (code) {
  return code;
};

HtmlGenerator.scrub_ = function (block, code) {
  let nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  let nextCode = HtmlGenerator.blockToCode(nextBlock);
  return code + nextCode;
};



HtmlGenerator["html_page"] = function (block) {
  let statements_head = HtmlGenerator.statementToCode(block, "HEAD");
  let statements_body = HtmlGenerator.statementToCode(block, "BODY");

  return code =
    '<!DOCTYPE HTML>\n<html lang="de">\n<meta charset="utf-8">\n' +
    statements_head +
    statements_body +
    "\n</html>\n";
};

HtmlGenerator["head"] = function (block) {
  let title_content = block.getFieldValue("TITLE");
  return code = "<head>\n<title>\n" + title_content + "\n</title>\n </head>\n";
};

HtmlGenerator["body"] = function (block) {
  let statements_style = HtmlGenerator.statementToCode(block, "STYLE");
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = '<body' +
    statements_style + ">\n" +
    statements_content +
    "</body>\n";
};

HtmlGenerator["division"] = function (block) {
  let statements_style = HtmlGenerator.statementToCode(block, "STYLE");
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");

  return code =
    '<div' +
    statements_style + ">\n" +
    statements_content +
    "</div>\n";
};

HtmlGenerator["string"] = function (block) {
  let text_content = block.getFieldValue("CONTENT");
  return code = text_content + "\n";
};

HtmlGenerator["headline"] = function (block) {
  let dropdown_level = block.getFieldValue("LEVEL");
  let text_content = block.getFieldValue("CONTENT");
  return code =
    "<" +
    dropdown_level +
    ">" +
    text_content +
    "</" +
    dropdown_level +
    ">\n";
};

HtmlGenerator["paragraph"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "<p>" + statements_content + "</p> \n";
};

HtmlGenerator["break"] = function (){
  return code = "<br>"
}

HtmlGenerator["orderedlist"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");

  return code = "<ol>\n" + statements_content + "</ol>\n";
};

HtmlGenerator["unorderedlist"] = function (block) {
  let dropdown_type = block.getFieldValue("TYPE");
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "<ul type=" +
    dropdown_type +
    ">\n" +
    statements_content +
    "</ul>\n";
};

HtmlGenerator["listitem"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");

  return code = "<li>" + statements_content + "</li>\n";
};

//Bild-Block
HtmlGenerator["image"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  let statements_width = block.getFieldValue("WIDTH");
  let statements_height = block.getFieldValue("HEIGHT");

  return code = '<img src="'  + statements_content + '" width="'+ statements_width + '" height="'+ statements_height + '"' + ' alt="default"/>\n';
};

//Bilder Lehrkräfte

HtmlGenerator["rainer"] = function(){
  return "img/rainer.png";
};

HtmlGenerator["rimpfl"] = function(){
  return "img/rimpfl.png";
};

HtmlGenerator["scott"] = function(){
  return "img/scott.png";
};

HtmlGenerator["smith"] = function(){
  return "img/smith.png";
};

HtmlGenerator["winter"] = function(){
  return "img/winter.png";
};

HtmlGenerator["hausl"] = function(){
  return "img/Hausl2.png";
};

HtmlGenerator["imagelink"] = function(block) {
  return block.getFieldValue("IMAGELINK");
};

HtmlGenerator["style"] = function (block) {
  let font = block.getFieldValue("FONT");
  let backgroundcolor = block.getFieldValue("BACKGROUND");
  let textcolor = block.getFieldValue("TEXTCOLOR");
  return code = " style='font-family: " + font + ";background-color: " + backgroundcolor + ";color: " + textcolor + ";'";
};

HtmlGenerator["specialtext"] = function(block) {
  let text_specialtext = block.getFieldValue('CONTENT');
  let colour_name = block.getFieldValue("TEXTCOLOR");
  let dropdown_schriftgroesse = block.getFieldValue("FONTSIZE");
  let checkbox_fett = block.getFieldValue("FETT") === 'TRUE';
  let checkbox_kursiv = block.getFieldValue("KURSIV") === 'TRUE';
  let checkbox_unterstrichen = block.getFieldValue("UNTERSTRICHEN") === 'TRUE';

  let code = text_specialtext;

  if(checkbox_fett){
    code = "<b>" + code + "</b>";
  }
  if(checkbox_kursiv){
    code= "<i>" + code + "</i>";
  }
  if(checkbox_unterstrichen){
    code= "<u>" + code + "</u>";
  }

    code = "<span style = 'color: " + colour_name  +
      "; font-size: " + dropdown_schriftgroesse + "pt'>" + code +
      "</span>\n";

  return code;

};


HtmlGenerator["link"] = function(block) {
  let text_link = block.getFieldValue("LINK");
  return code = "<a href= '" + text_link + "' target=_blank>"
    + text_link +
    "</a>\n";
};


HtmlGenerator["linkdescription"] = function(block) {
  let text_link = block.getFieldValue("LINK");
  let text_linkdescription = block.getFieldValue("LINKDESCRIPTION");
  return code = "<a href= '\n" + text_link + "' target=_blank>\n"
    + text_linkdescription +
    "</a>\n";
};

HtmlGenerator["table"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  let border_groesse = block.getFieldValue("BORDER");
  return code = '<table border =' + border_groesse +  '>' + statements_content + '</table>\n';
};



HtmlGenerator["tablehead"] = function (block) {
  let field_content = block.getFieldValue("CONTENT");
  return code = "<th>" + field_content + "</th>\n";
};

HtmlGenerator["tablerow"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "<tr>" + statements_content + "</tr>\n";
};

HtmlGenerator["tabledata"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "<td>" + statements_content + "</td>\n";
}


