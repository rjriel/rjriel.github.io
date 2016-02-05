define({ "api": [  {    "type": "post",    "url": "/messages/",    "title": "Add Message",    "name": "AddMessage",    "group": "Message",    "version": "1.0.0",    "description": "<p>Add a message to the system</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "text",            "description": "<p>The text for the message</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "ObjectID",            "optional": false,            "field": "id",            "description": "<p>The unique identifier for the message</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  'id': '56a5652c55ab891352f11fd0'\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "400": [          {            "group": "400",            "optional": false,            "field": "BadRequest",            "description": "<p>The text parameter was not specified</p>"          }        ]      }    },    "filename": "api/server.js",    "groupTitle": "Message"  },  {    "type": "delete",    "url": "/messages/:id",    "title": "Delete Message",    "name": "DeleteMessage",    "group": "Message",    "version": "1.0.0",    "description": "<p>Delete a message from the system</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "ObjectID",            "optional": false,            "field": ":id",            "description": "<p>The unique identifier for the message</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>The message 'record deleted'</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  'message': 'record deleted'\n}",          "type": "json"        }      ]    },    "filename": "api/server.js",    "groupTitle": "Message"  },  {    "type": "get",    "url": "/messages/:id",    "title": "Get Message Details",    "name": "GetMessage",    "group": "Message",    "version": "1.0.0",    "description": "<p>Give details about a message in the system</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "ObjectID",            "optional": false,            "field": ":id",            "description": "<p>The unique identifier for the message</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "message",            "description": "<p>The requested message</p>"          },          {            "group": "Success 200",            "type": "ObjectID",            "optional": false,            "field": "message._id",            "description": "<p>The unique identifier for the message</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message.text",            "description": "<p>The message text</p>"          },          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "message.isPalindrome",            "description": "<p>If the message is a palindrome</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  '_id': '56a5652c55ab891352f11fd0',\n  'text': 'first message here'\n  'isPalindrome': false\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "404": [          {            "group": "404",            "optional": false,            "field": "NotFound",            "description": "<p>The requested message was not found</p>"          }        ],        "500": [          {            "group": "500",            "optional": false,            "field": "InternalServerError",            "description": "<p>The identifier specified was invalid</p>"          }        ]      }    },    "filename": "api/server.js",    "groupTitle": "Message"  },  {    "type": "get",    "url": "/messages/",    "title": "List Messages",    "name": "ListMessages",    "group": "Message",    "version": "1.0.0",    "description": "<p>List all messages in the system</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "messages",            "description": "<p>A list of messages</p>"          },          {            "group": "Success 200",            "type": "ObjectID",            "optional": false,            "field": "messages._id",            "description": "<p>The unique identifier for the message</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "messages.text",            "description": "<p>The message text</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n[\n  {\n    '_id': '56a5652c55ab891352f11fd0',\n    'text': 'first message here'\n  },\n  {\n    '_id': '56a5652c55ab891352f11fd5',\n    'text': 'was it tims mitt i saw'\n  }\n]",          "type": "json"        }      ]    },    "filename": "api/server.js",    "groupTitle": "Message"  }] });
