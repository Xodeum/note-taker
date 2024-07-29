const noteInput = document.getElementById('note-input');
const addButton = document.getElementById('add-note');
const noteList = document.getElementById('note-list');

addButton.addEventListener('click', () => {
    const noteText = noteInput.value;
    if (noteText.trim() !== '') {
        const li = document.createElement('li');
        li.classList.add('note');
        li.textContent = noteText;
        noteList.appendChild(li);
        noteInput.value = '';
    }
});
