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
      "link"
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
      "type": "specialtext",
      "message0": "Specialtext %1",
      "args0": [
        {
          "type": "field_input",
          "name": "CONTENT",
          "text": ""
        },
        {
          "type": "field_colour",
          "name": "FARBE",
          "colour": "#ff0000"
        },
        {
          "type": "field_dropdown",
          "name": "SCHRIFTART",
          "options": [
              ["Arial", "Arial"],
              ["Comic Sans MS", "Comic Sans MS"],
              ["Courier New", "Courier New"],
              ["Calibri", "Calibri"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "SCHRIFTGRÖSSE",
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
              ["26", "26"],
              ["28", "28"],
              ["36", "36"],
              ["48", "48"],
              ["72", "72"]
          ]
        },
      ]

  "previousStatement": "string",
  "nextStatement": [
  "string",
  "specialtext",
  "headline",
  "paragraph",
    "link"
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
    "previousStatement": "string",
    "nextStatement": [
      "string",
      "specialtext",
      "headline",
      "paragraph",
      "link"
    ],
    "colour": 0,
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
