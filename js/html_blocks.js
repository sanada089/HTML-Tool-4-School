"use script"
//Speziell definierte HTML-Blöcke und ihre Eigenschaften
const htmlBlocks = [

  //Grundgerüst-Block

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

  //Kopf-Block

  {
    "type": "head",
    "message0": "Kopf %1 Titel %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "TITLE",
        "text": ""
      },
    ],
    "inputsInline": false,
    "previousStatement": "head",
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },

  //Body-Block

  {
    "type": "body",
    "message0": "Körper %1 Style %2 Inhalt %3",
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
        "check": ["division",
          "string",
          "headline",
          "paragraph",
          "break",
          "orderedlist",
          "unorderedlist",
          "image",
          "specialtext",
          "link",
          "linkdescription",
          "table"],
      }
    ],
    "inputsInline": false,
    "previousStatement": "body",
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },

  //Division-Block

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
          "break",
          "orderedlist",
          "unorderedlist",
          "image",
          "specialtext",
          "link",
          "linkdescription",
          "table"],
      }
    ],
    "previousStatement": "division",
    "nextStatement":
      ["division",
      "string",
      "headline",
      "paragraph",
      "break",
      "orderedlist",
      "unorderedlist",
      "image",
      "specialtext",
      "link",
      "linkdescription",
      "table"],
    "colour": 100,
    "tooltip": "",
    "helpUrl": ""
  },

  //Text-Block

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
    "nextStatement": ["division",
      "string",
      "headline",
      "paragraph",
      "break",
      "orderedlist",
      "unorderedlist",
      "image",
      "specialtext",
      "link",
      "linkdescription",
      "table"],
    "colour": 0,
    "tooltip": "",
    "helpUrl": "https://www.w3schools.com/tags/tag_html.asp"
  },

  //Überschrift-Block

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
        "type": "field_input",
        "name": "CONTENT",
        "text": "Hier Überschrift einfügen"
      }
    ],
    "previousStatement": "headline",
    "nextStatement": ["division",
      "string",
      "headline",
      "paragraph",
      "break",
      "orderedlist",
      "unorderedlist",
      "image",
      "specialtext",
      "link",
      "linkdescription",
      "table"],
    "colour": 50,
    "tooltip": "",
    "helpUrl": "https://www.w3schools.com/tags/tag_html.asp"
  },

  //Absatz-Block

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
    "nextStatement": ["division",
      "string",
      "headline",
      "paragraph",
      "break",
      "orderedlist",
      "unorderedlist",
      "image",
      "specialtext",
      "link",
      "linkdescription",
      "table"],
    "colour": 50,
    "tooltip": "",
    "helpUrl": "https://www.w3schools.com/tags/tag_html.asp"
  },

  //Zeilenumbruch-Block

  {
    "type": "break",
    "message0": "Zeilenumbruch %1",
    "args0": [
      {
        "type": "input_dummy",
      }
    ],
    "nextStatement": ["division",
      "string",
      "headline",
      "paragraph",
      "break",
      "orderedlist",
      "unorderedlist",
      "image",
      "specialtext",
      "link",
      "linkdescription",
      "table"],
    "previousStatement": "break",
    "colour": 50,
  },

