
const storageKey = 'notes';
const container = document.getElementById('notesContainer');
const status = document.getElementById('noteStatus');
const form = document.getElementById('noteForm');
let notes = [];

try {
  const savedNotes = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (!Array.isArray(savedNotes) || savedNotes.some(note =>
    !note || typeof note.title !== 'string' || typeof note.content !== 'string'
  )) {
    throw new Error('Saved notes have an invalid format.');
  }
  notes = savedNotes;
} catch (error) {
  status.textContent = 'Saved notes could not be read. Add a note to replace the invalid saved data.';
  console.error('Unable to read saved notes:', error);
}

function saveNotes() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(notes));
    status.textContent = '';
    return true;
  } catch (error) {
    status.textContent = 'Your browser could not save this change. Check your storage settings and try again.';
    console.error('Unable to save notes:', error);
    return false;
  }
}

function renderNotes() {
  container.replaceChildren();

  notes.forEach((note, index) => {
    const article = document.createElement('article');
    article.className = 'note';
    const heading = document.createElement('h3');
    heading.textContent = note.title;
    const content = document.createElement('p');
    content.textContent = note.content;
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.dataset.index = String(index);
    deleteButton.setAttribute('aria-label', `Delete note: ${note.title}`);
    article.append(heading, content, deleteButton);
    container.append(article);
  });
}

container.addEventListener('click', event => {
  const button = event.target.closest('button[data-index]');
  if (!button || !container.contains(button)) {
    return;
  }

  const index = Number(button.dataset.index);
  if (!Number.isInteger(index) || index < 0 || index >= notes.length) {
    return;
  }

  const [deletedNote] = notes.splice(index, 1);
  if (!saveNotes()) {
    notes.splice(index, 0, deletedNote);
  }
  renderNotes();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  if (!title || !content) {
    return;
  }

  notes.push({ title, content });
  if (!saveNotes()) {
    notes.pop();
    return;
  }
  form.reset();
  renderNotes();
});

renderNotes();