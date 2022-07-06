"use script"

//Speziell definierte HTML-Blöcke und ihre Eigenschaften

const htmlBlocks = [

  //HTML-Page Block

  {
    "type": "html_page",
    "message0": "HTML-Seite %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy",
        "align": "CENTRE"
      },
      {
        "type": "input_statement",
        "name": "head",
        "check": "head"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "body",
        "check": "body"
      }
    ],
    "inputsInline": false,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "head",
    "message0": "Kopf %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "content",
        "check": "title"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "body",
    "message0": "Körper %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "content",
        "check": "title"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "title",
    "message0": "Titel %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "content",
        "check": "String"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "string",
    "message0": "text %1",
    "args0": [
      {
        "type": "field_input",
        "name": "content",
        "text": ""
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
  },
]

//Initialisierung der oben definierten Blöcke

for (var iBlock in htmlBlocks) {
  function makeBlock(json) {
    Blockly.Blocks[json.type] = {
      init: function () {
        this.jsonInit(json);
      }
    };
  }
  makeBlock(htmlBlocks[iBlock]);
}
