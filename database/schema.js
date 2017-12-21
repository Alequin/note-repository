export const notesSchema = {
  name: "notes",
  columns: [
    {name: "id", type: "SERIAL8"},
    {name: "title",  type: "VARCHAR(127)"},
    {name: "summary",  type: "TEXT"},
    {name: "file",  type: "VARCHAR(127)"},
    {name: "creation_date",  type: "DATE"}
  ]
}

export const tagsSchema = {
  name: "tags",
  columns: [
    {name: "id", type: "SERIAL8"},
    {name: "name",  type: "VARCHAR(127)"}
  ]
}

export const noteTagsSchema ={
  name: "noteTags",
  columns: [
    {name: "id", type: "SERIAL8"},
    {name: "note_id", type: "SERIAL8"},
    {name: "tag_id", type: "SERIAL8"}
  ]
}
