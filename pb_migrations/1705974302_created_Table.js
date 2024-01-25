/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sn0d9pl191v4r8i",
    "created": "2024-01-23 01:45:02.452Z",
    "updated": "2024-01-23 01:45:02.452Z",
    "name": "Table",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jurswcl3",
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
      },
      {
        "system": false,
        "id": "tbl2b9pn",
        "name": "Role",
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
        "id": "kes56jbh",
        "name": "Status",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sn0d9pl191v4r8i");

  return dao.deleteCollection(collection);
})