//Nummerierte Liste

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
    "nextStatement": ["division",
      "string",
      "headline",
      "paragraph",
      "break",
      "orderedlist",
      "unorderedlist",
      "image",
      "specialtext",
      "link",
      "linkdescription",
      "table"],
    "colour": 150,
    "tooltip": "",
    "helpUrl": ""
  },

  //unnummerierte List

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
    "nextStatement": ["division",
      "string",
      "headline",
      "paragraph",
      "break",
      "orderedlist",
      "unorderedlist",
      "image",
      "specialtext",
      "link",
      "linkdescription",
      "table"],
    "colour": 150,
    "tooltip": "",
    "helpUrl": ""
  },

  //Listeneintrag

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
          "linkdescription",
          "table",
          "break"
        ]
      }
    ],
    "previousStatement": "listitem",
    "nextStatement": "listitem",
    "colour": 150,
    "tooltip": "",
    "helpUrl": ""
  },

  //Bild-Block

  {
    "type": "image",
    "message0": "Bild %1 Breite %2 Höhe %3",
    "args0": [
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": "imageblock"
      },
      {
        "type": "field_number",
        "name": "WIDTH",
        "value": 240,
        "min": 1,
        "max": 2400
      },
      {
        "type": "field_number",
        "name": "HEIGHT",
        "value": 150,
        "min": 1,
        "max": 2400
      },
    ],
    "previousStatement": "image",
    "nextStatement": ["division",
      "string",
      "headline",
      "paragraph",
      "break",
      "orderedlist",
      "unorderedlist",
      "image",
      "specialtext",
      "link",
      "linkdescription",
      "table"],
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

  //Bildlink-Block, in den der Link des Bildes geschrieben wird um ihn dann in den zugehörigen Bild-Block einzusetzen
  {
    "type": "imagelink",
    "message0": "Bilderlink %1",
    "args0": [
      {
        "type": "field_input",
        "name": "IMAGELINK",
        "text": ""
      },
    ],
    "previousStatement": "imageblock",
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

  //Beispielbild Buch
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

  //Beispielbild Blume
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

  //Bild Lehrkraft Herr Rainer
  {
    "type": "rainer",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "img/rainer.png",
        "width": 100,
        "height": 70,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": "imageblock",
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

//Bild Lehrkraft Frau Rimpfl
  {
    "type": "rimpfl",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "img/rimpfl.png",
        "width": 100,
        "height": 70,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": "imageblock",
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

  //Bild Lehrkraft Frau Scott
  {
    "type": "scott",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "img/scott.png",
        "width": 100,
        "height": 70,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": "imageblock",
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

  //Bild Lehrkraft Frau Smith
  {
    "type": "smith",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "img/smith.png",
        "width": 100,
        "height": 70,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": "imageblock",
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

  //Bild Lehrkraft Herr Winter
  {
    "type": "winter",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "img/winter.png",
        "width": 100,
        "height": 70,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": "imageblock",
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

  //Style-Block, der in Division oder Body eingesetzt werden kann um Schriftart, Hintergrundfarbe und Textfarbe zu bestimmen
  {
    "type": "style",
    "message0": "Schriftart %1 %2 Hintergrundfarbe %3 %4 Textfarbe %5",
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

  //Special-Text-Block, der Texthervorhebung durch Schriftgröße, unterstreichen, fett oder kursiv erlaubt

  {
    "type": "specialtext",
    "message0": "Specialtext %1 %2 Textfarbe %3 Schriftgröße %4 %5 fett %6 kursiv %7 unterstrichen %8",
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
        "type": "field_colour",
        "name": "TEXTCOLOR",
        "colour": "#ff0000"
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
        "type": "field_checkbox",
        "name": "FETT",
        "checked": true
      },
      {
        "type": "field_checkbox",
        "name": "KURSIV",
        "checked": true
      },
      {
        "type": "field_checkbox",
        "name": "UNTERSTRICHEN",
        "checked": true
      }
    ],
    "previousStatement": "string",
    "nextStatement": ["division",
      "string",
      "headline",
      "paragraph",
      "break",
      "orderedlist",
      "unorderedlist",
      "image",
      "specialtext",
      "link",
      "linkdescription",
      "table"],
    "colour": 100,
    "tooltip": "",
    "helpUrl": ""
  },

  //Link-Block, mit dem Links erzeugt werden können

  {
    "type": "link",
    "message0": "Link %1",
    "args0": [
      {
        "type": "field_input",
        "name": "LINK",
        "text": ""
      }
    ],
    "previousStatement": "link",
    "nextStatement": ["division",
      "string",
      "headline",
      "paragraph",
      "break",
      "orderedlist",
      "unorderedlist",
      "image",
      "specialtext",
      "link",
      "linkdescription",
      "table"],
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

  //Link-Block, der zusätzlich eine Anzeige der Linkbeschreibung, anstelle der URL erlaubt

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
    "previousStatement": "link",
    "nextStatement": ["division",
      "string",
      "headline",
      "paragraph",
      "break",
      "orderedlist",
      "unorderedlist",
      "image",
      "specialtext",
      "link",
      "linkdescription",
      "table"],
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },

  //Tabelle

  {
    "type": "table",
    "message0": "Tabelle %1 Rand %2 %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "BORDER",
        "options": [
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
        ]
      },
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": ["tablerow",
          "tablehead"]
      },
    ],
    "previousStatement": "table",
    "nextStatement": ["division",
      "string",
      "headline",
      "paragraph",
      "break",
      "orderedlist",
      "unorderedlist",
      "image",
      "specialtext",
      "link",
      "linkdescription",
      "table"],
    "colour": 200,
    "tooltip": "",
    "helpUrl": ""
  },

  //Tabellen-Überschrift
  {
    "type": "tablehead",
    "message0": "Tabellenüberschrift %1",
    "args0": [
      {
        "type": "field_input",
        "name": "CONTENT",
        "text": "Hier Überschrift einfügen"
      }
    ],
    "previousStatement": "tablehead",
    "nextStatement": "tablerow",
    "colour": 200,
    "tooltip": "",
    "helpUrl": ""
  },

  //Tabellenreihe

  {
    "type": "tablerow",
    "message0": "Tabellenreihe %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": "tabledata"
      }
    ],
    "previousStatement": "tablerow",
    "nextStatement": "tablerow",
    "colour": 200,
    "tooltip": "",
    "helpUrl": ""
  },

  //Tabellenzelle
  {
    "type": "tabledata",
    "message0": "Datenzelle %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check":["string",
          "break",
          "orderedlist",
          "unorderedlist",
          "image",
          "specialtext",
          "link",
          "linkdescription"]
      }
    ],
    "previousStatement": "tabledata",
    "nextStatement": "tabledata",
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
