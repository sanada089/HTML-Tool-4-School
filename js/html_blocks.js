"use script"

//Speziell definierte HTML-Blöcke und ihre Eigenschaften

const htmlBlocks = [

  //HTML-Page Block

  {
    "type": "html_page",
    "message0": "HTML-Page %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "HTML-Page",
        "check": [
          "Inhalt",
          "Division",
          "Überschrift",
          "Titel"
        ]
      }
    ],
    "colour": 290,
    "tooltip": "",
    "helpUrl": "https://www.w3schools.com/tags/tag_html.asp"
  }
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
