const notes = [];
const dialog = document.getElementById('noteDialog');
const openNotesDialog = document.getElementById('addNotesBtn')

    openNotesDialog.addEventListener('click', () => {
        dialog.showModal();
    });

function closeNoteDialog() {
    dialog.close();
}

/*
function addNewNotes() {
   const dialog = document.getElementById('noteDialog');
   dialog.showModal();
}; */
