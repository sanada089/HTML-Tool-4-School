//Erzeugung des HTML-Generators

const HtmlGenerator = new Blockly.Generator('HTML');


//Code-Definition für die verschiedenen Blöcke

HtmlGenerator.init = function (workspace) {};
HtmlGenerator.finish = function (code) {
  return code;
};

HtmlGenerator.scrub_ = function (block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = HtmlGenerator.blockToCode(nextBlock);
  return code + nextCode;
};



HtmlGenerator["html_page"] = function (block) {
  var statements_head = HtmlGenerator.statementToCode(block, "HEAD");
  var statements_body = HtmlGenerator.statementToCode(block, "BODY");

  return code =
    '<!DOCTYPE HTML>\n<html lang="de">\n<meta charset="utf-8">\n' +
    statements_head +
    statements_body +
    "\n</html>\n";
};

HtmlGenerator["head"] = function (block) {
  var title_content = block.getFieldValue("TITLE");
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "<head>\n<title>\n" + title_content + "\n</title>\n" + statements_content +"</head>\n";
};

HtmlGenerator["body"] = function (block) {
  var statements_style = HtmlGenerator.statementToCode(block, "STYLE");
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = '<body style=' +
    statements_style + ">\n" +
    statements_content +
    "</body>\n";
};

HtmlGenerator["division"] = function (block) {
  var statements_style = HtmlGenerator.statementToCode(block, "STYLE");
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");

  return code =
    '<div style=' +
    statements_style + ">\n" +
    statements_content +
    "</div>\n";
};



HtmlGenerator["string"] = function (block) {
  var text_content = block.getFieldValue("CONTENT");
  return code = text_content + "\n";
};

HtmlGenerator["headline"] = function (block) {
  var dropdown_level = block.getFieldValue("LEVEL");
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code =
    "<" +
    dropdown_level +
    ">" +
    statements_content.trim() +
    "</" +
    dropdown_level +
    ">\n";
};

HtmlGenerator["paragraph"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "<p>" + statements_content + "</p> \n";
};

HtmlGenerator["orderedlist"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");

  return code = "<ol>\n" + statements_content + "</ol>\n";
};

HtmlGenerator["unorderedlist"] = function (block) {
  var dropdown_type = block.getFieldValue("TYPE");
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "<ul type=" +
    dropdown_type +
    ">\n" +
    statements_content +
    "</ul>\n";
};

HtmlGenerator["listitem"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");

  return code = "<li>" + statements_content + "</li>\n";
};

HtmlGenerator["image"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");

  return code = '<img src="'  + statements_content + '" alt="default"/>\n';
};

HtmlGenerator["flower"] = function() {
  return "img/flower.png";
};

HtmlGenerator["book"] = function() {
  return "img/book.png";
};

HtmlGenerator["imagelink"] = function(block) {
  return block.getFieldValue("IMAGELINK");
};

HtmlGenerator["style"] = function (block) {
  var font = block.getFieldValue("FONT");
  var backgroundcolor = block.getFieldValue("BACKGROUND");
  var textcolor = block.getFieldValue("TEXTCOLOR");
  return code = "'font-family: " + font + ";background-color: " + backgroundcolor + ";color: " + textcolor + ";'";
};

HtmlGenerator["specialtext"] = function(block) {
  var text_specialtext = block.getFieldValue('CONTENT');
  var colour_name = block.getFieldValue("TEXTCOLOR");
  var dropdown_schriftgroesse = block.getFieldValue("FONTSIZE");
  var checkbox_fett = block.getFieldValue("FETT") === 'TRUE';
  var checkbox_kursiv = block.getFieldValue("KURSIV") === 'TRUE';
  var checkbox_unterstrichen = block.getFieldValue("UNTERSTRICHEN") === 'TRUE';

  if(checkbox_fett && !checkbox_kursiv && !checkbox_unterstrichen){
    code = "<span style = 'color: " + colour_name + "'" +
      "'font-size: " + dropdown_schriftgroesse + "'>" +
      "<b>" +
      text_specialtext +
      "</b>" +
      "</span>\n";
  } else if(checkbox_kursiv && !checkbox_fett && !checkbox_unterstrichen){
    code = "<span style = 'color: " + colour_name + "'" +
      "'font-size: " + dropdown_schriftgroesse + "'>" +
      "<i>" +
      text_specialtext +
      "</i>" +
      "</span>\n";
  } else if (checkbox_unterstrichen && !checkbox_fett && !checkbox_kursiv){
    code = "<span style = 'color: " + colour_name + "'" +
      "'font-size: " + dropdown_schriftgroesse + "'>" +
      "<u>" +
      text_specialtext +
      "</u>" +
      "</span>\n";
  }  else if(checkbox_fett && checkbox_kursiv && !checkbox_unterstrichen){
    code = "<span style = 'color: " + colour_name + "'" +
      "'font-size: " + dropdown_schriftgroesse + "'>" +
      "<b><i>" +
      text_specialtext +
      "</b></i>" +
      "</span>\n";
  }else if (checkbox_kursiv && checkbox_unterstrichen && !checkbox_fett){
    code = "<span style = 'color: " + colour_name + "'" +
      "'font-size: " + dropdown_schriftgroesse + "'>" +
      "<i><u>" +
      text_specialtext +
      "</i></u>" +
      "</span>\n";
  }
  else if (!checkbox_kursiv && checkbox_unterstrichen && checkbox_fett){
    code = "<span style = 'color: " + colour_name + "'" +
      "'font-size: " + dropdown_schriftgroesse + "'>" +
      "<b><u>" +
      text_specialtext +
      "</b></u>" +
      "</span>\n";
  }
  else if (checkbox_fett && checkbox_kursiv  && checkbox_unterstrichen){
    code = "<span style = 'color: " + colour_name + "'" +
      "'font-size: " + dropdown_schriftgroesse + "'>" +
      "<b><i><u>" +
      text_specialtext +
      "</b></i></u>" +
      "</span>\n";
  }
  return code;

};





HtmlGenerator["link"] = function(block) {
  var text_link = block.getFieldValue("LINK");
  return code = "<a href= '" + text_link + "'>"
    + text_link +
    "</a>\n";
};


HtmlGenerator["linkdescription"] = function(block) {
  var text_link = block.getFieldValue("LINK");
  var text_linkdescription = block.getFieldValue("LINKDESCRIPTION");
  return code = "<a href= '\n" + text_link + "'>\n"
    + text_linkdescription +
    "</a>\n";
};

HtmlGenerator["table"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  var border_groesse = block.getFieldValue("BORDER");
  return code = "<table border =" + border_groesse +  ">" + statements_content + "</table>\n";
};



HtmlGenerator["tablehead"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "<th>" + statements_content + "</th>\n";
};

HtmlGenerator["tablerow"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "<tr>" + statements_content + "</tr>\n";
};

HtmlGenerator["tabledata"] = function (block) {
  var statements_content = HtmlGenerator.statementToCode(block, "CONTENT");
  return code = "<td>" + statements_content + "</td>\n";
}


