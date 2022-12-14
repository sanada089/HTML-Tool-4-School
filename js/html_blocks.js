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
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },

  //Head-Block

  {
    "type": "head",
    "message0": "Titel %1 %2 Kopf %3 ",
    "args0": [
      {
        "type": "field_input",
        "name": "TITLE",
        "text": ""
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": [
          "division",
          "title",
          "paragraph",
          "string",
          "headline",
          "orderedlist",
          "unorderedlist",
          "image",
        ],
      }
    ],
    "inputsInline": false,
    "previousStatement": "head",
    "colour": 0,
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
          "unorderedlist",
          "image"],
      }
    ],
    "inputsInline": false,
    "previousStatement": "body",
    "colour": 0,
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
    "colour": 100,
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
          ["Ebene 1", "h1"],
          ["Ebene 2", "h2"],
          ["Ebene 3", "h3"],
          ["Ebene 4", "h4"],
          ["Ebene 5", "h5"],
          ["Ebene 6", "h6"]
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
    "colour": 50,
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
    "colour": 50,
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
    "colour": 150,
    "tooltip": "",
    "helpUrl": ""
  },


  {
    "type": "unorderedlist",
    "message0": "Unnummerierte Liste %1 %2 %3",
    "args0": [

      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "TYPE",
        "options": [
          ["Type circle", "circle"],
          ["Type square", "square"],
          ["Type disc", "disc"]
        ]
      },
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
    "colour": 150,
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
    "colour": 150,
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
    "type": "imagelink",
    "message0": "Bilderlink %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "IMAGELINK",
        "text": ""
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "previousStatement": "imageblock",
    "nextStatement": [
      "nothing"
    ],
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "book",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "https://cdn.pixabay.com/photo/2017/01/31/00/08/book-2022461_960_720.png",
        "width": 15,
        "height": 15,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": "imageblock",
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "flower",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "https://cdn.pixabay.com/photo/2013/07/13/10/08/flower-156608_960_720.png",
        "width": 15,
        "height": 15,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": "imageblock",
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
        "colour": "#ffffff"
      }
    ],
    "output": "style",
    "colour": 100,
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
    "colour": 100,
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
    "colour": 200,
    "tooltip": "",
    "helpUrl": ""
  },


  {
    "type": "tablehead",
    "message0": "Tabellenkopf %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "CONTENT",
      }
      ],
    "previousStatement": null,
    "nextStatement": ["string", "specialtext"],
    "colour": 200,
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
    "colour": 200,
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
    "colour": 200,
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
