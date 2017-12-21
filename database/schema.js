module.exports = {

  notesTable: {
    name: "notes",
    columns: {
      id: {name: "id", type: "SERIAL8"},
      title: {name: "title",  type: "VARCHAR(127)"},
      summary: {name: "summary",  type: "TEXT"},
      file: {name: "file",  type: "VARCHAR(127)"},
      creation_date: {name: "creation_date",  type: "DATE"}
    }
  },

  tagsTable: {
    name: "tags",
    columns: {
      id: {name: "id", type: "SERIAL8"},
      title: {name: "title",  type: "VARCHAR(127)"}
    }
  },

  noteTagsTable: {
    name: "noteTags",
    columns: {
      id: {name: "id", type: "SERIAL8"},
      note_id: {name: "note_id", type: "SERIAL8"},
      tag_id: {name: "tag_id", type: "SERIAL8"}
    }
  }
  
}
