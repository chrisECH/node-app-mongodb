const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.send('note add');
}

notesCtrl.createNewNote = (req, res) => {
    res.send('nre note');
}


notesCtrl.renderNotes = (req, res) => {
    res.send('rende notes');
}

notesCtrl.renderEditForm = (req, res) => {
    res.send('render edit form');
}

notesCtrl.upateNotes = (req, res) => {
    res.send('updating notes');
}

notesCtrl.deleteNotes = (req, res) => {
    res.send('deleting notes');
}

module.exports = notesCtrl;