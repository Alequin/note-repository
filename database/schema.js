export const notesSchema = {
  name: "notes",
  columns: [
    {name: "id", type: "SERIAL8"},
    {name: "title",  type: "VARCHAR(255)"},
    {name: "summary",  type: "TEXT"},
    {name: "file",  type: "VARCHAR(255)"},
    {name: "creation_date",  type: "DATE"}
  ]
}

export const tagsSchema = {
  name: "tags",
  columns: [
    {name: "id", type: "SERIAL8"},
    {name: "name",  type: "VARCHAR(255)"}
  ]
}

export const sourcesSchema ={
  name: "sources",
  columns: [
    {name: "id", type: "SERIAL8"},
    {name: "name", type: "VARCHAR(255)"},
    {name: "type", type: "VARCHAR(255)"},
    {name: "location", type: "TEXT"}
  ]
}

export const noteSourcesSchema ={
  name: "note_sources",
  columns: [
    {name: "id", type: "SERIAL8"},
    {name: "note_id", type: "SERIAL8"},
    {name: "source_id", type: "SERIAL8"}
  ]
}

export const noteTagsSchema ={
  name: "note_tags",
  columns: [
    {name: "id", type: "SERIAL8"},
    {name: "note_id", type: "SERIAL8"},
    {name: "tag_id", type: "SERIAL8"}
  ]
}
