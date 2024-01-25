/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3kdowuzjb4b7r6f")

  // remove
  collection.schema.removeField("dyvd4naj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v19zfqrq",
    "name": "Name",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3kdowuzjb4b7r6f")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("v19zfqrq")

  return dao.saveCollection(collection)
})
