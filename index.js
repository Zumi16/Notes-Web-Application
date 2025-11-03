const notes = [];
const dialog = document.getElementById('noteDialog');
const openNotesDialog = document.getElementById('addNotesBtn')

openNotesDialog.addEventListener('click', () => {
    dialog.showModal();
    titleInput.focus();
});

function closeNoteDialog() {
    dialog.close();
}

function saveNote(event) {
    event.preventDefault();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('noteForm').addEventListener('submit', saveNote);


    document.getElementById('noteDialog').addEventListener('click', function(event) {
        if (event.target === this) {
            closeNoteDialog();
        };
    });
});


/*
function addNewNotes() {
   const dialog = document.getElementById('noteDialog');
   dialog.showModal();
}; */
