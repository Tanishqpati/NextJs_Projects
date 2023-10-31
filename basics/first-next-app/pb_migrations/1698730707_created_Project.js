/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "uu81vyrqx15z16i",
    "created": "2023-10-31 05:38:27.893Z",
    "updated": "2023-10-31 05:38:27.893Z",
    "name": "Project",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4ou8up6g",
        "name": "Title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ar6t7xpo",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("uu81vyrqx15z16i");

  return dao.deleteCollection(collection);
})
