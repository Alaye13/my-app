/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3kdowuzjb4b7r6f",
    "created": "2024-01-23 01:44:19.500Z",
    "updated": "2024-01-23 01:44:19.500Z",
    "name": "Name",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dyvd4naj",
        "name": "Name",
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
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3kdowuzjb4b7r6f");

  return dao.deleteCollection(collection);
})
