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
        "check": ["division",
                  "title",
                  "paragraph",
                  "string",
                  "headline",
                  "orderedlist",
                  "unorderedlist"],
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
        "check": ["division",
          "title",
          "paragraph",
          "string",
          "headline",
          "orderedlist",
          "unorderedlist"],
      }
    ],
    "inputsInline": false,
    "previousStatement": "body",
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "division",
    "message0": "Division %1 Style %2 Inhalt %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "STYLE",
        "check": "style"
      },
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": ["string",
          "headline",
          "paragraph",
          "specialtext",
          "unorderedlist",
          "division",
          "link",
          "image",
          "table",
          "orderedlist"],
      }
    ],
    "previousStatement": "division",
    "nextStatement": "division",
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
    "message0": "Text %1",
    "args0": [
      {
        "type": "field_input",
        "name": "CONTENT",
        "text": ""
      }
    ],
    "previousStatement": "string",
    "nextStatement": [
      "string",
      "headline",
      "paragraph",
      "specialtext",
      "unorderedlist",
      "division",
      "link",
      "image",
      "table",
      "orderedlist"
    ],
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
  {
    "type": "orderedlist",
    "message0": "Nummerierte Liste %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": "listitem"
      }
    ],
    "previousStatement": "orderedlist",
    "nextStatement": ["string",
      "headline",
    "paragraph",
    "specialtext",
    "unorderedlist",
    "division",
    "link",
    "image",
    "table",
    "orderedlist"],
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "unorderedlist",
    "message0": "Unnummerierte Liste %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": "listitem"
      }
    ],
    "previousStatement": "unorderedlist",
    "nextStatement": ["string",
      "headline",
      "paragraph",
      "specialtext",
      "unorderedlist",
      "division",
      "link",
      "image",
      "table",
    "orderedlist"],
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "listitem",
    "message0": "Listeneintrag %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": [
          "string",
          "specialtext",
          "image",
          "link",
          "table"
        ]
      }
    ],
    "previousStatement": "listitem",
    "nextStatement": "listitem",
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "image",
    "message0": "Bild %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": "imageblock"
      }
    ],
    "previousStatement": "image",
    "nextStatement": ["string",
      "headline",
      "paragraph",
      "specialtext",
      "unorderedlist",
      "division",
      "link",
      "image",
      "table",
      "orderedlist"],
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "style",
    "message0": "Schriftart %1 %2 Hintergrundfarbe %3 %4 Schriftfarbe %5",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "FONT",
        "options": [
          [
            "Arial, sans-serif",
            "Arial, sans-serif"
          ],
          [
            "Brush Script MT, cursive",
            "Brush Script MT, cursive"
          ],
          [
            "Courier New, monospace",
            "Courier New, monospace"
          ],
          [
            "Garamond, serif",
            "Garamond, serif"
          ],
          [
            "Georgia, serif",
            "Georgia, serif"
          ],
          [
            "Helvetica, sans-serif",
            "Helvetica, sans-serif"
          ],
          [
            "Tahoma, sans-serif",
            "Tahoma, sans-serif"
          ],
          [
            "Times New Roman, serif",
            "Times New Roman, serif"
          ],
          [
            "Trebuchet MS, sans-serif",
            "Trebuchet MS, sans-serif"
          ],
          [
            "Verdana, sans-serif",
            "Verdana, sans-serif"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_colour",
        "name": "BACKGROUND",
        "colour": "#ff0000"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_colour",
        "name": "TEXTCOLOR",
        "colour": "#ff0000"
      }
    ],
    "output": "style",
    "colour": 10,
    "tooltip": "",
    "helpUrl": ""
  },


  {
    "type": "specialtext",
    "message0": "Specialtext %1 %2 Schriftart %3 %4 Schriftgröße %5 %6 Textfarbe %7",
    "args0": [
      {
        "type": "field_input",
        "name": "CONTENT",
        "text": ""
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "FONT",
        "options": [
          ["Arial", "Arial"],
          ["Brush Script MT", "Brush Script MT"],
          ["Courier New", "Courier New"],
          ["Garamond", "Garamond"],
          ["Georgia", "Georgia"],
          ["Helvetica", "Helvetica"],
          ["Tahoma", "Tahoma"],
          ["Times New Roman", "Times New Roman"],
          ["Trebuchet MS", "Trebuchet MS"],
          ["Verdana", "Verdana"]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "FONTSIZE",
        "options": [
          ["8", "8"],
          ["10", "10"],
          ["12", "12"],
          ["14", "14"],
          ["16", "16"],
          ["18", "18"],
          ["20", "20"],
          ["22", "22"],
          ["24", "24"],
          ["26", "26"]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_colour",
        "name": "TEXTCOLOR",
        "colour": "#ff0000"
      }
    ],
    "previousStatement": "string",
      "nextStatement": [
        "string",
        "headline",
        "paragraph",
        "specialtext",
        "unorderedlist",
        "division",
        "link",
        "image",
        "table",
        "orderedlist"
      ],
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "link",
    "message0": "Link %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "LINK",
        "text": ""
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": [
      "string",
      "headline",
      "paragraph",
      "specialtext",
      "unorderedlist",
      "division",
      "link",
      "image",
      "table",
      "orderedlist"
    ],
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

{
  "type": "linkdescription",
  "message0": "Link %1 Linkbeschreibung %2 %3",
  "args0": [
  {
    "type": "field_input",
    "name": "LINK",
    "text": ""
  },
  {
    "type": "field_input",
    "name": "LINKDESCRIPTION",
    "text": ""
  },
  {
    "type": "input_value",
    "name": "NAME",
    "check": "String"
  }
],
  "previousStatement": null,
  "nextStatement": [
    "string",
    "headline",
    "paragraph",
    "specialtext",
    "unorderedlist",
    "division",
    "link",
    "image",
    "table",
    "orderedlist"
  ],
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},

  {
    "type": "table",
    "message0": "Tabelle %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": "tablerow"
      }
    ],
    "previousStatement": null,
    "nextStatement": ["tablerow"],
    "colour": 190,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "tablerow",
    "message0": "Tabellenreihe %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "CONTENT",
      }
    ],
    "previousStatement": null,
    "nextStatement": ["tabledata"],
    "colour": 190,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "tabledata",
    "message0": "Datenzelle %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "CONTENT",
      }
    ],
    "previousStatement": null,
    "nextStatement": ["string", "specialtext"],
    "colour": 190,
    "tooltip": "",
    "helpUrl": ""
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
