const {Router} = require('express');
const router = Router();

const { renderNoteForm, 
    createNewNote, 
    renderNotes, 
    renderEditForm,
    updateNotes, 
    deleteNotes} = require('../controllers/notes.controller');

//New note
router.get('/notes/add', renderNoteForm);

router.post('/notes/add', createNewNote);


//Get all notes
router.get('/notes', renderNotes);

//Edit notes
router.get('/notes/edit/:id', renderEditForm);
router.put('/notes/edit/:id', updateNotes);

//Delete Note
router.delete('/notes/delete/:id', deleteNotes);

module.exports = router