define({ "api": [
  {
    "type": "post",
    "url": "ocDocument/getByOCID",
    "title": "get document list by OC ID",
    "version": "0.0.1",
    "group": "OC_Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ocid",
            "description": "<p>OC ID to fetch Documents .(OC ID should be pass as a body parameter - required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"Documents Fetched Successfully!!!\",\n        \"data\": {\n            \"ocDocuments\": [{\n                \"_id\": \"string\",\n                \"ocid\": \"string\",\n                \"documentname\":\"String\",\n                \"uplaodedby\":\"String\",\n                \"uploadeddate\":\"Date\",\n                \"dochash\":\"String\"\n                \"__v\": \"number\"\n                },\n            }]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"Invalid OC Number\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ocDocument.js",
    "groupTitle": "OC_Document",
    "name": "PostOcdocumentGetbyocid"
  },
  {
    "type": "post",
    "url": "ocDocument/save",
    "title": "upload Document",
    "version": "0.0.1",
    "group": "OC_Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ocid",
            "description": "<p>reference of OC .(OC ID should be pass as a body parameter - required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "documentname",
            "description": "<p>name of uploaded file .(document name should be pass as a body parameter - required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uploadedby",
            "description": "<p>id of uploaded person .(uploaded by should be pass as a body parameter - required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "uploadeddate",
            "description": "<p>uploaded Date.(uploaded Date should be pass as a body parameter - required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dochash",
            "description": "<p>hash of uploaded file.(dochash should be pass as a body parameter - required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"Document uploaded successfully!!!\",\n        \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"something looks wrong!!!!!!\",\n        \"data\": err\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ocDocument.js",
    "groupTitle": "OC_Document",
    "name": "PostOcdocumentSave"
  },
  {
    "type": "post",
    "url": "ocList/",
    "title": "get OC List",
    "version": "0.0.1",
    "group": "OC_List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>to get OC List. (Should pass as a body parameter.- required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Priority",
            "description": "<p>to filter OC List. (Should pass as a body parameter. - optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branchId",
            "description": "<p>for branch group user. (Should pass as a body parameter. - optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"OC List Found!!!\",\n        \"data\": {\n                \"_id\": \"String\",\n                \"OCNumber\": \"Number\",\n                \"SubAssemblyIDs\": [\n                    {\n                        \"_id\": \"String\",\n                        \"name\": \"String\"\n                    }\n                ],\n                \"SpareIDs\":[\n                    {\n                        \"_id\": \"5d57f8bd4a56a74071c4824d\",\n                        \"name\": \"testing1\"\n                    }\n                ],\n                \"SerialNumbers\":[\n                    {\n                        \"name\":\"String\",\n                        \"srno\":\"String\"\n                    }\n                ],\n                \"OCDate\" :\"Date\",\n                \"OCNotes\":\"String\",\n                \"Priority\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"CustomerType\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"Customer\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\",\n                    \"city\":\"String\",\n                    \"contactNumber\":\"String\"\n                },\n                \"BranchID\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"ProductID\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"Status\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"CreatedBy\":\"String\",\n                \"CreatedDate\":\"Date\",\n                \"UpdatedBy\":\"String\",\n                \"UpdatedDate\":\"Date\",\n                \"__v\": 0\n            },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"No OC List found\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ocList.js",
    "groupTitle": "OC_List",
    "name": "PostOclist"
  },
  {
    "type": "post",
    "url": "ocList/create",
    "title": "create new oc List",
    "version": "0.0.1",
    "group": "OC_List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OCNumber",
            "description": "<p>to create new OC .(Oc Number should be pass as a body parameter - required and unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "OCDate",
            "description": "<p>Oc Date should be pass as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OCNotes",
            "description": "<p>Oc Notes should be pass as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Priority",
            "description": "<p>Priority is an object(Possible Values:HIGH,MEDIUM,LOW).( Field -_id:String , name :String.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CustomerType",
            "description": "<p>Customer Type is an object(Possible Values:Customer,Corporate,Government).( Field -_id:String , name :String.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Customer",
            "description": "<p>Customer is an object(Field - name : String , city : String,contactNumber:String).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BranchID",
            "description": "<p>branch Ids is an object ( Field -_id:String , name :String.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProductID",
            "description": "<p>product Ids is an object ( Field - _id:String ,name :String.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubAssemblyIDs",
            "description": "<p>branch Ids is an array of objects ( Field -_id:String , name :String.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SpareIDs",
            "description": "<p>spare Ids is an object ( Field - _id:String ,name :String.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Installation",
            "description": "<p>installtion is an object.(Field - installationDate:Date,installationComplete:boolean,invoiceDate:Date,InstallationTechnician:String,technicianContact:String,transport:String,invoiceNumber:String)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Status is an object ( Field - name :String.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CreatedBy",
            "description": "<p>created by (person who created the list)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UpdatedBy",
            "description": "<p>updated by ( person name who updated the list)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "CreatedDate",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "UpdatedDate",
            "description": "<p>updated date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SerialNumbers",
            "description": "<p>serial numbers is an array of objects ( Field - ID:Number ,name : String, srno : String)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"OC List created successfully!!!\",\n        \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"Oc List Already Exist!!\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ocList.js",
    "groupTitle": "OC_List",
    "name": "PostOclistCreate"
  },
  {
    "type": "post",
    "url": "ocList/getByOCNumber",
    "title": "get oc by OC Number",
    "version": "0.0.1",
    "group": "OC_List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "OCNumber",
            "description": "<p>to get OC. (Should pass as a body parameter. - required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>to get OC List. (Should pass as a body parameter. - required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"OC List Found!!!\",\n        \"data\": {\n                \"_id\": \"String\",\n                \"OCNumber\": \"Number\",\n                \"SubAssemblyIDs\": [\n                    {\n                        \"_id\": \"String\",\n                        \"name\": \"String\"\n                    }\n                ],\n                \"SpareIDs\":[\n                    {\n                        \"_id\": \"5d57f8bd4a56a74071c4824d\",\n                        \"name\": \"testing1\"\n                    }\n                ],\n                \"SerialNumbers\":[\n                    {\n                        \"name\":\"String\",\n                        \"srno\":\"String\"\n                    }\n                ],\n                \"OCDate\" :\"Date\",\n                \"OCNotes\":\"String\",\n                \"Priority\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"CustomerType\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"Customer\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\",\n                    \"city\":\"String\",\n                    \"contactNumber\":\"String\"\n                },\n                \"BranchID\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"ProductID\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"installation\":{\n                    \"_id\":\"String\",\n                    \"installationDate\":Date\",\n                    \"installationComplete\":\"String\",\n                    \"invoiceDate\":\"Date\",\n                    \"InstallationTechnician\":\"String\",\n                    \"technicianContact\":\"String\",\n                    \"transport\":\"String\",\n                    \"invoiceNumber\":\"String\"\n                }\n                \"Status\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"CreatedBy\":\"String\",\n                \"CreatedDate\":\"Date\",\n                \"UpdatedBy\":\"String\",\n                \"UpdatedDate\":\"Date\",\n                \"__v\": 0\n            },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"Not found\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ocList.js",
    "groupTitle": "OC_List",
    "name": "PostOclistGetbyocnumber"
  },
  {
    "type": "post",
    "url": "ocList/getOCArchieves",
    "title": "get Closed OC List",
    "version": "0.0.1",
    "group": "OC_List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>to get OC List. (Should pass as a body parameter.- required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branchId",
            "description": "<p>for branch group user. (Should pass as a body parameter. - optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Priority",
            "description": "<p>for Oc List. (Should pass as a body parameter. - optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"OC List Found!!!\",\n        \"data\": {\n                \"_id\": \"String\",\n                \"OCNumber\": \"Number\",\n                \"SubAssemblyIDs\": [\n                    {\n                        \"_id\": \"String\",\n                        \"name\": \"String\"\n                    }\n                ],\n                \"SpareIDs\":[\n                    {\n                        \"_id\": \"5d57f8bd4a56a74071c4824d\",\n                        \"name\": \"testing1\"\n                    }\n                ],\n                \"SerialNumbers\":[\n                    {\n                        \"name\":\"String\",\n                        \"srno\":\"String\"\n                    }\n                ],\n                \"OCDate\" :\"Date\",\n                \"OCNotes\":\"String\",\n                \"Priority\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"CustomerType\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"Customer\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\",\n                    \"city\":\"String\",\n                    \"contactNumber\":\"String\"\n                },\n                \"BranchID\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"ProductID\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"Status\":{\n                    \"_id\":\"String\",\n                    \"name\":\"String\"\n                },\n                \"CreatedBy\":\"String\",\n                \"CreatedDate\":\"Date\",\n                \"UpdatedBy\":\"String\",\n                \"UpdatedDate\":\"Date\",\n                \"__v\": 0\n            },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"Not found\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ocList.js",
    "groupTitle": "OC_List",
    "name": "PostOclistGetocarchieves"
  },
  {
    "type": "post",
    "url": "ocList/updateByOCId",
    "title": "update oc List by OC ID",
    "version": "0.0.1",
    "group": "OC_List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id to update OC. (Should pass as a Body parameter.-required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>roleName of user.(Role Name should be pass as a body parameter -required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Name of user.(User Name should be pass as a body parameter -required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of OC.(Satus should be pass as a body parameter -required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "OCDate",
            "description": "<p>Oc Date should be pass as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OCNotes",
            "description": "<p>Oc Notes should be pass as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Priority",
            "description": "<p>Priority is an object(Possible Values:HIGH,MEDIUM,LOW).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CustomerType",
            "description": "<p>Customer Type is an object(Possible Values:Customer,Corporate,Government).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Customer",
            "description": "<p>Customer is an object(Field - name : String , city : String,contactNumber:String).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BranchID",
            "description": "<p>branch Ids is an object ( Field - name :String.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProductID",
            "description": "<p>product Ids is an object ( Field - name :String.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubAssemblyIDs",
            "description": "<p>branch Ids is an array of objects ( Field - name :String.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SpareIDs",
            "description": "<p>spare Ids is an object ( Field - name :String.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Status is an object ( Field - name :String.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CreatedBy",
            "description": "<p>created by (person who created the list)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UpdatedBy",
            "description": "<p>updated by ( person name who updated the list)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "CreatedDate",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "UpdatedDate",
            "description": "<p>updated date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SerialNumbers",
            "description": "<p>serial numbers is an array of objects ( Field - name : String, srno : String)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"OC Updated Successfully!!!\",\n        \"data\": null",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"Not found\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ocList.js",
    "groupTitle": "OC_List",
    "name": "PostOclistUpdatebyocid"
  },
  {
    "type": "post",
    "url": "ocList/updateStatus",
    "title": "update OC status",
    "version": "0.0.1",
    "group": "OC_List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ocId",
            "description": "<p>Oc Id to update oc .(Oc ID should be pass as a body parameter - required )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Name of user.(User Name should be pass as a body parameter -required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>roleName should be pass as a body parameter-required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of current OC. Status should be pass as a body parameter - required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "installationComplete",
            "description": "<p>installation Complete should pass as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branchName",
            "description": "<p>branch Name  should pass as a body parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"OC Status Updated successfully!!!\",\n        \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"Invalid OC ID!\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ocList.js",
    "groupTitle": "OC_List",
    "name": "PostOclistUpdatestatus"
  },
  {
    "type": "get",
    "url": "userRole/",
    "title": "get User Role list",
    "version": "0.0.1",
    "group": "User_Role",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"user Role List fetched!!!\",\n        \"data\": {\n            \"userRole\": {\n                \"_id\": \"string\"\",\n                \"RoleName\": \"string\",\n                \"__v\": \"number\"\n                },\n            }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"Not Found\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRole.js",
    "groupTitle": "User_Role",
    "name": "GetUserrole"
  },
  {
    "type": "post",
    "url": "userRole/create",
    "title": "create new User Role",
    "version": "0.0.1",
    "group": "User_Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>to create new role.(role Name should be pass as a body parameter - required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"User Role created successfully!!!\",\n        \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"Role Name already Exist!!!\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRole.js",
    "groupTitle": "User_Role",
    "name": "PostUserroleCreate"
  },
  {
    "type": "get",
    "url": "branch/",
    "title": "get branch list",
    "version": "0.0.1",
    "group": "masterDatabase",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"Branch list Fetched!!!\",\n        \"data\": {\n                \"branchList\":[\n                        {\n                                \"_id\":\"string\",\n                                \"name\":\"string\",\n                                \"address\":\"string\",\n                                \"contactName\":\"string,\"\n                                \"contactNumber\":\"string\",\n                                \"country\":\"string\"\n                        }\n                ]\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"not found\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/masterDatabase/branch.js",
    "groupTitle": "masterDatabase",
    "name": "GetBranch"
  },
  {
    "type": "get",
    "url": "customer/",
    "title": "get customer list",
    "version": "0.0.1",
    "group": "masterDatabase",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"Customer list Fetched!!!\",\n        \"data\": {\n                \"customerList\":[\n                        {\n                                \"_id\":\"string\",\n                                \"name\":\"string\",\n                                \"address\":\"string\",\n                                \"contactNumber\":\"string\",\n                                \"city\":\"string\",\n                                \"state\":\"string\",\n                                \"zip\":\"int\",\n                                \"country\":\"string\"\n                        }\n                ]\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"not found\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/masterDatabase/customer.js",
    "groupTitle": "masterDatabase",
    "name": "GetCustomer"
  },
  {
    "type": "get",
    "url": "customerType/",
    "title": "get customerType list",
    "version": "0.0.1",
    "group": "masterDatabase",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"customerType list Fetched!!!\",\n        \"data\": {\n                \"customerTypeList\":[\n                        {\n                                \"_id\":\"string\",\n                                \"name\":\"string\"\n                        }\n                ]\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"not found\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/masterDatabase/customerType.js",
    "groupTitle": "masterDatabase",
    "name": "GetCustomertype"
  },
  {
    "type": "get",
    "url": "priority/",
    "title": "get priority list",
    "version": "0.0.1",
    "group": "masterDatabase",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"Priority list Fetched!!!\",\n        \"data\": {\n                \"priorityList\":[\n                        {\n                                \"_id\":\"string\",\n                                \"name\":\"string\"\n                        }\n                ]\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"not found\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/masterDatabase/priority.js",
    "groupTitle": "masterDatabase",
    "name": "GetPriority"
  },
  {
    "type": "get",
    "url": "products/",
    "title": "get product list",
    "version": "0.0.1",
    "group": "masterDatabase",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"Product list Fetched!!!\",\n        \"data\": {\n                \"productList\":[\n                        {\n                                \"_id\":\"string\",\n                                \"name\":\"string\"\n                        }\n                ]\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"not found\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/masterDatabase/product.js",
    "groupTitle": "masterDatabase",
    "name": "GetProducts"
  },
  {
    "type": "get",
    "url": "spare/",
    "title": "get spare list",
    "version": "0.0.1",
    "group": "masterDatabase",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"Spare list Fetched!!!\",\n        \"data\": {\n                \"spareList\":[\n                        {\n                                \"_id\":\"string\",\n                                \"name\":\"string\"\n                        }\n                ]\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"not found\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/masterDatabase/spare.js",
    "groupTitle": "masterDatabase",
    "name": "GetSpare"
  },
  {
    "type": "get",
    "url": "subAssembly/",
    "title": "get SubAssembly list",
    "version": "0.0.1",
    "group": "masterDatabase",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"SubAssembly list Fetched!!!\",\n        \"data\": {\n                \"subAssemblyList\":[\n                        {\n                                \"_id\":\"string\",\n                                \"name\":\"string\"\n                        }\n                ]\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"not found\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/masterDatabase/subAssembly.js",
    "groupTitle": "masterDatabase",
    "name": "GetSubassembly"
  },
  {
    "type": "post",
    "url": "users/login",
    "title": "login",
    "version": "0.0.1",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email id for login.( email id should be pass as a body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password for login.( password should be pass as a body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"user found!!!\",\n        \"data\": {\n            \"user\": {\n                \"_id\": \"string\"\",\n                \"name\": \"string\",\n                \"email\": \"string\",\n                \"password\": \"string\",\n                \"__v\": \"number\"\n                },\n            \"token\": \"string\",\n            \"userRole\":\"String\"                \n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"status\": \"error\",\n\t    \"message\": \"Invalid email/password!!!\",\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "user",
    "name": "PostUsersLogin"
  },
  {
    "type": "post",
    "url": "users/register",
    "title": "register",
    "version": "0.0.1",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name to register.(name id should be pass as a body parameter - required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password for login.(password  should be pass as a body parameter - required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email to register.(Email should be pass as a body parameter - required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>to assign role to user.(role Id should be pass as a body parameter - required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"status\": \"success\",\n        \"message\": \"New User added successfully!!!\",\n        \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"status\": \"error\",\n        \"message\": \"Something is wrong\",\n        \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "user",
    "name": "PostUsersRegister"
  }
] });
