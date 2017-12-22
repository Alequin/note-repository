export const notesSchema = {
  name: "notes",
  columns: {
    id: {name: "id", type: "SERIAL8"},
    title: {name: "title",  type: "VARCHAR(255)"},
    summary: {name: "summary",  type: "TEXT"},
    file: {name: "file",  type: "VARCHAR(255)"},
    creationDate: {name: "creation_date",  type: "DATE"}
  }
}

export const tagsSchema = {
  name: "tags",
  columns: {
    id: {name: "id", type: "SERIAL8"},
    name: {name: "name",  type: "VARCHAR(255)"}
  }
}

export const sourcesSchema ={
  name: "sources",
  columns: {
    id: {name: "id", type: "SERIAL8"},
    name: {name: "name", type: "VARCHAR(255)"},
    type: {name: "type", type: "VARCHAR(255)"},
    location: {name: "location", type: "TEXT"}
  }
}

export const noteTagsSchema ={
  name: "note_tags",
  columns: {
    id: {name: "id", type: "SERIAL8"},
    noteId: {name: "note_id", type: "SERIAL8"},
    tagId: {name: "tag_id", type: "SERIAL8"}
  }
}

export const noteSourcesSchema ={
  name: "note_sources",
  columns: {
    id: {name: "id", type: "SERIAL8"},
    noteId: {name: "note_id", type: "SERIAL8"},
    sourceId: {name: "source_id", type: "SERIAL8"}
  }
}
