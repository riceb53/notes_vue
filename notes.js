var application = new Vue({
  el: '#application',
  data: {
    notes: [
      {
        content: "Here is my note",
        date: new Date()
      }
    ],
    currentNote: 0
  },
  methods: {
    addNote: function() {
      this.currentNote = this.notes.length;
      this.notes.push({
        date: new Date(),
        content: "Write your note here"
      })
    },
    switchNote: function(theIndex) {
      this.currentNote = theIndex
    }
  }
})
