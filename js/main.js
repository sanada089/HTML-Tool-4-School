//Definition der Toolbox


var toolbox = {
  "kind": "categoryToolbox",

  //Blöcke, die in der Toolbox (jeweiligen Kategorie) verwendet werden
  "contents": [
    {
      "kind": "category",
      "name": "Grundgerüst",
      "colour": "0",
      "contents": [
        {
          "kind": "block",
          "type": "html_page",
        },
        {
          "kind": "block",
          "type": "head",
        },
        {
          "kind": "block",
          "type": "body",
        },
      ]
    },

    {
      "kind": "category",
      "name": "Textstruktur",
      "colour": "50",
      "contents": [
        {
          "kind": "block",
          "type": "string",
        },
        {
          "kind": "block",
          "type": "headline",
        },
        {
          "kind": "block",
          "type": "paragraph",
        },
        {
          "kind": "block",
          "type": "link",
        },
        {
          "kind": "block",
          "type": "linkdescription",
        },
        {
          "kind": "block",
          "type": "image",
        },
        ]
    },

    {
      "kind": "category",
      "name": "Design",
      "colour": "100",
      "contents": [
        {
          "kind": "block",
          "type": "division",
        },
        {
          "kind": "block",
          "type": "style",
        },
        {
          "kind": "block",
          "type": "specialtext",
        },
        {
          "kind": "block",
          "type": "image",
        },
        {
          "kind": "block",
          "type": "imagelink",
        },
        {
          "kind": "block",
          "type": "book",
        },
        {
          "kind": "block",
          "type": "flower",
        },
      ]
    },
    {
      "kind": "category",
      "name": "Liste",
      "colour": "150",
      "contents": [
        {
          "kind": "block",
          "type": "orderedlist",
        },
        {
          "kind": "block",
          "type": "unorderedlist",
        },
        {
          "kind": "block",
          "type": "listitem",
        },
        {
          "kind": "block",
          "type": "string",
        },
      ]
    },
    {
      "kind": "category",
      "name": "Tabelle",
      "colour": "200",
      "contents": [
        {
          "kind": "block",
          "type": "table",
        },
        {
          "kind": "block",
          "type": "tablehead",
        },
        {
          "kind": "block",
          "type": "tablerow",
        },
        {
          "kind": "block",
          "type": "tabledata",
        },
        {
          "kind": "block",
          "type": "string",
        },
      ]
    },

  ]

}




