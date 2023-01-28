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
    '&lt;!DOCTYPE HTML>\n&lt;html lang="de">\n&lt;meta charset="utf-8">\n' +
    statements_head +
    statements_body +
    "\n&lt;/html>\n";
};

HtmlGenerator["head"] = function (block) {
  let title_content = block.getFieldValue("TITLE");
  return code = "&lt;head>\n&lt;title>\n" + title_content + "\n&lt;/title>\n &lt;/head>\n";
};

HtmlGenerator["body"] = function (block) {
  let statements_style = HtmlGenerator.statementToCode(block, "STYLE");
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = '&lt;body' +
    statements_style + ">\n" +
    statements_content +
    "&lt;/body>\n";
};

HtmlGenerator["division"] = function (block) {
  let statements_style = HtmlGenerator.statementToCode(block, "STYLE");
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");

  return code =
    '&lt;div' +
    statements_style + ">\n" +
    statements_content +
    "&lt;/div>\n";
};

HtmlGenerator["string"] = function (block) {
  let text_content = block.getFieldValue("CONTENT");
  return code = text_content + "\n";
};

HtmlGenerator["headline"] = function (block) {
  let dropdown_level = block.getFieldValue("LEVEL");
  let text_content = block.getFieldValue("CONTENT");
  return code =
    "&lt;" +
    dropdown_level +
    ">" +
    text_content +
    "&lt;/" +
    dropdown_level +
    ">\n";
};

HtmlGenerator["paragraph"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "&lt;p>" + statements_content + "&lt;/p> \n";
};

HtmlGenerator["break"] = function (){
  return code = "&lt;br>"
}

HtmlGenerator["orderedlist"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");

  return code = "&lt;ol>\n" + statements_content + "&lt;/ol>\n";
};

HtmlGenerator["unorderedlist"] = function (block) {
  let dropdown_type = block.getFieldValue("TYPE");
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "&lt;ul type=" +
    dropdown_type +
    ">\n" +
    statements_content +
    "&lt;/ul>\n";
};

HtmlGenerator["listitem"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");

  return code = "&lt;li>" + statements_content + "&lt;/li>\n";
};

//Bild-Block
HtmlGenerator["image"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  let statements_width = block.getFieldValue("WIDTH");
  let statements_height = block.getFieldValue("HEIGHT");

  return code = '&lt;img src="'  + statements_content + '" width="'+ statements_width
    + '" height="'+ statements_height + '"' + ' alt="default"/>\n';
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
    code = "&lt;b>" + code + "&lt;/b>";
  }
  if(checkbox_kursiv){
    code= "&lt;i>" + code + "&lt;/i>";
  }
  if(checkbox_unterstrichen){
    code= "&lt;u>" + code + "&lt;/u>";
  }

  code = "&lt;span style = 'color: " + colour_name  +
    "; font-size: " + dropdown_schriftgroesse + "pt'>" + code +
    "&lt;/span>\n";

  return code;

};


HtmlGenerator["link"] = function(block) {
  let text_link = block.getFieldValue("LINK");
  return code = "&lt;a href= '" + text_link + "' target=_blank>"
    + text_link +
    "&lt;/a>\n";
};


HtmlGenerator["linkdescription"] = function(block) {
  let text_link = block.getFieldValue("LINK");
  let text_linkdescription = block.getFieldValue("LINKDESCRIPTION");
  return code = "&lt;a href= '" + text_link + "' target=_blank>"
    + text_linkdescription +
    "&lt;/a>\n";
};

HtmlGenerator["table"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  let border_groesse = block.getFieldValue("BORDER");
  return code = '&lt;table border =' + border_groesse +  '>' + statements_content + '&lt;/table>\n';
};



HtmlGenerator["tablehead"] = function (block) {
  let field_content = block.getFieldValue("CONTENT");
  return code = "&lt;th>" + field_content + "&lt;/th>\n";
};

HtmlGenerator["tablerow"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "&lt;tr>" + statements_content + "&lt;/tr>\n";
};

HtmlGenerator["tabledata"] = function (block) {
  let statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "&lt;td>" + statements_content + "&lt;/td>\n";
}


