define({ "api": [  {    "type": "get",    "url": "/userRole/",    "title": "get User Role list",    "version": "0.0.1",    "group": "User_Role",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n        \"status\": \"success\",\n        \"message\": \"user Role List fetched!!!\",\n        \"data\": {\n            \"userRole\": {\n                \"_id\": \"string\"\",\n                \"RoleName\": \"string\",\n                \"__v\": \"number\"\n                },\n            }\n}\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"Not Found\",\n        \"data\": null\n        }",          "type": "json"        }      ]    },    "filename": "routes/userRole.js",    "groupTitle": "User_Role",    "name": "GetUserrole"  },  {    "type": "post",    "url": "/userRole/create",    "title": "create new User Role",    "version": "0.0.1",    "group": "User_Role",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "roleName",            "description": "<p>to create new role.(role Name should be pass as a body parameter - required)</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n        \"status\": \"success\",\n        \"message\": \"User Role created successfully!!!\",\n        \"data\": null\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"Role Name already Exist!!!\",\n        \"data\": null\n        }",          "type": "json"        }      ]    },    "filename": "routes/userRole.js",    "groupTitle": "User_Role",    "name": "PostUserroleCreate"  },  {    "type": "get",    "url": "customerType/",    "title": "get customerType list",    "version": "0.0.1",    "group": "masterDatabase",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n        \"status\": \"success\",\n        \"message\": \"customerType list Fetched!!!\",\n        \"data\": {\n                \"customerTypeList\":[\n                        {\n                                \"_id\":\"string\",\n                                \"name\":\"string\"\n                        }\n                ]\n        }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"not found\",\n        \"data\": null\n        }",          "type": "json"        }      ]    },    "filename": "routes/masterDatabase/customerType.js",    "groupTitle": "masterDatabase",    "name": "GetCustomertype"  },  {    "type": "get",    "url": "priority/",    "title": "get priority list",    "version": "0.0.1",    "group": "masterDatabase",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n        \"status\": \"success\",\n        \"message\": \"Priority list Fetched!!!\",\n        \"data\": {\n                \"priorityList\":[\n                        {\n                                \"_id\":\"string\",\n                                \"name\":\"string\"\n                        }\n                ]\n        }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"not found\",\n        \"data\": null\n        }",          "type": "json"        }      ]    },    "filename": "routes/masterDatabase/priority.js",    "groupTitle": "masterDatabase",    "name": "GetPriority"  },  {    "type": "get",    "url": "products/",    "title": "get product list",    "version": "0.0.1",    "group": "masterDatabase",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n        \"status\": \"success\",\n        \"message\": \"Product list Fetched!!!\",\n        \"data\": {\n                \"productList\":[\n                        {\n                                \"_id\":\"string\",\n                                \"name\":\"string\"\n                        }\n                ]\n        }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"not found\",\n        \"data\": null\n        }",          "type": "json"        }      ]    },    "filename": "routes/masterDatabase/product.js",    "groupTitle": "masterDatabase",    "name": "GetProducts"  },  {    "type": "get",    "url": "spare/",    "title": "get spare list",    "version": "0.0.1",    "group": "masterDatabase",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n        \"status\": \"success\",\n        \"message\": \"Spare list Fetched!!!\",\n        \"data\": {\n                \"spareList\":[\n                        {\n                                \"_id\":\"string\",\n                                \"name\":\"string\"\n                        }\n                ]\n        }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"not found\",\n        \"data\": null\n        }",          "type": "json"        }      ]    },    "filename": "routes/masterDatabase/spare.js",    "groupTitle": "masterDatabase",    "name": "GetSpare"  },  {    "type": "get",    "url": "subAssembly/",    "title": "get SubAssembly list",    "version": "0.0.1",    "group": "masterDatabase",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n        \"status\": \"success\",\n        \"message\": \"SubAssembly list Fetched!!!\",\n        \"data\": {\n                \"subAssemblyList\":[\n                        {\n                                \"_id\":\"string\",\n                                \"name\":\"string\"\n                        }\n                ]\n        }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"not found\",\n        \"data\": null\n        }",          "type": "json"        }      ]    },    "filename": "routes/masterDatabase/subAssembly.js",    "groupTitle": "masterDatabase",    "name": "GetSubassembly"  },  {    "type": "post",    "url": "/users/login",    "title": "login",    "version": "0.0.1",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email id for login.( email id should be pass as a body parameter)</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Password for login.( password should be pass as a body parameter)</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n        \"status\": \"success\",\n        \"message\": \"user found!!!\",\n        \"data\": {\n            \"user\": {\n                \"_id\": \"string\"\",\n                \"name\": \"string\",\n                \"email\": \"string\",\n                \"password\": \"string\",\n                \"__v\": \"number\"\n                },\n            \"token\": \"string\"\n            }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "\n{\n\t    \"status\": \"error\",\n\t    \"message\": \"Invalid email/password!!!\",\n\t    \"data\": null\n\t   }",          "type": "json"        }      ]    },    "filename": "routes/users.js",    "groupTitle": "user",    "name": "PostUsersLogin"  },  {    "type": "post",    "url": "/users/register",    "title": "register",    "version": "0.0.1",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>name to register.(name id should be pass as a body parameter - required)</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Password for login.(password  should be pass as a body parameter - required)</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>email to register.(Email should be pass as a body parameter - required)</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "roleId",            "description": "<p>to assign role to user.(role Id should be pass as a body parameter - required)</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n        \"status\": \"success\",\n        \"message\": \"New User added successfully!!!\",\n        \"data\": null\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"Something is wrong\",\n        \"data\": null\n        }",          "type": "json"        }      ]    },    "filename": "routes/users.js",    "groupTitle": "user",    "name": "PostUsersRegister"  }] });
