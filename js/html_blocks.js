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
        "name": "HEAD",
        "check": "head"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "BODY",
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
        "name": "CONTENT",
        "check": ["title",
                  "paragraph",
                  "string",
                  "headline"],
      }
    ],
    "inputsInline": false,
    "previousStatement": "head",
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
        "name": "CONTENT",
        "check": ["title",
          "paragraph",
          "string",
          "headline"],
      }
    ],
    "inputsInline": false,
    "previousStatement": "body",
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
        "name": "CONTENT",
        "check": "string"
      }
    ],
    "inputsInline": false,
    "previousStatement": "title",
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
        "name": "CONTENT",
        "text": ""
      }
    ],
    "previousStatement": "string",
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": "https://www.w3schools.com/tags/tag_html.asp"
  },
  {
    "type": "headline",
    "message0": "Überschrift %1 %2 %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "LEVEL",
        "options": [
          ["Größe 6", "h1"],
          ["Größe 5", "h2"],
          ["Größe 4", "h2"],
          ["Größe 3", "h4"],
          ["Größe 2", "h5"],
          ["Größe 1", "h6"]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": "string"
      }
    ],
    "previousStatement": "headline",
    "nextStatement": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": "https://www.w3schools.com/tags/tag_html.asp"
  },
  {
    "type": "paragraph",
    "message0": "Absatz %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": ["string",
                  "headline"]
      }
    ],
    "previousStatement": "paragraph",
    "nextStatement": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": "https://www.w3schools.com/tags/tag_html.asp"
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
